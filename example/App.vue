<script setup lang="ts">
import { type Component, shallowRef } from "vue";
import ColorSorting from "./pages/ColorSorting.vue";
import KanBan from "./pages/KanBan.vue";
import FileSystem from "./pages/FileSystem.vue";

const selection = shallowRef<Component>(ColorSorting);
const options = [
  {
    title: "Color Sorting Game",
    component: ColorSorting,
  },
  {
    title: "Kanban (Trello-like)",
    component: KanBan,
  },
  {
    title: "File Manager",
    component: FileSystem,
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
          @click="selection = option.component"
          class="m-2 inline cursor-pointer rounded-lg p-4 hover:underline"
          :class="
            selection === option.component ? 'bg-blue-300 font-extrabold' : ''
          "
        >
          {{ option.title }}
        </div>
      </nav>
    </header>
    <component :is="selection" />
  </div>
</template>
