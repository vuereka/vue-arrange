<script setup lang="ts">
import { ref } from "vue";
import { ArrangeableList, type MovingItem } from "../../src";
import { tailwindColors } from "./colors";

type ItemType = { name: string; color: string; index: number };

const colors = ref<ItemType[]>(
  Object.keys(tailwindColors).map((color, index) => ({
    name: color,
    color: tailwindColors[color][300],
    index,
  })),
);

const dropItem = ({ destination }: MovingItem<ItemType>) => {
  colors.value = destination?.listItems as ItemType[];
};

const shuffle = () => {
  colors.value.sort(() => Math.random() - 0.5);
};

const reset = () => {
  colors.value.sort((a, b) => a.index - b.index);
};
</script>

<template>
  <main class="flex flex-grow flex-col items-center overflow-auto">
    <h1 class="m-2 text-xl font-extrabold">Tailwind color sorting game:</h1>
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
      :list="colors"
      :options="{
        hoverClass:
          'opacity-70 cursor-grabbing scale-150 drop-shadow-[0_10px_15px_rgba(0,0,0,0.25)]',
      }"
      @drop-item="dropItem"
      v-slot="{ item }"
    >
      <div
        class="m-2 flex h-10 w-96 cursor-grab select-none justify-center rounded-lg p-2 hover:drop-shadow-lg"
        :style="{ backgroundColor: item.color }"
      >
        {{ item.name }}
      </div>
    </ArrangeableList>
  </main>
</template>
