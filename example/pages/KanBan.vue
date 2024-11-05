<script setup lang="ts">
import { ref } from "vue";
import KanBanList from "./components/KanBanList.vue";
import {
  ArrangeableList,
  DropZone,
  type MovingItem,
  type DropTargetIdentifier,
} from "../../src";
import { randomColorMap } from "../colors";

export type ItemType = { description: string };
export type ListType = {
  name: string;
  identifier: symbol;
  items: ItemType[];
  dropZone: DropTargetIdentifier;
  color: string;
};

const data = [
  "Build app",
  "Debug the code",
  "Commit and push to github",
  "Deploy to production",
  "Be awesome",
  "Set up Vue project",
];

const dropTargets = Symbol("Drop zones");
const trashBin = Symbol("Trash bin");
const trashBinElement = ref<Element>();

const lists = ref<ListType[]>([
  {
    name: "To do:",
    identifier: Symbol(),
    items: data.map((description) => ({ description })) as ItemType[],
    dropZone: dropTargets,
    color: randomColorMap(),
  },
  {
    name: "Done:",
    identifier: Symbol(),
    items: [] as ItemType[],
    dropZone: dropTargets,
    color: randomColorMap(),
  },
]);

const addItem = (description: string, listIdentifier: symbol) => {
  lists.value
    .find((list) => list.identifier === listIdentifier)
    ?.items.push({ description });
};

const dropItem = (item: MovingItem<ItemType>) => {
  if (item.destination === undefined) {
    // if there is no target, do nothing; return element to the original place
    return;
  }
  if (item.destination.identifier === trashBin) {
    // in the trashbin, destroy element from its original list
    lists.value[item.origin.identifier].items.splice(item.origin.index, 1);
    return;
  }
  // else, move the element to new position and/or new list
  const originItem = (item.origin.listItems as ItemType[]).splice(
    item.origin.index as number,
    1
  )[0];
  if (item.destination.index !== undefined) {
    if (item.destination.listItems)
      item.destination.listItems.splice(item.destination.index, 0, originItem);
  } else {
    if (item.destination.listItems) item.destination.listItems.push(originItem);
  }
};

const addList = (event: Event) => {
  const name = (event.target as HTMLInputElement)?.value;
  lists.value.push({
    name,
    identifier: Symbol(),
    items: [] as ItemType[],
    dropZone: dropTargets,
    color: newListColor.value,
  });
  newListColor.value = randomColorMap();
  (event.target as HTMLInputElement).value = "";
};

const dropList = (list: MovingItem<ListType>) => {
  if (list.destination === undefined) {
    return;
  }
  const originList = lists.value.splice(list.origin.index as number, 1)[0];
  if (list.destination.index !== undefined) {
    lists.value = [
      ...lists.value.slice(0, list.destination.index),
      originList,
      ...lists.value.slice(list.destination.index),
    ];
  } else {
    lists.value.push(originList);
  }
};

const arrangeableOptions = {
  hoverClass:
    "opacity-70 cursor-grabbing drop-shadow-[0_10px_15px_rgba(0,0,0,0.75)] scale-110",
};

const newListColor = ref(randomColorMap());
</script>

<template>
  <main class="flex flex-grow flex-row items-start overflow-auto">
    <ArrangeableList
      :list="lists"
      class="flex flex-grow flex-row items-start overflow-auto"
      :options="{
        ...arrangeableOptions,
        handle: 'listHandle',
      }"
      @drop-item="dropList"
    >
      <template #default="{ item: list }">
        <div
          class="float-left m-1 h-fit w-60 rounded-md border-2 border-black"
          :key="list.identifier"
          :style="{ backgroundColor: list.color[100] }"
        >
          <div class="flex border-none p-2 text-2xl font-bold">
            <div name="listHandle" class="mr-2 cursor-grab">&#65049;</div>
            <input
              class="w-full bg-transparent"
              @change="$event => list.name = ($event.target as HTMLInputElement)?.value"
              :value="list.name"
            />
          </div>
          <KanBanList
            :list="list"
            :group="dropTargets"
            :trash-bin="trashBin"
            :arrangeable-options="arrangeableOptions"
            @add-item="addItem"
            @drop-item="dropItem"
          />
        </div>
      </template>
      <template #after>
        <div
          class="m-1 h-fit w-60 rounded-md border-2 border-black"
          :style="{ backgroundColor: newListColor[100] }"
        >
          <div class="flex border-none p-2 text-2xl font-bold">
            <input
              class="w-full bg-transparent"
              @change="addList"
              placeholder="New list"
            />
          </div>
        </div>
      </template>
    </ArrangeableList>
    <DropZone
      :identifier="trashBin"
      :group="dropTargets"
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
