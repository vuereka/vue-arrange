<script setup lang="ts">
import { computed, ref } from "vue";
import { ArrangeableList, useMovingItem, type MovingItem } from "../src";

type ItemType = { order: number; description: string; done?: boolean };
const { movingItem } = useMovingItem<ItemType>();

const database = ref<ItemType[]>([
  { order: 0, description: "Build app" },
  { order: 1, description: "Debug the code" },
  { order: 2, description: "Commit and push to github" },
  { order: 3, description: "Deploy to production" },
  { order: 4, description: "Be awesome" },
  { order: 0, description: "Set up Vue project", done: true },
]);
let counter = database.value.length + 1;

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
      order: counter++,
      description: ($event.target as HTMLInputElement)?.value,
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
        hoverClass: 'opacity-70 cursor-grabbing',
        pickedItemClass: 'invisible',
        unpickedItemClass: 'cursor-grab',
        transitionName: 'transition',
      }"
      @drop-item="dropItem"
    >
      <template #default="{ item }">
        <div class="bg-teal-200 listitem">
          {{ item.description }}
        </div>
      </template>
      <template #before="{ arrangedItems }">
        <div
          v-if="arrangedItems.length === 0 && movingItem"
          class="bg-teal-200 drop-zone listitem"
        />
      </template>
      <template #after>
        <div class="bg-teal-200 listitem">
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
        hoverClass: 'opacity-70 cursor-grabbing',
        pickedItemClass: 'invisible',
        unpickedItemClass: 'cursor-grab',
        transitionName: 'transition',
      }"
      @drop-item="dropItem"
    >
      <template #default="{ item }">
        <div class="bg-fuchsia-200 listitem">
          {{ item.description }}
        </div>
      </template>
      <template #before="{ arrangedItems }">
        <div
          v-if="arrangedItems.length === 0 && movingItem"
          class="bg-fuchsia-200 h-12 listitem drop-zone"
        />
      </template>
    </ArrangeableList>
  </div>
</template>

<style scoped>
.list {
  width: 224px;
  height: fit-content;
  float: left;
  margin: 4px;
  border-radius: 6px;
  border-width: 2px;
  border-color: black;
  border-style: groove;
  text-align: left;
}

.header {
  padding: 8px;
  text-align: left;
  font-weight: bold;
  font-size: 30px;
}

.listitem {
  display: flex;
  align-items: center;
  width: 216px;
  margin: 2px;
  padding: 8px;
  font-size: 20px;
  border-radius: 4px;
  border-width: 2px;
  border-color: black;
  border-style: groove;
}

input {
  width: 100%;
  font-size: 18px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid black;
}

.drop-zone {
  border-style: dashed;
}
</style>