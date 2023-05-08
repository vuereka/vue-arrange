<script setup lang="ts">
import { computed, ref, watch } from "vue";
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
  if (!dropItem.destination) {
    return;
  }

  if (dropItem.destination === trashBin) {
    const trashBinBox = trashBinElement.value?.getBoundingClientRect();
    console.log(trashBinBox);
    listOptions.value.hoverTransition.leaveToClass = "scale-0";
    // dropItem.hoverElement.value && (dropItem.hoverElement.value.style['transform'] = 'translate(-250px)')
    if (dropItem.hoverElement.value) {
      const hoverBox = dropItem.hoverElement.value.getBoundingClientRect();
      dropItem.hoverElement.value.style["transition"] = "all 0.2s ease";
      dropItem.hoverElement.value.style["top"] = `${
        (trashBinBox.bottom -
          trashBinBox.top -
          hoverBox.bottom +
          hoverBox.top) /
          2 +
        trashBinBox.top
      }px`;
      dropItem.hoverElement.value.style["left"] = `${
        (trashBinBox.right -
          trashBinBox.left -
          hoverBox.right +
          hoverBox.left) /
          2 +
        trashBinBox.left
      }px`;
    }
    database.value.splice(database.value.indexOf(dropItem.payload), 1);
    return;
  }
  listOptions.value.hoverTransition.leaveToClass = "scale-100 opacity-0";
  if (dropItem.hoverElement.value) {
    const hoverBox = dropItem.hoverElement.value.getBoundingClientRect();
    dropItem.hoverElement.value.style["transition"] = "all 0.2s ease";
    dropItem.hoverElement.value.style["top"] = `${
      (trashBinBox.bottom - trashBinBox.top - hoverBox.bottom + hoverBox.top) /
        2 +
      trashBinBox.top
    }px`;
    dropItem.hoverElement.value.style["left"] = `${
      (trashBinBox.right - trashBinBox.left - hoverBox.right + hoverBox.left) /
        2 +
      trashBinBox.left
    }px`;
  }
  const done = dropItem.destination === doneList ? true : false;
  if (dropItem.toIndex !== undefined) {
    dropItem.destinationList.forEach((item: ItemType, index: number) => {
      database.value[database.value.indexOf(item)].order = index;
      database.value[database.value.indexOf(item)].done = done;
    });
  } else {
    database.value[database.value.indexOf(dropItem.payload)].done = done;
  }
};

const todoList = Symbol("Todo list");
const doneList = Symbol("Done list");
const dropzones = Symbol("Drop zones");
const trashBin = Symbol("Trash bin");
const trashBinElement = ref<HTMLElement>();

const listOptions = ref<ArrangeableOptions>({
  hoverClass: "opacity-70 cursor-grabbing drop-shadow-2xl scale-105",
  hoverTransition: {
    leaveFromClass: "opacity-70 scale-105",
    leaveActiveClass: "transition-all duration-500 linear",
  },
  pickedItemClass: "invisible",
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
