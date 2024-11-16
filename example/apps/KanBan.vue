<script setup lang="ts">
import { ref } from "vue";
import KanBanList from "./KanBanList.vue";
import { ArrangeableList, DropZone, type MovingItem } from "../../src";
import { randomColorMap } from "./colors";

export type ItemType = {
  id: symbol;
  description: string;
  listId: symbol;
  index: number;
};
export type ListType = {
  name: string;
  id: symbol;
  color: string;
  index: number;
};

const itemData = [
  "Build app",
  "Debug the code",
  "Commit and push to github",
  "Deploy to production",
  "Be awesome",
  "Set up Vue project",
];

const listData = ["To do:", "Done"];

const dropTargets = Symbol("Drop targets");
const trashBin = Symbol("Trash bin");

const lists = ref<ListType[]>(
  listData.map((name, index) => ({
    name,
    id: Symbol(name),
    color: randomColorMap(),
    index,
  })),
);

const items = ref<ItemType[]>(
  itemData.map((description, index) => ({
    description,
    id: Symbol(),
    listId: lists.value[Math.floor(Math.random() * listData.length)].id,
    index,
  })),
);

const addItem = (description, listId: symbol) => {
  items.value.push({
    description,
    id: Symbol(),
    listId,
    index: Math.max(...items.value.map(({ index }) => index)) + 1,
  });
};

const addList = (event: Event) => {
  const target = event.target as HTMLInputElement;
  lists.value.push({
    name: target.value,
    id: Symbol(target.value),
    color: newListColor.value,
    index: Math.max(...lists.value.map(({ index }) => index)) + 1,
  });
  newListColor.value = randomColorMap();
  target.value = "";
};

const dropItem = <T extends ListType | ItemType>(item: MovingItem<T>) => {
  const targetTable = "listId" in item.payload ? items : lists;
  // if there is no target, do nothing; return element to the original place
  if (item.destination === undefined) return;
  // if the target is the trashbin, remove it
  if (item.destination.identifier === trashBin) {
    targetTable.value = targetTable.value.filter(
      ({ id }) => id !== item.payload.id,
    ) as typeof targetTable.value;
  }
  // else, add the element to the destination list
  else {
    if (item.destination.listItems?.length === 0) {
      item.payload.index = 0;
      if ("listId" in item.payload)
        item.payload.listId = item.destination?.identifier as symbol;
    }
    item.destination.listItems?.forEach((listItem, index) => {
      listItem.index = index;
      if ("listId" in listItem)
        listItem.listId = item.destination?.identifier as symbol;
    });
    targetTable.value.sort((a, b) => a.index - b.index);
  }
};

const arrangeableOptions = {
  hoverClass:
    "opacity-70 cursor-grabbing drop-shadow-[0_10px_15px_rgba(0,0,0,0.75)] scale-110 -rotate-3",
  pickedItemClass: "opacity-20",
};

const newListColor = ref(randomColorMap());
</script>

<template>
  <main class="flex flex-grow flex-row items-start overflow-auto">
    <ArrangeableList
      :list="lists"
      identifier="lists"
      class="flex flex-grow flex-row items-start overflow-auto"
      :options="{
        ...arrangeableOptions,
        handle: 'listHandle',
      }"
      @drop-item="dropItem"
      :targets="[trashBin, 'lists']"
    >
      <template #default="{ item: list }">
        <div
          class="float-left m-1 h-fit w-60 rounded-md border-2 border-black"
          :style="{ backgroundColor: list.color[100] }"
        >
          <div class="flex border-none p-2 text-2xl font-bold">
            <div name="listHandle" class="mr-2 cursor-grab select-none">
              &#65049;
            </div>
            <input
              class="w-full bg-transparent"
              @change="
                ($event) =>
                  (list.name = ($event.target as HTMLInputElement)?.value)
              "
              :value="list.name"
            />
          </div>
          <KanBanList
            :list="list"
            :items="items.filter(({ listId }) => listId === list.id)"
            :group="dropTargets"
            :trashBin="trashBin"
            :arrangeableOptions="arrangeableOptions"
            @add-item="addItem"
            @drop-item="dropItem"
          />
        </div>
      </template>
      <template #after>
        <div
          class="m-1 flex h-fit w-60 rounded-md border-2 border-black p-2 text-2xl"
          :style="{ backgroundColor: newListColor[100] }"
        >
          <input
            class="w-full border-b-2 border-gray-400 bg-transparent italic outline-none focus-visible:border-black"
            @change="addList"
            placeholder="New list"
          />
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
        class="flex h-40 w-40 items-center justify-center transition-all"
        :class="isHovering ? 'text-8xl' : 'text-7xl'"
      >
        &#128465;
      </div>
    </DropZone>
  </main>
</template>
