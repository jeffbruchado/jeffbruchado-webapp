<script setup>

import { RouterView } from 'vue-router';
import Navbar from '@/components/shared/Navbar.vue';
import { useColorModeStore } from '@/stores/colorMode';
import { storeToRefs } from 'pinia';

const colorModeStore = useColorModeStore();
const { colorMode } = storeToRefs(colorModeStore);

</script>

<template>
  <div :class="{ 'dark': colorMode === 'dark' }">
    <Navbar /> 
  
    <h1 class="text-3xl font-bold underline text-black bg-white dark:bg-black dark:text-white">
      Hello world! {{ colorMode }}
    </h1>
  

    <button @click="changeDarkMode">Change theme</button>
    <RouterView />
  </div>
</template>

<style>
@import '@/assets/base.css';

#app {
  max-width: 80%;
  margin: 0 auto;

  font-weight: normal;
}
</style>
