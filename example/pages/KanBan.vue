<script setup lang="ts">
import { computed, Ref, ref } from "vue";
import {
  ArrangeableList,
  DropZone,
  useMovingItem,
  type MovingItem,
  ArrangeableOptions,
} from "../../src";
import { DropTargetIdentifier } from "../../src/types";
import tailwindColors from "tailwindcss/colors";

type ItemType = { description: string };
const { movingItem } = useMovingItem<ItemType>();

const data = [
  "Build app",
  "Debug the code",
  "Commit and push to github",
  "Deploy to production",
  "Be awesome",
  "Set up Vue project",
];

type ListType = {
  name: string;
  items: ItemType[];
  dropZone: Ref<Element | undefined>;
  color: string;
};

const colors = Object.entries(tailwindColors).slice(10, 27);
const randomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)][1];
};

const lists = ref<ListType[]>([
  {
    name: "To do:",
    items: data.map((description) => ({ description })) as ItemType[],
    dropZone: ref<Element>(),
    color: randomColor(),
  },
  {
    name: "Done:",
    items: [] as ItemType[],
    dropZone: ref<Element>(),
    color: randomColor(),
  },
]);

const addItem = ($event: InputEvent, listIdentifier: DropTargetIdentifier) => {
  if (!$event.target) return;
  lists.value[listIdentifier].items.push({
    description: ($event.target as HTMLInputElement).value,
  });
  console.log(
    lists.value[listIdentifier].items.map((item) => item.description)
  );
  ($event.target as HTMLInputElement).value = "";
};

const dropItem = (item: MovingItem<ItemType>) => {
  // There are 4 drop-cases in this simple app, each with its own logic:
  // 1. drop in the middle of nowhere, return to its original place
  // 2. drop in the trash bin
  // 3. drop into a list
  // 4. drop into the dropzone of an empty list
  if (item.destination === undefined) {
    return;
  }
  if (item.destination.identifier === trashBin) {
    lists.value[item.origin.identifier].items.splice(item.origin.index, 1);
    return;
  }
  // else, (if there is a target, and it is not the trash bin)
  if (item.origin.listItems && item.origin.index !== undefined) {
    if (item.destination?.index !== undefined) {
      if (item.destination.listItems)
        item.destination.listItems.splice(
          item.destination.index,
          0,
          item.origin.listItems.splice(item.origin.index, 1)[0]
        );
    } else {
      if (item.destination.listItems)
        item.destination.listItems.push(
          item.origin.listItems.splice(item.origin.index, 1)[0]
        );
    }
  }
};

const dropzones = Symbol("Drop zones");
const trashBin = Symbol("Trash bin");

const trashBinElement = ref<Element>();

const listOptions = {
  hoverClass:
    "opacity-70 cursor-grabbing drop-shadow-[0_10px_15px_rgba(0,0,0,0.75)] scale-110",
  pickedItemClass: "invisible",
  hoverTransition: {
    enterFromClass: "!opacity-100 !scale-100 drop-shadow-none",
    enterActiveClass:
      "transition-opacity transition-shadow transition-transform",
  },
  listTransition: {
    moveClass: "transition-all",
    // necessary for the list to move smoothly:
    leaveActiveClass: "absolute",
  },
  handle: "grabHandle",
};
</script>

<template>
  <main class="flex flex-grow flex-row items-start overflow-auto">
    <div
      class="list"
      v-for="(list, listIdentifier) in lists"
      :key="listIdentifier"
      :style="{ backgroundColor: list.color[100] }"
    >
      <div class="header">
        <input
          class="header"
          @change="$event => list.name = ($event.target as HTMLInputElement)?.value"
          :value="list.name"
        />
      </div>
      <ArrangeableList
        :list="list.items as ItemType[]"
        :identifier="listIdentifier"
        :group="dropzones"
        :options="{
          ...listOptions,
          dropClass:
            movingItem?.destination?.identifier === trashBin
              ? 'transition-all scale-0 opacity-100 !top-[var(--landingzone-top)] !left-[var(--landingzone-left)] '
              : 'transition-all opacity-100 scale-100 drop-shadow-none !top-[var(--landingzone-top)] !left-[var(--landingzone-left)]',
        }"
        @drop-item="dropItem"
      >
        <template #default="{ item }">
          <div class="listitem" :style="{ backgroundColor: list.color[300] }">
            <div name="grabHandle" class="mr-2 cursor-grab">&#65049;</div>
            {{ item.description }}
          </div>
        </template>
        <template #before="{ arrangedItems }">
          <div
            ref="list.dropZone"
            v-if="arrangedItems.length === 0 && movingItem"
            class="drop-zone listitem h-12"
            :style="{ backgroundColor: list.color[200] }"
          />
        </template>
        <template #after>
          <div class="listitem" :style="{ backgroundColor: list.color[200] }">
            <input
              @change="addItem($event as InputEvent, listIdentifier)"
              placeholder="New item"
            />
          </div>
        </template>
      </ArrangeableList>
    </div>
    <DropZone
      :identifier="trashBin"
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
  </main>
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
  padding-left: 8px;
  text-align: left;
  font-weight: bold;
  font-size: 30px;
  border-bottom: none;
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
