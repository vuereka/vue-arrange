<script setup lang="ts">
import { computed, ref } from "vue";
import { ArrangeableList, useMovingItem, type MovingItem } from "vue-arrange";

type ItemType = { order: number; cap: string; done?: boolean };
const { movingItem } = useMovingItem<ItemType>();

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
      cap: ($event.target as HTMLInputElement)?.value,
      done,
    },
  ];
  ($event.target as HTMLInputElement).value = "";
};

const dropItem = (dropItem: MovingItem<ItemType>) => {
  if (!dropItem.destination) {
    return;
  }
  const done = dropItem.destination === doneList ? true : false;
  if (dropItem.toIndex !== undefined) {
    dropItem.destinationList.forEach((item: ItemType, index: number) => {
      database.value[database.value.indexOf(item)].order = index;
      database.value[database.value.indexOf(item)].done = done;
    });
  } else {
    database.value[database.value.indexOf(dropItem.payload)].done = done;
  }
};

const todoList = Symbol("Todo list");
const doneList = Symbol("Done list");
const dropzones = Symbol("Drop zones");
</script>

<template>
  <div class="list">
    <div class="header">To do:</div>
    <ArrangeableList
      :list="todoItems"
      :name="todoList"
      :group="dropzones"
      :options="{
        hoverClass: 'hoverClass',
        pickedItemClass: 'pickedItemClass',
        unpickedItemClass: 'arrangeable',
        transitionName: 'transition',
      }"
      @drop-item="dropItem"
    >
      <template #default="{ item }">
        <div class="list-item-todo list-item">
          {{ item.cap }}
        </div>
      </template>
      <template #before="{ arrangedItems }">
        <div
          v-if="arrangedItems.length === 0 && movingItem"
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
    </ArrangeableList>
  </div>
  <div class="list">
    <div class="header">Done:</div>
    <ArrangeableList
      :list="doneItems"
      :name="doneList"
      :group="dropzones"
      :options="{
        hoverClass: 'hoverClass',
        pickedItemClass: 'pickedItemClass',
        unpickedItemClass: 'arrangeable',
        transitionName: 'transition',
      }"
      @drop-item="dropItem"
    >
      <template #default="{ item }">
        <div class="list-item-done list-item">
          {{ item.cap }}
        </div>
      </template>
      <template #before="{ arrangedItems }">
        <div
          v-if="arrangedItems.length === 0 && movingItem"
          class="list-item-done drop-zone list-item"
        />
      </template>
    </ArrangeableList>
  </div>
</template>
