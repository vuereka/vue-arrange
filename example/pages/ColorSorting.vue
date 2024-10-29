<script setup lang="ts">
import { ref } from "vue";
import { ArrangeableList, type MovingItem } from "../../src";
import tailwindColors from "tailwindcss/colors";

type ItemType = { name: string; color: string; index: number };

const colors = ref<ItemType[]>(
  Object.entries(tailwindColors)
    .slice(10, 27)
    .map(([colorName, colorMap], index) => ({
      name: colorName,
      color: colorMap[300],
      index,
    }))
);

const dropItem = ({ destination }: MovingItem<ItemType>) => {
  colors.value = destination?.listItems as ItemType[];
};

const shuffle = () => {
  colors.value.sort(() => Math.random() - 0.5);
  colors.value = [...colors.value];
};
const reset = () => {
  colors.value.sort((a, b) => a.index - b.index);
  colors.value = [...colors.value];
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
      list-key="color"
      :options="{
        pickedItemClass: 'invisible',
        hoverClass:
          'opacity-70 cursor-grabbing scale-105 drop-shadow-[0_10px_15px_rgba(0,0,0,0.25)]',
        // the ! overrides are required for top and left to override the following of the pointer
        // the ! overrides for other properties are necessary to override what is in hoverClass
        dropClass:
          '!top-[var(--landingzone-top)] !left-[var(--landingzone-left)] !opacity-100 !scale-100 drop-shadow-none',
        hoverTransitionClass: 'transition-all ease-in duration-100',
        listTransition: {
          moveClass: 'transition-all ease-in-out duration-100',
          // necessary for the list to move smoothly:
          leaveActiveClass: 'absolute',
        },
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
