<script setup lang="ts" generic="PayloadType extends object">
import { usePointer, useEventListener } from "@vueuse/core";
import { ref, toRaw, onMounted, watch, computed, Ref } from "vue";
import { useMovingItem } from "./useMovingItem.js";
import PointerElement from "./PointerElement.vue";
import { type MovingItem } from "./types.js";

type ArrangeableOptions = {
  hoverClass?: string;
  pickedItemClass?: string;
  unpickedItemClass?: string;
  transitionName?: string;
  handle?: boolean;
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

// eslint-disable-next-line no-undef
const { movingItem, isMoving } = useMovingItem<PayloadType>();
const keyItemsList: Ref<KeyItem[] | undefined> = ref<KeyItem[]>();
const arrangedItems = computed(
  () => keyItemsList.value?.map(({ payload }) => payload) || []
);

// eslint-disable-next-line no-undef
function populateList(listData: PayloadType[]) {
  const newList: KeyItem[] = [];
  // Make sure to preserve the keys associated with the objects:
  listData.forEach((item) => {
    const keyItem = keyItemsList.value?.find(({ payload }) => item === payload);
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

const emit = defineEmits<{
  // eslint-disable-next-line no-undef
  (e: "liftItem", item: MovingItem<PayloadType>): void;
  // eslint-disable-next-line no-undef
  (e: "dropItem", item: MovingItem<PayloadType>): void;
}>();

/**
 *
 * @param index: index of the item hovered over.
 */
// eslint-disable-next-line no-undef
const hoverOverItem = (index: number) => {
  enterList();
  if (
    movingItem?.value?.destination !== props.name ||
    isMoving(arrangedItems.value[index])
  ) {
    return;
  }
  movingItem.value.toIndex = index;
  // if the dragging item does not appear in the list, add it
  if (!arrangedItems.value?.includes(movingItem.value.payload)) {
    keyItemsList.value?.splice(index, 0, {
      payload: movingItem.value.payload,
      key: movingItem.value.key,
    });
  }
  // else move it
  // N.b. we need to check for non-undefined keyItemsList because vue (bug?) behaviour;
  // can't instantiate an empty keyItemsList as default for ref, it auto-casts to unwrapRef.
  else if (keyItemsList.value) {
    const moverIndex = keyItemsList.value.findIndex(
      ({ payload }) => payload === movingItem.value?.payload
    );
    keyItemsList.value =
      moverIndex < index
        ? [
            ...keyItemsList.value.slice(0, moverIndex),
            ...keyItemsList.value.slice(moverIndex + 1, index + 1),
            keyItemsList.value[moverIndex],
            ...keyItemsList.value.slice(index + 1),
          ]
        : [
            ...keyItemsList.value.slice(0, index),
            keyItemsList.value[moverIndex],
            ...keyItemsList.value.slice(index, moverIndex),
            ...keyItemsList.value.slice(moverIndex + 1),
          ];
  }
};

// https://play.vuejs.org/#eNrdVk1v4zYQ/SsDLYooiSXZySYH1THSS4sFWrRAe2ix2gMtUTZriRREyonXyH/vIynb8kdz2tMmAUQO33AeZx6H2QY/NU287niQBlOdt6IxpLnpmlkmRd2o1tCWWl7SG5WtqukK0Kv90p/4VvxXoU2/GicHk931AP25k6vNEXJv6YFEmcyVBGLBzScpjGDVJ8NrTU8UXtPTjD5PRnQ3ovsRfRzRw5cdXPQg0AxPXMPr60xWHJgCAAeM16zqeFxxuTBLuqVJJjNZdjI3QkkSUvPWINzWEur3h+tvzCzjVnWyCP2QyULVwN1c2BUx6cism0rkPBQjGo9A5fYWiLejuC1H1ndhB64IfXakU1+97Mqy4pe9BzO7SBTXrAmt1WY03LqV1MFGpFGptD9rf8A3m0HnZxfDkI1o7orBnIEimruBQ2XG7W7nHAmfuQ154cNf/3h+6FqtkRbEPkv4MH1CFvz199ID3RFLCgXNKJr0fv+X7omDIyr+ponXN5SNCeBNxQzHjGg674wBoeccjqunLPAyyIKZHxAz5BMCgYDLNPEOl51dLeHrvu9D+9IB3I+O4YdLk7rzWWb2mwW0jnSlDAxbd3ScMXA+mZkWYu2G9me7W0YCvOUC3UMVsMnfewr2QjqPZLfj9HBpMZ8mgyRmMhgF/q5H0ED8r1YSPcVVB6zdAninu3plAW69nWfB0phGp0nSyWa1iHNVJ89YS9pOGlHzCFl/vo/v4o8P4KHN0B5zXUfzVr2gSIiYBaPB5gmMa95GLUfJWt6+G+wEexTwZO0s6E5iSMBRT7vQUgteCsn/aFWjw8/W78rVE93vC5T6nkL/gv40uoCSv6ANNSRZzVG8khVWPX2hUCcIo1RtLxSo1V8MCCavmN4JCNN0xTf72V4uR9rB1GrMa+/gmeyFMZTGsUxO2J6LZarNprJDlEAahqS0XhmN8n4pugPQYs3RNmBmRSHkIqXxrovE7oDO50UUZpnSZDz+wYGXXCyWaGT34+bVGeYsXy1c945yVak2pQ/lvf31q6pFYeHfvKJhVXgqPjw+PvZLr5EWX11kD4tg2lFIbmgSU8GR2paT2Z+ZbhLws6WJ7NWCKP2ES4MNGJrfwFhxtua90R/nsFFKrKpoHD9oyru5yKM5/yp4G8Ly4N6ScYwncbLvrCB0dyDkwvnnFr2LXCAyirRBFQYcPS2LOyEFrCOkGpYLs/HJ7/lBZHVKOmcV/wd8xujEzm4rHNrEg9yQ130MProDLbs3Eto/2y5zbMUlqc6QKqliGzsqK/WCapBZovcii/DYiY7hfwooA08F5UzSnONT5Z2NXOAFaVuem2oTD054nuODzNgcNe+MlZl/JJwwcZeP/5P5lpcZFvNtbiy6/YUrOkNsWM/u5fd4C/cFe/sPiY2qXQ==

const leaveList = () => {
  if (movingItem.value !== undefined) {
    // N.b. if the v-for list inside the transitiongroup has a ref with a ref() constant in the setup function,
    // leaving the list will go clunky. https://github.com/vuejs/core/issues/8173
    const itemIndex = arrangedItems.value.indexOf(movingItem.value.payload);
    if (itemIndex >= 0) {
      keyItemsList.value?.splice(itemIndex, 1);
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
    movingItem.value.destinationList = arrangedItems.value;
  }
};

let offsetX: number = 0;
let offsetY: number = 0;
const liftItem = ($event: PointerEvent, { key, payload }: KeyItem) => {
  if(props.options.handle && ($event.target as HTMLElement).attributes.getNamedItem('name')?.value !== 'handle') return;
  const targetBox = (<HTMLElement>$event.currentTarget)?.getBoundingClientRect();
  offsetX = pointer.x.value - targetBox.x;
  offsetY = pointer.y.value - targetBox.y;
  movingItem.value = {
    payload: payload,
    origin: props.name,
    originList: arrangedItems.value,
    destination: props.name,
    destinationList: arrangedItems.value,
    fromIndex: arrangedItems.value.indexOf(payload),
    toIndex: arrangedItems.value.indexOf(payload),
    targets: [props.targets ?? props.group ?? props.name].flat(),
    key,
  };
  emit("liftItem", toRaw(movingItem.value));
};

/**
 * dropItem happens when an element from this ArrangedList is dropped.
 * N.b. this is NOT triggered when an element from another list is dropped onto this one.
 */
const dropItem = () => {
  if (movingItem.value === undefined || movingItem.value.origin !== props.name)
    return;
  emit("dropItem", toRaw(movingItem.value));
  // repopulation is needed in case the drop event did not trigger a props change
  // otherwise the dropped item disappears.
  populateList(props.list);
  movingItem.value = undefined;
};

const pointer = usePointer();
useEventListener(document, "pointerup", dropItem);

const beforeKey = Symbol();
const afterKey = Symbol();

defineExpose({
  arrangedItems,
});

onMounted(() => {
  populateList(props.list);
  document.body.style.touchAction = "none";
});
</script>

<template>
  <PointerElement @pointer-leave="leaveList" @pointer-enter="enterList">
    <TransitionGroup :name="options.transitionName">
      <div :key="beforeKey">
        <slot name="before" :arrangedItems="arrangedItems" />
      </div>
      <PointerElement
        v-for="(item, index) in keyItemsList || []"
        :key="item.key"
        :class="
          isMoving(item.payload)
            ? options.pickedItemClass
            : options.unpickedItemClass
        "
        @pointerdown.left.prevent="liftItem($event, item)"
        @pointer-enter="hoverOverItem(index)"
      >
        <slot
          :item="item.payload as PayloadType"
          :arrangedItems="arrangedItems"
        />
      </PointerElement>
      <div :key="afterKey">
        <slot name="after" :arrangedItems="arrangedItems" />
      </div>
    </TransitionGroup>
    <Teleport to="body" v-if="movingItem && movingItem.origin === name">
      <div
        :class="options.hoverClass"
        style="z-index: 100000000; position: fixed"
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
