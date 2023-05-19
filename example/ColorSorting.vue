<script setup lang="ts">
import { ref } from "vue";
import { ArrangeableList, type MovingItem } from "../src";

type ItemType = { name: string; color: string; index: number };
const items = ref<ItemType[]>(
  [
    {
      name: "red",
      color: "#fecaca",
    },
    {
      name: "orange",
      color: "#fed7aa",
    },
    {
      name: "amber",
      color: "#fde68a",
    },
    {
      name: "yellow",
      color: "#fef08a",
    },
    {
      name: "lime",
      color: "#d9f99d",
    },
    {
      name: "green",
      color: "#bbf7d0",
    },
    {
      name: "emerald",
      color: "#a7f3d0",
    },
    {
      name: "teal",
      color: "#99f6e4",
    },
    {
      name: "cyan",
      color: "#a5f3fc",
    },
    {
      name: "sky",
      color: "#bae6fd",
    },
    {
      name: "blue",
      color: "#bfdbfe",
    },
    {
      name: "indigo",
      color: "#c7d2fe",
    },
    {
      name: "violet",
      color: "#ddd6fe",
    },
    {
      name: "purple",
      color: "#e9d5ff",
    },
    {
      name: "fuchsia",
      color: "#f5d0fe",
    },
    {
      name: "pink",
      color: "#fbcfe8",
    },
    {
      name: "rose",
      color: "#fecdd3",
    },
  ].map((item, index) => ({ ...item, index }))
);

const dropItem = ({ destinationList }: MovingItem<ItemType>) => {
  items.value = destinationList as ItemType[];
};

const shuffle = () => {
  items.value.sort((a, b) => Math.random() - 0.5);
  items.value = [...items.value];
};
const reset = () => {
  items.value.sort((a, b) => a.index - b.index);
  items.value = [...items.value];
};
</script>

<template>
  <main class="flex flex-col items-center overflow-auto">
    <h1 class="m-2 text-xl font-extrabold">Color sorting game:</h1>
    <div>
      <button
        @click="shuffle"
        class="m-2 rounded-lg border-2 border-stone-400 bg-stone-200 p-2 hover:drop-shadow-lg active:translate-y-0.5"
      >
        shuffle
      </button>
      <button
        @click="reset"
        class="m-2 rounded-lg border-2 border-stone-400 bg-stone-200 p-2 hover:drop-shadow-lg active:translate-y-0.5"
      >
        reset
      </button>
    </div>
    <ArrangeableList
      :list="items"
      list-key="color"
      :options="{
        pickedItemClass: 'invisible',
        hoverClass: 'opacity-70 cursor-grabbing',
        listTransition: { name: 'list-transition' },
      }"
      @drop-item="dropItem"
      v-slot="{ item }"
    >
      <div
        class="m-2 flex h-10 w-96 cursor-grab justify-center rounded-lg p-2"
        :style="{ backgroundColor: item.color }"
      >
        {{ item.name }}
      </div>
    </ArrangeableList>
  </main>
</template>
