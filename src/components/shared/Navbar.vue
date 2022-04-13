<script setup>
import colorModeBtnVue from '@/components/shared/colorModeBtn.vue';
</script>

<template>
   <nav class="flex w-full bg-white items-center justify-center">
      <a href="" class="text">Artwork</a>
      <div id="logo"></div>
      <a href="">Responses</a>
      <colorModeBtnVue />
   </nav>
</template>

<style>

a{
  text-decoration: none;
  color: rgba(0,0,0,0.8);
  margin: 0 40px;
}

#logo{
  width: 200px;
  height: 100%;
  background: rgba(0,0,0,0.3);
}
</style>