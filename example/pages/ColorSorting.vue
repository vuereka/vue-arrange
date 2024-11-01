<script setup lang="ts">
import { ref } from "vue";
import { ArrangeableList, type MovingItem } from "../../src";
import { tailwindColors } from "../colors";

type ItemType = { name: string; color: string; index: number };

const colors = ref<ItemType[]>(
  Object.keys(tailwindColors).map((color, index) => ({
    name: color,
    color: tailwindColors[color][300],
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
        // base class of the hovered element:
        hoverClass:
          'opacity-70 cursor-grabbing scale-105 drop-shadow-[0_10px_15px_rgba(0,0,0,0.25)]',
        // the ! overrides are required for top and left to override the following of the pointer
        hoverTransition: {
          // original element:
          enterFromClass: 'opacity-100 scale-100 drop-shadow-none',
          // transition-all should be avoided here, it will make the move-away clunky
          enterActiveClass:
            'transition-opacity transition-shadow transition-transform',
          // to snap to the target element, these should be the values:
          leaveActiveClass: 'transition-all duration-500',
          leaveToClass:
            '!top-[var(--landingzone-top)] !left-[var(--landingzone-left)] opacity-100 scale-100 drop-shadow-none',
        },
        listTransition: {
          moveClass: 'transition-all duration-300',
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
