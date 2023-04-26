<script setup lang="ts">
import { useMouse, useEventListener } from "@vueuse/core";
import { ref, toRaw, onMounted, watch } from "vue";
import { useDragging, type Arrangeable } from "./useDragging";
import HoverItem from './HoverItem.vue'

// TODO: any way we can use a generic in stead of unknown here? Would be great to assure it at least contains the key in the options.
interface ArrangeableOptions {
  key: string;
  hoverClass?: string;
  pickedItemClass?: string;
  unpickedItemClass?: string;
}
type PayloadType = object;
type ListType = Array<PayloadType>;

const props = withDefaults(defineProps<{
  options: ArrangeableOptions;
  list: ListType;
}>(), {
  options: () => ({
      key: 'id',
      draggingClass: '',
      chosenItemClass: '',
  }),
})

const mouse = useMouse();
const { dragging, isDragging } = useDragging<PayloadType>();
const arrangedItems = ref<PayloadType[]>([]);

function populateList(newList: PayloadType[]) {
  dragging.value = undefined;
  arrangedItems.value = newList;
}

watch(() => props.list, populateList);

const emit = defineEmits<{
  (e: "dropItem", item: Arrangeable<PayloadType>): void;
}>();

const ArrangeableList = ref<HTMLElement>();
const ArrangeableItemsList = ref<HTMLElement[]>([]);

const hoverOverItem = (hoverIndex: number) => {
  if (dragging.value === undefined) return;
  const list = arrangedItems.value;
  if (hoverIndex < 0) return;
  dragging.value.toIndex = hoverIndex;
  // if the dragging item does not appear in the list, add it
  if(!list.includes(dragging.value?.payload) ) {
    dragging.value.toIndex = hoverIndex;
    arrangedItems.value.splice(hoverIndex, 0, dragging.value.payload);
  }
  // else move it
  else {
    const moverIndex = list.indexOf(dragging.value?.payload);
    arrangedItems.value =
      moverIndex < hoverIndex
        ? [
            ...list.slice(0, moverIndex),
            ...list.slice(moverIndex + 1, hoverIndex + 1),
            list[moverIndex],
            ...list.slice(hoverIndex + 1),
          ]
        : [
            ...list.slice(0, hoverIndex),
            list[moverIndex],
            ...list.slice(hoverIndex, moverIndex),
            ...list.slice(moverIndex + 1),
          ];
  }
};

let offsetX: number = 0;
let offsetY: number = 0;
const pickUpItem = (
  $event: MouseEvent,
  payload: PayloadType,
) => {
  offsetX = $event.offsetX;
  offsetY = $event.offsetY;
  dragging.value = {
    payload: payload,
    origin: ArrangeableList.value as HTMLElement,
    fromIndex: arrangedItems.value.indexOf(payload),
  }
};

const dropItem = () => {
  if (dragging.value !== undefined) {
    emit("dropItem", toRaw(dragging.value));
  }
};

// https://play.vuejs.org/#eNrdVk1v4zYQ/SsDLYooiSXZySYH1THSS4sFWrRAe2ix2gMtUTZriRREyonXyH/vIynb8kdz2tMmAUQO33AeZx6H2QY/NU287niQBlOdt6IxpLnpmlkmRd2o1tCWWl7SG5WtqukK0Kv90p/4VvxXoU2/GicHk931AP25k6vNEXJv6YFEmcyVBGLBzScpjGDVJ8NrTU8UXtPTjD5PRnQ3ovsRfRzRw5cdXPQg0AxPXMPr60xWHJgCAAeM16zqeFxxuTBLuqVJJjNZdjI3QkkSUvPWINzWEur3h+tvzCzjVnWyCP2QyULVwN1c2BUx6cism0rkPBQjGo9A5fYWiLejuC1H1ndhB64IfXakU1+97Mqy4pe9BzO7SBTXrAmt1WY03LqV1MFGpFGptD9rf8A3m0HnZxfDkI1o7orBnIEimruBQ2XG7W7nHAmfuQ154cNf/3h+6FqtkRbEPkv4MH1CFvz199ID3RFLCgXNKJr0fv+X7omDIyr+ponXN5SNCeBNxQzHjGg674wBoeccjqunLPAyyIKZHxAz5BMCgYDLNPEOl51dLeHrvu9D+9IB3I+O4YdLk7rzWWb2mwW0jnSlDAxbd3ScMXA+mZkWYu2G9me7W0YCvOUC3UMVsMnfewr2QjqPZLfj9HBpMZ8mgyRmMhgF/q5H0ED8r1YSPcVVB6zdAninu3plAW69nWfB0phGp0nSyWa1iHNVJ89YS9pOGlHzCFl/vo/v4o8P4KHN0B5zXUfzVr2gSIiYBaPB5gmMa95GLUfJWt6+G+wEexTwZO0s6E5iSMBRT7vQUgteCsn/aFWjw8/W78rVE93vC5T6nkL/gv40uoCSv6ANNSRZzVG8khVWPX2hUCcIo1RtLxSo1V8MCCavmN4JCNN0xTf72V4uR9rB1GrMa+/gmeyFMZTGsUxO2J6LZarNprJDlEAahqS0XhmN8n4pugPQYs3RNmBmRSHkIqXxrovE7oDO50UUZpnSZDz+wYGXXCyWaGT34+bVGeYsXy1c945yVak2pQ/lvf31q6pFYeHfvKJhVXgqPjw+PvZLr5EWX11kD4tg2lFIbmgSU8GR2paT2Z+ZbhLws6WJ7NWCKP2ES4MNGJrfwFhxtua90R/nsFFKrKpoHD9oyru5yKM5/yp4G8Ly4N6ScYwncbLvrCB0dyDkwvnnFr2LXCAyirRBFQYcPS2LOyEFrCOkGpYLs/HJ7/lBZHVKOmcV/wd8xujEzm4rHNrEg9yQ130MProDLbs3Eto/2y5zbMUlqc6QKqliGzsqK/WCapBZovcii/DYiY7hfwooA08F5UzSnONT5Z2NXOAFaVuem2oTD054nuODzNgcNe+MlZl/JJwwcZeP/5P5lpcZFvNtbiy6/YUrOkNsWM/u5fd4C/cFe/sPiY2qXQ==

const leaveList = () => {
  if (dragging.value !== undefined) {
    arrangedItems.value = arrangedItems.value.filter((payload) => payload !== dragging.value?.payload);
    dragging.value.destination = undefined;
    dragging.value.toIndex = undefined;
  }
};

const enterList = () => {
  if (dragging.value) {
    dragging.value.destination = ArrangeableList.value;
  }
};

onMounted(() => {
  populateList(props.list);
});

useEventListener(document, "mouseup", () => {
  if(dragging.value?.origin === ArrangeableList.value) {
    dropItem();
  }
});
const beforeKey = Symbol()
const afterKey = Symbol()
</script>

<template>
  <HoverItem
    ref="ArrangeableList"
    class="select-none border-4"
    @mouse-leave="leaveList"
    @mouse-enter="enterList"
  >
  <div class="h-20 w-40 border-4 border-red-600"/>
    <TransitionGroup name="list" ref="ArrangeableItemsList">
      <div :key="beforeKey">
        <slot name="before"/>
      </div>
      <HoverItem
        v-for="item, index in arrangedItems"
        :key="(<any>item)[options.key]"
        :class="isDragging(item) ? options.pickedItemClass : 'options.unpickedItemClass'"
        @mousedown.left="pickUpItem($event, item)"
        @mouse-enter="if (!isDragging(item)) hoverOverItem(index);"
      >
        <slot :item="item as any" />
      </HoverItem>
      <div :key="afterKey">
        <slot name="after"/>
      </div>
    </TransitionGroup>
    <Teleport
      to="body"
      v-if="dragging && dragging.origin === ArrangeableList"
    >
        <div
          :class="options.hoverClass"
          style="z-index: 1000000; position: absolute"
          :style="{
            left: (mouse.x.value - offsetX ) + 'px',
            top: (mouse.y.value - offsetY ) + 'px',
          }"
        >
          <slot :item="dragging.payload as any" :dragging="true" />
        </div>
    </Teleport>
  </HoverItem>
</template>

<style scoped>

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
