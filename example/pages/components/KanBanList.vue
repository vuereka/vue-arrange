<script setup lang="ts">
import { ArrangeableOptions, ArrangeableList } from "../../../src";
import { TargetIdentifier, MovingItem } from "../../../src/types";
import { type ListType, ItemType } from "../KanBan.vue";
import { useMovingItem } from "../../../src";

defineProps<{
  list: ListType;
  group: TargetIdentifier;
  trashBin: TargetIdentifier;
  arrangeableOptions: ArrangeableOptions;
}>();

const emit = defineEmits<{
  (e: "add-item", description: string, listIdentifier: symbol): void;
  (e: "drop-item", item: MovingItem<ItemType>): void;
}>();

const { movingItem, movingItemCanTarget } = useMovingItem<ItemType>();

const addItem = ($event: InputEvent, listIdentifier: symbol) => {
  if (!$event.target || !listIdentifier) return;
  emit("add-item", ($event.target as HTMLInputElement).value, listIdentifier);
  ($event.target as HTMLInputElement).value = "";
};
</script>

<template>
  <ArrangeableList
    :list="list.items as ItemType[]"
    :identifier="list.identifier"
    :group="group"
    :options="{
      ...arrangeableOptions,
      handle: 'cardHandle',
    }"
    @drop-item="emit('drop-item', movingItem as MovingItem<ItemType>)"
  >
    <template #default="{ item }">
      <div
        class="m-1 flex items-center whitespace-normal break-words rounded border-2 border-black p-2 text-xl"
        :style="{ backgroundColor: list.color[300] }"
      >
        <div name="cardHandle" class="mr-2 cursor-grab">&#65049;</div>
        {{ item.description }}
      </div>
    </template>
    <template #before="{ arrangedItems }">
      <div
        ref="list.dropZone"
        v-if="
          arrangedItems.length === 0 &&
          movingItemCanTarget([list.identifier, group])
        "
        class="qwerty m-1 h-12 rounded border-2 border-dashed border-black"
        :style="{ backgroundColor: list.color[200] }"
      />
    </template>
    <template #after>
      <div
        class="m-1 flex items-center rounded border-2 border-black p-2 text-xl"
        :style="{ backgroundColor: list.color[200] }"
      >
        <input
          @change="addItem($event as InputEvent, list.identifier)"
          class="w-full border-b-2 border-gray-400 bg-transparent outline-none focus-visible:border-black"
          placeholder="New item"
        />
      </div>
    </template>
  </ArrangeableList>
</template>
