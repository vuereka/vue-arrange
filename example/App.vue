<script setup lang="ts">
import { computed, ref } from "vue";
import { Arrangeable } from "vue-arrange";
import { DraggingType } from "vue-arrange/dist/index";

type ItemType = { order: number; cap: string; done?: boolean };

const database = ref<ItemType[]>([
  { order: 0, cap: "Build app" },
  { order: 1, cap: "Debug the code" },
  { order: 2, cap: "Commit and push to github" },
  { order: 3, cap: "Deploy to production" },
  { order: 4, cap: "Be awesome" },
  { order: 0, cap: "Set up Vue project", done: true },
]);
let id = database.value.length + 1;

const todoItems = computed<ItemType[]>(() => {
  return database.value
    .filter((item: ItemType) => !item.done)
    .sort((a, b) => a.order - b.order);
});

const doneItems = computed<ItemType[]>(() => {
  return database.value
    .filter((item: ItemType) => item.done)
    .sort((a, b) => a.order - b.order);
});

const addItem = ($event: InputEvent, done?: boolean) => {
  database.value = [
    ...database.value,
    {
      order: id++,
      cap: (<HTMLInputElement>$event.target)?.value,
      done,
    },
  ];
  (<HTMLInputElement>$event.target).value = "";
};

const dropItem = (dropItem: DraggingType) => {
  if (!dropItem.destination) {
    return;
  }
  const targetList = dropItem.destination === doneList ? DoneList : TodoList;
  const done = dropItem.destination === doneList ? true : false;
  if (dropItem.toIndex !== undefined) {
    targetList.value?.arrangedItems.forEach((item: ItemType, index: number) => {
      database.value[database.value.indexOf(item)].order = index;
      database.value[database.value.indexOf(item)].done = done;
    });
  } else {
    database.value[database.value.indexOf(dropItem.payload)].done = done;
  }
};

const TodoList = ref<typeof Arrangeable>();
const DoneList = ref<typeof Arrangeable>();

const todoList = Symbol("Todo list");
const doneList = Symbol("Done list");
const dropzones = Symbol("Drop zones");
</script>

<template>
  <div class="list">
    <div class="header">To do:</div>
    <Arrangeable
      ref="TodoList"
      :list="todoItems"
      :name="todoList"
      :group="dropzones"
      :options="{
        hoverClass: 'hoverClass',
        pickedItemClass: 'pickedItemClass',
        unpickedItemClass: 'arrangeable',
        transitionName: 'customTransition',
      }"
      @drop-item="dropItem"
    >
      <template #default="{ item }">
        <div class="list-item-todo list-item">
          {{ item.cap }}
        </div>
      </template>
      <template #before>
        <div
          v-if="TodoList?.arrangedItems.length === 0 && TodoList?.dragging"
          class="list-item-todo drop-zone list-item"
        />
      </template>
      <template #after>
        <div class="list-item-todo list-item">
          <input
            @change="addItem($event as InputEvent)"
            placeholder="New item"
          />
        </div>
      </template>
    </Arrangeable>
  </div>
  <div class="list">
    <div class="header">Done:</div>
    <Arrangeable
      ref="DoneList"
      :list="doneItems"
      :name="doneList"
      :group="dropzones"
      :options="{
        hoverClass: 'hoverClass',
        pickedItemClass: 'pickedItemClass',
        unpickedItemClass: 'arrangeable',
      }"
      @drop-item="dropItem"
    >
      <template #default="{ item }">
        <div class="list-item-done list-item">
          {{ item.cap }}
        </div>
      </template>
      <template #before>
        <div
          v-if="DoneList?.arrangedItems.length === 0 && DoneList?.dragging"
          class="list-item-done drop-zone list-item"
        />
      </template>
    </Arrangeable>
  </div>
</template>
