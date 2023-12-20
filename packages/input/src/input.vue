<!-- packages/input/src/input.vue -->
<script setup lang="ts">
import { ref } from 'vue';
import { hello } from '@skyui/shared';
import {
  defaultInputProps, InputProps, InputEmits, InputExpose,
} from './props';

defineOptions({
  name: 'SkyInput',
});

withDefaults(defineProps<InputProps>(), defaultInputProps());

const emit = defineEmits<InputEmits>();

function inputHandler(e: any) {
  const { value } = e.target;
  emit('update:modelValue', value);
  hello(`${value}`);
}

function clear() {
  emit('update:modelValue', '');
}

const a = ref(0);

defineExpose<InputExpose>({
  clear,
  a,
});
</script>

<template>
  <input type="text" :value="modelValue" @input="inputHandler">
</template>
