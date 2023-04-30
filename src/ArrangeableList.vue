<script setup lang="ts" generic="PayloadType extends object">
import { usePointer, useEventListener } from "@vueuse/core";
import { ref, toRaw, onMounted, watch, computed, shallowRef } from "vue";
import { useMovingItem } from "./useMovingItem.js";
import PointerElement from "./PointerElement.vue";
import { type MovingItem } from "./types.js";

type ArrangeableOptions = {
  hoverClass?: string;
  pickedItemClass?: string;
  unpickedItemClass?: string;
  transitionName?: string;
};

type Props = {
  options?: ArrangeableOptions;
  //  FIXME: once eslint-vue-typescript plugin supports generics, remove all these no-undef lines.
  // eslint-disable-next-line no-undef
  list: PayloadType[];
  name?: symbol | string;
  group?: string | symbol;
  targets?: string | symbol | Array<string | symbol>;
};

const props = withDefaults(defineProps<Props>(), {
  // eslint-disable-next-line vue/require-valid-default-prop
  name: Symbol(),
  options: () => ({
    hoverClass: "",
    pickedItemClass: "",
    unpickedItemClass: "",
    transitionName: "",
  }),
});

type KeyItem = {
  // eslint-disable-next-line no-undef
  payload: PayloadType;
  key: symbol;
};

const emit = defineEmits<{
  // eslint-disable-next-line no-undef
  (e: "dropItem", item: MovingItem<PayloadType>): void;
}>();

// eslint-disable-next-line no-undef
const { movingItem, isMoving } = useMovingItem<PayloadType>();
const keyItemsList = ref<KeyItem[]>([]);
const arrangedItems = computed(() =>
  keyItemsList.value.map(({ payload }) => payload)
);

defineExpose({
  arrangedItems,
});

// eslint-disable-next-line no-undef
function populateList(listData: PayloadType[]) {
  const newList: KeyItem[] = [];
  // Make sure to preserve the keys associated with the objects:
  listData.forEach((item) => {
    const keyItem = keyItemsList.value.find(({ payload }) => item === payload);
    if (keyItem) newList.push(keyItem);
    else
      newList.push({
        key: Symbol(),
        payload: item,
      });
  });
  keyItemsList.value = newList;
}

watch(() => props.list, populateList);

// eslint-disable-next-line no-undef
const hoverOverItem = (payload: PayloadType, toIndex: number) => {
  enterList();
  if (movingItem?.value?.destination !== props.name || isMoving(payload)) {
    return;
  }
  console.log(
    "over",
    payload,
    toIndex,
    arrangedItems.value,
    movingItem.value.payload
  );
  movingItem.value.toIndex = toIndex;
  // if the dragging item does not appear in the list, add it
  if (!arrangedItems.value.includes(movingItem.value.payload)) {
    keyItemsList.value.splice(toIndex, 0, {
      payload: movingItem.value.payload,
      key: movingItem.value.key,
    });
    console.log(keyItemsList)
  }
  // else move it
  else {
    const moverIndex = keyItemsList.value.findIndex(
      ({ payload }) => payload === movingItem.value?.payload
    );
    keyItemsList.value =
      moverIndex < toIndex
        ? [
            ...keyItemsList.value.slice(0, moverIndex),
            ...keyItemsList.value.slice(moverIndex + 1, toIndex + 1),
            keyItemsList.value[moverIndex],
            ...keyItemsList.value.slice(toIndex + 1),
          ]
        : [
            ...keyItemsList.value.slice(0, toIndex),
            keyItemsList.value[moverIndex],
            ...keyItemsList.value.slice(toIndex, moverIndex),
            ...keyItemsList.value.slice(moverIndex + 1),
          ];
  }
};

let offsetX: number = 0;
let offsetY: number = 0;
const liftItem = ($event: PointerEvent, { key, payload }: KeyItem) => {
  offsetX = $event.offsetX;
  offsetY = $event.offsetY;
  movingItem.value = {
    payload: payload,
    origin: props.name,
    destination: props.name,
    fromIndex: arrangedItems.value.indexOf(payload),
    toIndex: arrangedItems.value.indexOf(payload),
    targets: [props.targets ?? props.group ?? props.name].flat(),
    key,
  };
};

// https://play.vuejs.org/#eNrdVk1v4zYQ/SsDLYooiSXZySYH1THSS4sFWrRAe2ix2gMtUTZriRREyonXyH/vIynb8kdz2tMmAUQO33AeZx6H2QY/NU287niQBlOdt6IxpLnpmlkmRd2o1tCWWl7SG5WtqukK0Kv90p/4VvxXoU2/GicHk931AP25k6vNEXJv6YFEmcyVBGLBzScpjGDVJ8NrTU8UXtPTjD5PRnQ3ovsRfRzRw5cdXPQg0AxPXMPr60xWHJgCAAeM16zqeFxxuTBLuqVJJjNZdjI3QkkSUvPWINzWEur3h+tvzCzjVnWyCP2QyULVwN1c2BUx6cism0rkPBQjGo9A5fYWiLejuC1H1ndhB64IfXakU1+97Mqy4pe9BzO7SBTXrAmt1WY03LqV1MFGpFGptD9rf8A3m0HnZxfDkI1o7orBnIEimruBQ2XG7W7nHAmfuQ154cNf/3h+6FqtkRbEPkv4MH1CFvz199ID3RFLCgXNKJr0fv+X7omDIyr+ponXN5SNCeBNxQzHjGg674wBoeccjqunLPAyyIKZHxAz5BMCgYDLNPEOl51dLeHrvu9D+9IB3I+O4YdLk7rzWWb2mwW0jnSlDAxbd3ScMXA+mZkWYu2G9me7W0YCvOUC3UMVsMnfewr2QjqPZLfj9HBpMZ8mgyRmMhgF/q5H0ED8r1YSPcVVB6zdAninu3plAW69nWfB0phGp0nSyWa1iHNVJ89YS9pOGlHzCFl/vo/v4o8P4KHN0B5zXUfzVr2gSIiYBaPB5gmMa95GLUfJWt6+G+wEexTwZO0s6E5iSMBRT7vQUgteCsn/aFWjw8/W78rVE93vC5T6nkL/gv40uoCSv6ANNSRZzVG8khVWPX2hUCcIo1RtLxSo1V8MCCavmN4JCNN0xTf72V4uR9rB1GrMa+/gmeyFMZTGsUxO2J6LZarNprJDlEAahqS0XhmN8n4pugPQYs3RNmBmRSHkIqXxrovE7oDO50UUZpnSZDz+wYGXXCyWaGT34+bVGeYsXy1c945yVak2pQ/lvf31q6pFYeHfvKJhVXgqPjw+PvZLr5EWX11kD4tg2lFIbmgSU8GR2paT2Z+ZbhLws6WJ7NWCKP2ES4MNGJrfwFhxtua90R/nsFFKrKpoHD9oyru5yKM5/yp4G8Ly4N6ScYwncbLvrCB0dyDkwvnnFr2LXCAyirRBFQYcPS2LOyEFrCOkGpYLs/HJ7/lBZHVKOmcV/wd8xujEzm4rHNrEg9yQ130MProDLbs3Eto/2y5zbMUlqc6QKqliGzsqK/WCapBZovcii/DYiY7hfwooA08F5UzSnONT5Z2NXOAFaVuem2oTD054nuODzNgcNe+MlZl/JJwwcZeP/5P5lpcZFvNtbiy6/YUrOkNsWM/u5fd4C/cFe/sPiY2qXQ==

const leaveList = () => {
  if (movingItem.value !== undefined) {
    // N.b. if the v-for list inside the transitiongroup has a ref with a ref() constant in the setup function,
    // leaving the list will go clunky. https://github.com/vuejs/core/issues/8173
    const itemIndex = arrangedItems.value.indexOf(movingItem.value.payload);
    if (itemIndex >= 0) {
      keyItemsList.value.splice(itemIndex, 1);
    }
    movingItem.value.destination = undefined;
    movingItem.value.toIndex = undefined;
  }
};

const enterList = () => {
  if (
    movingItem.value &&
    (movingItem.value.targets.includes(props.name) ||
      (props.group && movingItem.value.targets.includes(props.group)))
  ) {
    movingItem.value.destination = props.name;
  }
};

/**
 * dropItem happens when an element from this ArrangedList is dropped.
 */
const dropItem = () => {
  if (movingItem.value === undefined || movingItem.value.origin !== props.name)
    return;
  emit("dropItem", toRaw(movingItem.value));
  populateList(props.list);
  movingItem.value = undefined;
};

const pointer = usePointer();
useEventListener(document, "pointerup", dropItem);

const beforeKey = Symbol();
const afterKey = Symbol();
const hoverElement = ref<HTMLElement>();
const ArrangeableList = ref<HTMLElement>();
onMounted(() => {
  populateList(props.list);
  document.body.style.touchAction = "none";
});
</script>

<template>
  <PointerElement
    ref="ArrangeableList"
    @pointer-leave="leaveList"
    @pointer-enter="enterList"
  >
    <TransitionGroup :name="options.transitionName">
      <div :key="beforeKey">
        <slot name="before" />
      </div>
      <PointerElement
        v-for="(item, index) in keyItemsList"
        :key="item.key"
        :class="
          isMoving(item.payload)
            ? options.pickedItemClass
            : options.unpickedItemClass
        "
        @pointerdown.prevent="liftItem($event, item)"
        @pointer-enter="hoverOverItem(item.payload, index)"
      >
        <slot :item="item.payload as any" />
      </PointerElement>
      <div :key="afterKey">
        <slot name="after" />
      </div>
    </TransitionGroup>
    <Teleport to="body" v-if="movingItem && movingItem.origin === name">
      <div
        ref="hoverElement"
        :class="options.hoverClass"
        style="z-index: 1000000; position: absolute"
        :style="{
          left: pointer.x.value - offsetX + 'px',
          top: pointer.y.value - offsetY + 'px',
        }"
      >
        <slot :item="movingItem.payload as any" :dragging="true" />
      </div>
    </Teleport>
  </PointerElement>
</template>

<style scoped>
.v-move,
.v-enter-active,
.v-leave-active {
  transition: all 0.2s cubic-bezier(0.55, 0, 0.1, 1);
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.v-leave-active {
  position: absolute;
}
</style>
