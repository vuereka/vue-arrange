<script setup lang="ts">
import { type Component, shallowRef } from "vue";
import ColorSorting from "./apps/ColorSorting.vue";
import KanBan from "./apps/KanBan.vue";
import FileSystem from "./apps/FileSystem.vue";

const selection = shallowRef<Component>(ColorSorting);
const options = [
  {
    title: "Color Sorting Game",
    subtitle: "Simple drag&drop list example",
    component: ColorSorting,
  },
  {
    title: "Kanban (Trello-like)",
    subtitle: "Lists within lists",
    component: KanBan,
  },
  {
    title: "File Manager",
    subtitle: "Recursively stacked lists",
    component: FileSystem,
  },
];
</script>

<template>
  <div class="flex h-screen flex-col">
    <header class="bg-blue-200 p-1">
      <nav class="flex flex-row">
        <div
          v-for="option in options"
          :key="option.title"
          @click="selection = option.component"
          class="m-2 inline cursor-pointer rounded-lg p-4 hover:underline"
          :class="selection === option.component ? 'bg-blue-300' : ''"
        >
          <div
            :class="
              selection === option.component
                ? 'bg-blue-300 font-extrabold'
                : 'font-bold'
            "
          >
            {{ option.title }}
          </div>
          <div class="text-sm italic font-light text-wrap">
            {{ option.subtitle }}
          </div>
        </div>
      </nav>
    </header>
    <component :is="selection" />
  </div>
</template>
