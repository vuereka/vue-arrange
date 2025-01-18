<script setup lang="ts">
import { computed, provide, reactive, ref } from "vue";
import FileSystemDirectory from "./FileSystemDirectory.vue";

export type TreeNode = {
  id: symbol;
  name: string;
  parent: symbol;
  type: "directory" | "file";
  index?: number;
  created?: Date;
};

function randomCreationDate() {
  return new Date(Date.now() - Math.floor(Math.random() * 2e11));
}

const rootDirectory = Symbol("root");
const usrDirectory = Symbol("usr");
const etcDirectory = Symbol("etc");
const varDirectory = Symbol("var");
const binDirectory = Symbol("bin");
const libDirectory = Symbol("lib");
const locDirectory = Symbol("local");
const logDirectory = Symbol("log");
const toc = reactive<TreeNode[]>([
  { id: usrDirectory, name: "usr", parent: rootDirectory, type: "directory" },
  { id: binDirectory, name: "bin", parent: usrDirectory, type: "directory" },
  { id: locDirectory, name: "local", parent: usrDirectory, type: "directory" },
  { id: etcDirectory, name: "etc", parent: rootDirectory, type: "directory" },
  { id: varDirectory, name: "var", parent: rootDirectory, type: "directory" },
  { id: libDirectory, name: "lib", parent: rootDirectory, type: "directory" },
  { id: logDirectory, name: "log", parent: varDirectory, type: "directory" },
  { id: Symbol(), name: "python3.sh", parent: locDirectory, type: "file" },
  { id: Symbol(), name: "grub.conf", parent: etcDirectory, type: "file" },
  { id: Symbol(), name: "wallet.dat", parent: locDirectory, type: "file" },
  { id: Symbol(), name: "hostname", parent: etcDirectory, type: "file" },
  { id: Symbol(), name: "sysctl.conf", parent: etcDirectory, type: "file" },
  { id: Symbol(), name: ".Xauthority", parent: varDirectory, type: "file" },
  { id: Symbol(), name: "syslog", parent: logDirectory, type: "file" },
  { id: Symbol(), name: "grep", parent: binDirectory, type: "file" },
  { id: Symbol(), name: "umount", parent: binDirectory, type: "file" },
  { id: Symbol(), name: "swapfile", parent: rootDirectory, type: "file" },
]);
toc.forEach((node, index) => {
  node.index = index;
  node.created = randomCreationDate();
});

const sortBy = ref<"name" | "created" | "none">("none");
const directoriesFirst = ref<boolean>(true);
const sortedToc = computed(() => {
  return toc.slice().sort((a, b) => {
    if (directoriesFirst.value) {
      if (a.type === "directory" && b.type !== "directory") return -1;
      if (a.type !== "directory" && b.type === "directory") return 1;
    }
    if (sortBy.value === "none") return a.index! - b.index!;
    if (sortBy.value === "name") return a.name.localeCompare(b.name);
    return a.created!.getTime() - b.created!.getTime();
  });
});

const expandAll = ref<boolean | undefined>(false);
provide("expandAll", expandAll);
</script>

<template>
  <div class="border-black border rounded-lg m-2 w-1/2">
    <div
      name="Controls"
      class="flex flex-row justify-between border border-1 rounded m-1 border-slate-300"
    >
      <div class="flex flex-col">
        <div name="Sorting control">
          <label for="sortDropdown" class="m-2">Sort by:</label>
          <select id="sortDropdown" v-model="sortBy" class="m-2 p-1">
            <option value="none">-</option>
            <option value="name">Name</option>
            <option value="created">Created</option>
          </select>
        </div>
        <div name="Directories first control">
          <label for="directoriesFirst" class="m-2">Directories first:</label>
          <input
            id="directoriesFirst"
            type="checkbox"
            v-model="directoriesFirst"
            class="m-2 p-1"
          />
        </div>
      </div>
      <div name="Expand/collapse controls" class="flex flex-col">
        <button
          @click="expandAll = true"
          class="rounded bg-slate-200 m-1 p-1 border-black border-2"
        >
          Expand all
        </button>
        <button
          @click="expandAll = false"
          class="rounded bg-slate-200 m-1 p-1 border-black border-2"
        >
          Collapse all
        </button>
      </div>
    </div>
    <div class="ml-14 p-1 font-bold flex flex-row w-full">
      <div>Name:</div>
      <div class="ml-auto mr-16">Created:</div>
    </div>
    <FileSystemDirectory :toc="sortedToc" :directory="rootDirectory" />
  </div>
</template>
