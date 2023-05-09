<script setup lang="ts">
import { computed, ref } from "vue";
import colors from "tailwindcss/colors";
import {
  ArrangeableList,
  DropZone,
  useMovingItem,
  type MovingItem,
  ArrangeableOptions,
} from "../src";

type ItemType = { order: number; description: string; done?: boolean };
const { movingItem } = useMovingItem<ItemType>();

const database = ref<ItemType[]>([
  { order: 0, description: "Build app" },
  { order: 1, description: "Debug the code" },
  { order: 2, description: "Commit and push to github" },
  { order: 3, description: "Deploy to production" },
  { order: 4, description: "Be awesome" },
  { order: 0, description: "Set up Vue project", done: true },
]);
let counter = database.value.length + 1;

const todoItems = computed<ItemType[]>(() => {
  return database.value
    .filter((item: ItemType) => !item.done)
    .sort((a, b) => a.order - b.order);
});

const doneItems = computed<ItemType[]>(() => {
  return database.value
    .filter((item: ItemType) => item.done)
    .sort((a, b) => a.order - b.order);
});

const addItem = ($event: InputEvent, done?: boolean) => {
  database.value = [
    ...database.value,
    {
      order: counter++,
      description: ($event.target as HTMLInputElement)?.value,
      done,
    },
  ];
  ($event.target as HTMLInputElement).value = "";
};

const dropItem = (dropItem: MovingItem<ItemType>) => {
  // To make the hoverItem slide to an arbitrary location, this needs to be done with 'style',
  // which is impossible using the vue transition, which only uses classes.
  // To make the code cleaner, everything is done using css rather than hybrid.
  // There are 4 drop-cases in this simple app, each with its own logic and css transition:
  // 1. drop in the middle of nowhere, return to its original place
  // 2. drop in the trash bin
  // 3. drop into a list
  // 4. drop into the dropzone of an empty list
  dropItem.hoverElement.value.style.transition = "all 0.22s ease";
  if (!dropItem.destination) {
    Object.assign(dropItem.hoverElement.value.style, {
      opacity: 1,
      scale: 1,
      top: dropItem.originItemBoundingBox.top + "px", // N.b. does not account for scrolling
      left: dropItem.originItemBoundingBox.left + "px",
    });
    return;
  }
  if (dropItem.destination === trashBin) {
    // transition styles:
    const binBox = trashBinElement.value.getBoundingClientRect();
    const hoverBox = dropItem.hoverElement.value.getBoundingClientRect();
    Object.assign(dropItem.hoverElement.value.style, {
      top: `${(binBox.bottom + binBox.y - hoverBox.bottom + hoverBox.y) / 2}px`,
      left: `${(binBox.right + binBox.x - hoverBox.right + hoverBox.x) / 2}px`,
      scale: 0,
    });
    // logic:
    database.value.splice(database.value.indexOf(dropItem.payload), 1);
    return;
  }
  // else, (if there is a target, and it is not the trash bin)
  const done = dropItem.destination === doneList ? true : false;
  let snapToBox;
  if (dropItem.toIndex !== undefined) {
    snapToBox = document
      .getElementsByClassName("pickedItem")[0]
      ?.getBoundingClientRect();
    // logic
    dropItem.destinationList.forEach((item: ItemType, index: number) => {
      database.value[database.value.indexOf(item)].order = index;
      database.value[database.value.indexOf(item)].done = done;
    });
  } else {
    snapToBox = (done ? doneDrop : todoDrop).value.getBoundingClientRect();
    // logic:
    database.value[database.value.indexOf(dropItem.payload)].done = done;
  }
  Object.assign(dropItem.hoverElement.value.style, {
    top: snapToBox.top + "px",
    left: snapToBox.left + "px",
    opacity: 1,
    scale: 1,
    backgroundColor: done ? colors.fuchsia[200] : colors.teal[200],
  });
};

const todoList = Symbol("Todo list");
const doneList = Symbol("Done list");
const dropzones = Symbol("Drop zones");
const trashBin = Symbol("Trash bin");

const trashBinElement = ref<Element>();
const todoDrop = ref<Element>();
const doneDrop = ref<Element>();

const listOptions = ref<ArrangeableOptions>({
  hoverClass: "opacity-70 cursor-grabbing drop-shadow-2xl scale-105",
  hoverTransition: {
    duration: 220,
  },
  pickedItemClass: "invisible pickedItem",
  listTransition: { name: "list-transition" },
  handle: true,
});
</script>

<template>
  <div class="list">
    <div class="header">To do:</div>
    <ArrangeableList
      :list="todoItems"
      :name="todoList"
      :group="dropzones"
      :options="listOptions"
      @drop-item="dropItem"
    >
      <template #default="{ item }">
        <div class="listitem bg-teal-200 hover:drop-shadow-lg">
          <div name="handle" class="mr-2 cursor-grab">&#65049;</div>
          {{ item.description }}
        </div>
      </template>
      <template #before="{ arrangedItems }">
        <div
          ref="todoDrop"
          v-if="arrangedItems.length === 0 && movingItem"
          class="drop-zone listitem h-12 bg-teal-100"
        />
      </template>
      <template #after>
        <div class="listitem bg-teal-200 hover:drop-shadow">
          <input
            @change="addItem($event as InputEvent)"
            placeholder="New item"
          />
        </div>
      </template>
    </ArrangeableList>
  </div>
  <div class="list">
    <div class="header">Done:</div>
    <ArrangeableList
      :list="doneItems"
      :name="doneList"
      :group="dropzones"
      :options="listOptions"
      @drop-item="dropItem"
    >
      <template #default="{ item }">
        <div class="listitem bg-fuchsia-200 hover:drop-shadow">
          <div name="handle" class="mr-2 cursor-grab">&#65049;</div>
          {{ item.description }}
        </div>
      </template>
      <template #before="{ arrangedItems }">
        <div
          ref="doneDrop"
          v-if="arrangedItems.length === 0 && movingItem"
          class="listitem drop-zone h-12 bg-fuchsia-100"
        />
      </template>
    </ArrangeableList>
  </div>
  <DropZone
    :name="trashBin"
    :group="dropzones"
    v-slot="{ isHovering }"
    class="inline-block"
  >
    <div
      ref="trashBinElement"
      class="flex h-32 w-32 items-center justify-center transition-all"
      :class="isHovering ? 'text-6xl' : 'text-5xl'"
    >
      &#128465;
    </div>
  </DropZone>
</template>

<style scoped>
.list {
  width: 224px;
  height: fit-content;
  float: left;
  margin: 4px;
  border-radius: 6px;
  border-width: 2px;
  border-color: black;
  border-style: groove;
  text-align: left;
}

.header {
  padding: 8px;
  text-align: left;
  font-weight: bold;
  font-size: 30px;
}

.listitem {
  display: flex;
  align-items: center;
  width: 216px;
  margin: 2px;
  padding: 8px;
  font-size: 20px;
  border-radius: 4px;
  border-width: 2px;
  border-color: black;
  border-style: groove;
}

input {
  width: 100%;
  font-size: 18px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid black;
}

.drop-zone {
  border-style: dashed;
}
</style>
