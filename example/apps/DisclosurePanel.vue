<template>
  <div>
    <slot :open="open" :toggle="toggle"></slot>
  </div>
</template>

<script setup>
import { ref } from "vue";

const open = ref(false);

function toggle() {
  open.value = !open.value;
}
</script>
