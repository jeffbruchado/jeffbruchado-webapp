<script setup>
defineProps({
  href: {
    type: String,
    default: '#'
  },
  target: {
    type: String,
    default: '_self'
  },
  label: {
    type: String,
    default: ''
  },
  routerLink: {
    type: Boolean,
    default: false
  },
});
</script>

<template>
   <li>
      <router-link v-if="routerLink"
         :to="href" 
         :target="target" 
         class="hover:text-[#A80CE6] dark:hover:text-[#22E68f]"
      >
         {{ label }}
      </router-link>
      <a v-else
         class="hover:text-[#A80CE6] dark:hover:text-[#22E68f]"
         :target="target"
         :href="href">
         {{ label }}
      </a>
   </li>
</template>