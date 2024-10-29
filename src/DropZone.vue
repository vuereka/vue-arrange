<script setup lang="ts" generic="PayloadType extends object">
import { useMovingItem } from "./useMovingItem.js";
import PointerElement from "./PointerElement.vue";
import { type MovingItem } from "./types";
import { ref, toRaw } from "vue";

type ArrangeableOptions = {
  hoverClass?: string;
};

type Props = {
  options?: ArrangeableOptions;
  name?: symbol | string;
  group?: string | symbol;
};

const props = withDefaults(defineProps<Props>(), {
  name: Symbol(),
  options: () => ({
    hoverClass: "",
  }),
});

const { movingItem } = useMovingItem<PayloadType>();
const dropZone = ref<HTMLElement>();

const emit = defineEmits<{
  (e: "enterZone", item: MovingItem<PayloadType>): void;
  (e: "leaveZone", item: MovingItem<PayloadType>): void;
}>();

const leaveZone = () => {
  if (movingItem.value?.destination?.id === props.name) {
    movingItem.value.destination = undefined;
    emit("leaveZone", toRaw(movingItem.value));
  }
};

const enterZone = () => {
  if (
    movingItem.value &&
    movingItem.value.destination?.id !== props.name &&
    (movingItem.value.dropTargets.includes(props.name) ||
      (props.group && movingItem.value.dropTargets.includes(props.group)))
  ) {
    movingItem.value.destination = {
      id: props.name,
      type: "dropzone",
    };
    emit("enterZone", toRaw(movingItem.value));
  }
};
</script>

<template>
  <PointerElement
    @pointer-leave="leaveZone"
    @pointer-enter="enterZone"
    :id="
      movingItem?.destination?.id === props.name
        ? 'arrangeable-list-target-element'
        : undefined
    "
    v-bind="$attrs"
    ref="dropZone"
  >
    <slot
      :isHovering="movingItem?.destination?.id === props.name"
      :class="
        movingItem?.destination?.id === props.name ? options.hoverClass : ''
      "
    />
  </PointerElement>
</template>
