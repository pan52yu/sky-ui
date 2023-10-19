<script setup lang="ts">
// demo/src/App.vue
import { ref, reactive } from 'vue';
import {
  Button,
  Input,
  ConfigProvider,
  useTheme,
  tinyThemeVars,
  themeVars,
  SkyuiCssVarsConfig,
} from '@skyui/ui';

const { setTheme } = useTheme();

const currentGlobalTheme = ref<'default' | 'tiny'>('default');

// 全局主题切换
function switchGlobalTheme() {
  if (currentGlobalTheme.value === 'tiny') {
    currentGlobalTheme.value = 'default';
    setTheme(themeVars);
  } else {
    currentGlobalTheme.value = 'tiny';
    setTheme(tinyThemeVars);
  }
}

const currentSecondLineTheme = ref<'default' | 'tiny'>('default');
const secondLineThemeVars: SkyuiCssVarsConfig = reactive({});
// 局部主题切换
function switchSecondLineTheme() {
  if (currentSecondLineTheme.value === 'tiny') {
    currentSecondLineTheme.value = 'default';
    Object.assign(secondLineThemeVars, themeVars);
  } else {
    currentSecondLineTheme.value = 'tiny';
    Object.assign(secondLineThemeVars, tinyThemeVars);
  }
}
</script>

<template>
  <div>
    <span
      class="i-op-alert-marked inline-block"
    />
    123
    <!-- 第一组 button 省略 。。。 -->
    <ConfigProvider
      class="btns"
      :theme-vars="secondLineThemeVars"
    >
      <Button plain>
        Button
      </Button>
      <Button
        type="primary"
        plain
      >
        Button
      </Button>
      <Button
        type="success"
        plain
      >
        Button
      </Button>
      <Button
        type="danger"
        plain
      >
        Button
      </Button>
      <Button
        type="warning"
        plain
      >
        Button
      </Button>
      <Button
        type="info"
        plain
      >
        Button
      </Button>
    </ConfigProvider>
    <!-- 第三组 button 省略 。。。 -->
    <div class="btns">
      <Button @click="switchGlobalTheme">
        切换全局主题，当前：{{ currentGlobalTheme }}
      </Button>
      <Button @click="switchSecondLineTheme">
        切换第二行主题，当前：{{ currentSecondLineTheme }}
      </Button>
    </div>
    <Input />
  </div>
</template>

<!-- 省略样式定义 。。。 -->
