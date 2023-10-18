<script setup lang="ts">
// packages/button/src/button.vue
import { hello } from "@skyui/shared"

const props = withDefaults(
  defineProps<{
    text?: string
  }>(),
  {
    text: "World",
  }
)

function clickHandler() {
  hello(props.text)
}
</script>

<template>
  <button class="openx-button" @click="clickHandler">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.openx-button {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 8px;
}
</style>
