<script setup lang="ts">
import { ArrangeableOptions, ArrangeableList } from "../../../src";
import { TargetIdentifier, MovingItem } from "../../../src/types";
import { type ListType, ItemType } from "../KanBan.vue";
import { useMovingItem } from "../../../src";

defineProps<{
  list: ListType;
  items: ItemType[];
  group: TargetIdentifier;
  trashBin: TargetIdentifier;
  arrangeableOptions: ArrangeableOptions;
}>();

const emit = defineEmits<{
  (e: "add-item", description: string, listIdentifier: symbol): void;
  (e: "drop-item", item: MovingItem<ItemType>): void;
}>();

const { movingItem } = useMovingItem<ItemType>();

const addItem = ($event: InputEvent, listIdentifier: symbol) => {
  if (!$event.target || !listIdentifier) return;
  emit("add-item", ($event.target as HTMLInputElement).value, listIdentifier);
  ($event.target as HTMLInputElement).value = "";
};
</script>

<template>
  <ArrangeableList
    :list="items"
    :identifier="list.id"
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
        <div name="cardHandle" class="mr-2 cursor-grab select-none">
          &#65049;
        </div>
        {{ item.description }}
      </div>
    </template>
    <template #after>
      <div
        class="m-1 flex items-center rounded border-2 border-black p-2 text-xl"
        :style="{ backgroundColor: list.color[200] }"
      >
        <input
          @change="addItem($event as InputEvent, list.id)"
          class="w-full border-b-2 border-gray-400 bg-transparent italic outline-none focus-visible:border-black"
          placeholder="New item"
        />
      </div>
    </template>
  </ArrangeableList>
</template>
