<script setup>

import { RouterView } from 'vue-router';
import Navbar from '@/components/shared/Navbar.vue';
import { useColorModeStore } from '@/stores/colorMode';
import { storeToRefs } from 'pinia';
import { onMounted, watch } from 'vue-demi';

const colorModeStore = useColorModeStore();
const { colorMode } = storeToRefs(colorModeStore);

onMounted(() => {
  document.getElementsByTagName('html')[0].classList.add(`${colorMode.value}`, '[--scroll-mt:9.875rem]', 'lg:[--scroll-mt:6.3125rem]', 'js-focus-visible');
});

watch(colorMode, val => {
  if (val === 'light') {
    return document.getElementsByTagName('html')[0].classList.remove('dark');
  }
  return document.getElementsByTagName('html')[0].classList.add('dark');
});

</script>

<template>
  <Navbar :colorMode="colorMode" /> 
  <RouterView class="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8"/>
</template>

<style>
@import '@/assets/base.css';

body {
  @apply antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 transition-colors duration-500;
}
/* #app {
  max-width: 80%;
  margin: 0 auto;

  font-weight: normal;
} */

</style>
