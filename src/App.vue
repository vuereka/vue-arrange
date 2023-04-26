<script setup lang="ts">
import {computed, ref} from 'vue';
import ArrangeList from './components/ArrangeList.vue';
import { Arrangeable } from './components/useDragging';

type ItemType = { id: number; cap: string, done?: boolean }

const database = ref<ItemType[]>([
  { id: 1, cap: "Fix this code" },
  { id: 2, cap: "Deploy to production" },
  { id: 3, cap: "Be awesome" },
  { id: 4, cap: "Relax" },
  { id: 5, cap: "Set up Vue project", done: true },
]);
let id = database.value.length + 1;

const todoItems = computed<ItemType[]>(()=>{
  return database.value.filter((item: ItemType)=>!item.done);
})

const doneItems = computed<ItemType[]>(()=>{
  return database.value.filter((item: ItemType)=>item.done);
})

const addItem = ($event: InputEvent, done?: boolean) => {
  database.value = [
    ...database.value, 
    {
      id: id++,
      cap: (<HTMLInputElement>$event.target)?.value,
      done,
    },
  ];
  (<HTMLInputElement>$event.target).value = "";
}

const dropItem = (item: Arrangeable<ItemType>) => {
  console.log("dropping Item from done list", item, item.destination)
  if(item.destination === doneList) {
    console.log('dropping on done list')
    database.value[database.value.indexOf(item.payload)].done = true;
    return;
  }
  if(item.destination === todoList) {
    console.log('dropping on todo list')
    database.value[database.value.indexOf(item.payload)].done = false;
    return;
  }
  database.value = database.value;
}

const todoList = Symbol();
const doneList = Symbol();
const dropzones = Symbol();
</script>

<template>
  <div class="list">
    <div class="header">To do:</div>
    <ArrangeList 
      :list="todoItems" 
      :name="todoList"
      :group="dropzones"
      :options="{ hoverClass: 'hoverClass', pickedItemClass: 'pickedItemClass' }" 
      @drop-item="dropItem"
    >
      <template #default="{ item }">
        <div class="list-item list-item-todo">
          {{ item.cap }}
        </div>
      </template>
      <template #after>
        <div class="list-item list-item-todo">
          <input @change="addItem($event)" />
        </div>
      </template>
    </ArrangeList>
  </div>
  <div class="list">
    <div class="header">Done:</div>
    <ArrangeList 
      :list="doneItems" 
      :name="doneList"
      :group="dropzones"
      :options="{ hoverClass: 'hoverClass', pickedItemClass: 'pickedItemClass' }" 
      v-slot="{ item }"
      @drop-item="dropItem"
    >
      <div class="list-item list-item-done">
        {{ item.cap }}
      </div>
    </ArrangeList>
  </div>
</template>

<style scoped>
.list {
  height: fit-content;
  float: left;
  margin: 4px;
  border-radius: 6px;
  border-width: 2px;
  border-color: black;
  border-style:groove;
  text-align: left;
}

.header {
  padding: 8px;
  text-align: left;
  font-weight: bold;
  font-size: 30px;
}

.list-item {
  display: flex;
  align-items: center;
  width: 200px;
  height: 40px;
  margin: 2px;
  padding: 8px;
  font-size: 20px;
  border-radius: 4px;
  border-width: 2px;
  border-color: black;
  border-style:groove;
}

.list-item-todo {
  background-color: aquamarine;
}

.list-item input {
  background-color: transparent;
}

.list-item-done {
  background-color: lavender;
}

.invisible {
  visibility: hidden;
}
</style>