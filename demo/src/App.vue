<script setup lang="ts">
// demo/src/App.vue
import { ref, reactive } from 'vue';
import {
  SkyButton,
  SkyInput,
  ConfigProvider,
  useTheme,
  tinyThemeVars,
  themeVars,
  SkyuiCssVarsConfig,
} from '@skyui/ui';

// const { setTheme } = useTheme();

const currentGlobalTheme = ref<'default' | 'tiny'>('default');

// 全局主题切换
function switchGlobalTheme() {
  if (currentGlobalTheme.value === 'tiny') {
    currentGlobalTheme.value = 'default';
    useTheme().setTheme(themeVars);
  } else {
    currentGlobalTheme.value = 'tiny';
    useTheme().setTheme(tinyThemeVars);
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
    <!-- 第一组 SkyButton 省略 。。。 -->
    <ConfigProvider
      class="btns"
      :theme-vars="secondLineThemeVars"
    >
      <SkyButton plain>
        Button
      </SkyButton>
      <SkyButton
        type="primary"
        plain
      >
        SkyButton
      </SkyButton>
      <SkyButton
        type="success"
        plain
      >
        SkyButton
      </SkyButton>
      <SkyButton
        type="danger"
        plain
      >
        SkyButton
      </SkyButton>
      <SkyButton
        type="warning"
        plain
      >
        SkyButton
      </SkyButton>
      <SkyButton
        type="info"
        plain
      >
        SkyButton
      </SkyButton>
    </ConfigProvider>
    <!-- 第三组 SkyButton 省略 。。。 -->
    <div class="btns">
      <SkyButton @click="switchGlobalTheme">
        切换全局主题，当前：{{ currentGlobalTheme }}
      </SkyButton>
      <SkyButton @click="switchSecondLineTheme">
        切换第二行主题，当前：{{ currentSecondLineTheme }}
      </SkyButton>
    </div>
    <sky-input />
  </div>
</template>

<!-- 省略样式定义 。。。 -->
