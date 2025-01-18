<script setup lang="ts">
import ArrangeableList from "../../src/ArrangeableList.vue";
import FileSystemDirectory from "./FileSystemDirectory.vue";
import { MovingItem, useMovingItem } from "../../src";

import { type TreeNode } from "./FileSystem.vue";
import Disclosure from "./DisclosurePanel.vue";

const { isMoving } = useMovingItem<TreeNode>();

defineProps<{
  toc: TreeNode[];
  directory: symbol;
  parent?: symbol;
}>();

const moveItem = (item: MovingItem<TreeNode>) => {
  item.payload.parent = item.destination?.identifier as symbol;
};

const expandedIcon = "⏷";
const collapsedIcon = "⏵";
const directoryIcon = "📁";
const openDirectoryIcon = "📂";
const fileIcon = "📄";
</script>

<template>
  <ArrangeableList
    :list="toc.filter((node) => node.parent === directory)"
    :identifier="directory"
    group="directories"
    class="rounded m-1 p-1"
    :options="{
      handle: true,
      pickedItemClass: 'h-0 bg-blue-200 rounded text-transparent',
      hoverClass: 'opacity-80 bg-white cursor-grabbing rounded',
      hoveredOverListClass: 'bg-sky-100',
      liftDelay: 200,
    }"
    @drop-item="moveItem"
    v-slot="{ item }"
  >
    <Disclosure v-slot="{ open, toggle }">
      <div
        class="flex items-center whitespace-normal break-words p-1 text-xl select-none"
      >
        <div
          class="w-4 cursor-pointer text-slate-400"
          @click="() => toggle()"
          :class="isMoving(item) && 'invisible'"
        >
          {{
            item.type === "directory"
              ? open
                ? expandedIcon
                : collapsedIcon
              : ""
          }}
        </div>
        <div data-handle class="ml-1 cursor-grab flex flex-row w-full">
          {{
            item.type === "directory"
              ? open
                ? openDirectoryIcon
                : directoryIcon
              : fileIcon
          }}
          <input
            data-handle
            class="ml-2 w-full bg-transparent cursor-grab"
            :value="item.name"
            @change="
              ({ target }) => (item.name = (target as HTMLInputElement).value)
            "
            @dblclick="($event.target as HTMLInputElement).focus()"
            @mousedown.prevent
            @keyup.enter="($event.target as HTMLInputElement).blur()"
          />
          <div class="ml-auto text-slate-400">
            {{ item.created!.toLocaleDateString() }}
          </div>
        </div>
      </div>
      <div
        v-if="item.type === 'directory' && open && !isMoving(item)"
        class="ml-10 border-l-2 border-slate-300"
      >
        <FileSystemDirectory
          :toc="toc"
          :directory="item.id"
          :parent="directory"
          ref="nestedDirectory"
          class="min-h-5"
        />
      </div>
    </Disclosure>
  </ArrangeableList>
</template>
