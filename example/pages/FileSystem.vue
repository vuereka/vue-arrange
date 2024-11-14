<script setup lang="ts">
import { reactive } from "vue";
import FileSystemDirectory from "./components/FileSystemDirectory.vue";

export type TreeNode = {
  id: symbol;
  name: string;
  parent: symbol;
  type: "directory" | "file";
};

const rootDirectory = Symbol("root");
const usrDirectory = Symbol("usr");
const etcDirectory = Symbol("etc");
const varDirectory = Symbol("var");
const binDirectory = Symbol("bin");
const libDirectory = Symbol("lib");
const localDirectory = Symbol("local");
const logDirectory = Symbol("log");
const toc = reactive<TreeNode[]>([
  { id: usrDirectory, name: "usr", parent: rootDirectory, type: "directory" },
  { id: binDirectory, name: "bin", parent: usrDirectory, type: "directory" },
  {
    id: localDirectory,
    name: "local",
    parent: usrDirectory,
    type: "directory",
  },
  { id: etcDirectory, name: "etc", parent: rootDirectory, type: "directory" },
  { id: varDirectory, name: "var", parent: rootDirectory, type: "directory" },
  { id: libDirectory, name: "lib", parent: rootDirectory, type: "directory" },
  { id: logDirectory, name: "log", parent: varDirectory, type: "directory" },
  { id: Symbol(), name: "python3.sh", parent: localDirectory, type: "file" },
  { id: Symbol(), name: "grub.conf", parent: etcDirectory, type: "file" },
  { id: Symbol(), name: "wallet.dat", parent: localDirectory, type: "file" },
  { id: Symbol(), name: "hostname", parent: etcDirectory, type: "file" },
  { id: Symbol(), name: "sysctl.conf", parent: etcDirectory, type: "file" },
  { id: Symbol(), name: ".Xauthority", parent: varDirectory, type: "file" },
  { id: Symbol(), name: "syslog", parent: logDirectory, type: "file" },
  { id: Symbol(), name: "grep", parent: binDirectory, type: "file" },
  { id: Symbol(), name: "umount", parent: binDirectory, type: "file" },
]);
</script>

<template>
  <div class="border-black border rounded m-1 w-1/2">
    <FileSystemDirectory :toc="toc" :parent="rootDirectory" />
  </div>
</template>
