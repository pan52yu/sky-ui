// docs/.vitepress/components/Playground.ts
export const APP_WRAPPER_CODE = `
<script setup lang="ts">
import { getCurrentInstance } from 'vue';
import { Theme } from '@skyuix/ui';
import App from './App.vue';

const instance = getCurrentInstance();

instance?.appContext.app.use(Theme);
</script>

<template>
  <App />
</template>
`;
