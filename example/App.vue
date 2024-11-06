<script setup lang="ts">
import { shallowRef } from "vue";
import ColorSorting from "./pages/ColorSorting.vue";
import KanBan from "./pages/KanBan.vue";

const selection = shallowRef(ColorSorting);
const options = [
  {
    title: "Color Sorting Game",
    comp: ColorSorting,
  },
  {
    title: "Kanban (Trello-like)",
    comp: KanBan,
  },
];
</script>

<template>
  <div class="flex h-screen flex-col">
    <header class="bg-blue-200 p-4">
      <nav class="">
        <div
          v-for="option in options"
          :key="option.title"
          @click="selection = option.comp"
          class="m-2 inline cursor-pointer rounded-lg p-4 hover:underline"
          :class="selection === option.comp ? 'bg-blue-300 font-extrabold' : ''"
        >
          {{ option.title }}
        </div>
      </nav>
    </header>
    <component :is="selection" />
  </div>
</template>
