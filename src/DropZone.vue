<script setup lang="ts" generic="PayloadType extends object">
import { useMovingItem } from "./useMovingItem.js";
import PointerElement from "./PointerElement.vue";
import { MovingItem } from "vue-arrange";
import { toRaw } from "vue";

type ArrangeableOptions = {
  hoverClass?: string;
};

type Props = {
  options?: ArrangeableOptions;
  //  FIXME: once eslint-vue-typescript plugin supports generics, remove all these no-undef lines.
  // eslint-disable-next-line no-undef
  name?: symbol | string;
  group?: string | symbol;
};

const props = withDefaults(defineProps<Props>(), {
  // eslint-disable-next-line vue/require-valid-default-prop
  name: Symbol(),
  options: () => ({
    hoverClass: "",
  }),
});

// eslint-disable-next-line no-undef
const { movingItem } = useMovingItem<PayloadType>();

const emit = defineEmits<{
  // eslint-disable-next-line no-undef
  (e: "enterZone", item: MovingItem<PayloadType>): void;
  // eslint-disable-next-line no-undef
  (e: "leaveZone", item: MovingItem<PayloadType>): void;
}>();


const leaveZone = () => {
  console.log('leve zone  ')
  if (movingItem.value?.destination === props.name) {
    movingItem.value.destination = undefined;
    emit("leaveZone", toRaw(movingItem.value))
  }
};

const enterZone = () => {
  console.log('enter-zone')
  if (
    movingItem.value &&
    movingItem.value.destination !== props.name &&
    (movingItem.value.targets.includes(props.name) ||
      (props.group && movingItem.value.targets.includes(props.group)))
  ) {
    movingItem.value.destination = props.name;
    emit("enterZone", toRaw(movingItem.value))
  }
};
</script>

<template>
  <PointerElement 
    @pointer-leave="leaveZone" 
    @pointer-enter="enterZone"
    style="float: left"
  >
      <slot 
      :isHovering="movingItem?.destination === name"
      :class="movingItem?.destination === name ? options.hoverClass : ''"
      />
  </PointerElement>
</template>

