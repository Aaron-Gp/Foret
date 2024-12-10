<template>
  <!-- <ClientOnly> -->
    <NaiveConfig :theme-config="themeConfig">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </NaiveConfig>
  <!-- </ClientOnly> -->
</template>


<script setup lang="ts">
import { ThemeConfig } from "@bg-dev/nuxt-naiveui";


const themeConfig: ThemeConfig = {
  shared: {
    common: {
      fontFamily: 'Arial',
    },
  },
};
</script>