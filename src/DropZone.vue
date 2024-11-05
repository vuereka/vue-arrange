<script setup lang="ts" generic="PayloadType extends object">
import { useMovingItem } from "./useMovingItem.js";
import PointerElement from "./PointerElement.vue";
import { TargetIdentifier, type MovingItem } from "./types";
import { ref, toRaw } from "vue";

type ArrangeableOptions = {
  hoverClass?: string;
};

type Props = {
  options?: ArrangeableOptions;
  identifier: TargetIdentifier;
  group?: TargetIdentifier;
};

const props = withDefaults(defineProps<Props>(), {
  identifier: Symbol(),
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
  if (movingItem.value?.destination?.identifier === props.identifier) {
    movingItem.value.destination = undefined;
    emit("leaveZone", toRaw(movingItem.value));
  }
};

const enterZone = () => {
  if (
    movingItem.value &&
    movingItem.value.destination?.identifier !== props.identifier &&
    (movingItem.value.dropTargets.includes(props.identifier) ||
      (props.group && movingItem.value.dropTargets.includes(props.group)))
  ) {
    movingItem.value.destination = {
      identifier: props.identifier,
      group: props.group,
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
      movingItem?.destination?.identifier === props.identifier
        ? 'arrangeable-list-target-element'
        : undefined
    "
    v-bind="$attrs"
    ref="dropZone"
  >
    <slot
      :isHovering="movingItem?.destination?.identifier === props.identifier"
      :class="
        movingItem?.destination?.identifier === props.identifier
          ? options.hoverClass
          : ''
      "
    />
  </PointerElement>
</template>
