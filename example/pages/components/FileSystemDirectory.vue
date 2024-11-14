<script setup lang="ts">
import ArrangeableList from "../../../src/ArrangeableList.vue";
import { MovingItem, useMovingItem } from "../../../src";

import { type TreeNode } from "../FileSystem.vue";
import Disclosure from "./Disclosure.vue";

const { isMoving } = useMovingItem<TreeNode>();

const props = defineProps<{
  toc: TreeNode[];
  parent: symbol;
}>();

const moveItem = (item: MovingItem<TreeNode>) => {
  item.payload.parent = item.destination?.identifier as symbol;
};

const expanded = "⏷";
const collapsed = "⏵";
const directory = "📁";
const openDirectory = "📂";
const file = "📄";
</script>

<template>
  <ArrangeableList
    :list="toc.filter((node) => node.parent === parent)"
    :identifier="parent"
    group="tree"
    :options="{
      handle: 'treeHandle',
      pickedItemClass: 'bg-slate-200 rounded m-2 text-transparent',
      hoverClass: 'opacity-70 cursor-grabbing',
      liftDelay: 200,
    }"
    @drop-item="moveItem"
    v-slot="{ item }"
  >
    <Disclosure v-slot="{ open, toggle }">
      <div
        class="m-2 flex items-center whitespace-normal break-words p-1 text-xl select-none"
      >
        <div
          class="w-4 cursor-pointer text-slate-400"
          @click="toggle"
          :class="isMoving(item) && 'invisible'"
        >
          {{ item.type === "directory" ? (open ? expanded : collapsed) : "" }}
        </div>
        <div name="treeHandle" class="ml-1 cursor-grab flex flex-row">
          {{
            item.type === "directory"
              ? open
                ? openDirectory
                : directory
              : file
          }}
          <input
            name="treeHandle"
            class="ml-2 w-full bg-transparent"
            :value="item.name"
            @change="
              ({ target }) => (item.name = (target as HTMLInputElement).value)
            "
            @dblclick="($event.target as HTMLInputElement).focus()"
            @mousedown.prevent
            @keyup.enter="($event.target as HTMLInputElement).blur()"
          />
        </div>
      </div>
      <div
        v-if="open && !isMoving(item)"
        class="ml-10 border-l-2 border-slate-300"
      >
        <FileSystemDirectory :toc="toc" :parent="item.id" />
      </div>
    </Disclosure>
  </ArrangeableList>
</template>
