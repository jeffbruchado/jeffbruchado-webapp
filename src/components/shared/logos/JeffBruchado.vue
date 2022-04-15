<script setup>
defineProps({
  colorMode: {
    type: String,
    default: 'dark'
  }
});
</script>
<template>
   <router-link class="mr-3 flex-none overflow-hidden md:w-auto" to="/">
      <img
         v-if="colorMode === 'dark'"
         class="lg:w-56 md:w-48 sm:w-32 w-48 h-auto"
         src="@/assets/images/logo-vector-negative.svg"
      />
      <img
         v-else
         class="lg:w-56 md:w-48 sm:w-32 w-48 h-auto"
         src="@/assets/images/logo-vector.svg"
      />
   </router-link>
</template>