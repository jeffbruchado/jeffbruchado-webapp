<script setup>

import { RouterView } from 'vue-router';
import Navbar from '@/components/shared/Navbar.vue';
import BackgroundImg from './components/shared/BackgroundImg.vue';
import { useColorModeStore } from '@/stores/colorMode';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';

const colorModeStore = useColorModeStore();
const { colorMode } = storeToRefs(colorModeStore);

watch(colorMode, val => {
  if (val === 'light') return document.getElementsByTagName('html')[0].classList.remove('dark');
  return document.getElementsByTagName('html')[0].classList.add('dark');
});

</script>

<template>
  <BackgroundImg />
  <Navbar :colorMode="colorMode" /> 
  <RouterView class="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8"/>
</template>

<style>
@import '@/assets/base.css';

body {
  @apply antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 transition-colors duration-500;
}
</style>
