<script setup lang="ts">
import { ref, shallowRef } from "vue";
import ColorSorting from "./ColorSorting.vue";
import TodoList from "./TodoList.vue";

const selection = shallowRef(TodoList);
const options = [
  {
    title: "Color Sorting Game",
    comp: ColorSorting,
  },
  {
    title: "Todo List",
    comp: TodoList,
  },
];
</script>

<template>
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
</template>
