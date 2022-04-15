<script setup>
import { ref } from 'vue';
import colorModeBtnVue from '@/components/shared/colorModeBtn.vue';
import Instagram from '@/components/shared/logos/Instagram.vue';
import Github from '@/components/shared/logos/Github.vue';
import JeffBruchado from '@/components/shared/logos/JeffBruchado.vue';
import Linkedin from '@/components/shared/logos/Linkedin.vue';
import NavigationModal from '@/components/shared/NavigationModal.vue';
import NavigationLink from '@/components/shared/NavigationLink.vue';

defineProps({
  colorMode: {
    default: 'dark',
    type: String
  }
});

const showNavigationModal = ref(false);
const links = [
   {
      label: 'Home',
      href: '/',
      routerLink: true
   },
   {
      label: 'Blog',
      href: '/blog',
      routerLink: true
   },
   {
      label: 'About',
      href: '/about',
      routerLink: true
   },
   {
      label: 'Instagram',
      href: 'https://instagram.com/jeffbruchado/',
      target: '_blank',
   },
   {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/jefferson-bruchado/',
      target: '_blank',
   },
   {
      label: 'GitHub',
      href: 'https://github.com/jeffbruchado/',
      target: '_blank',
   }
];

const toggleNavigationModal = () => {
   showNavigationModal.value = !showNavigationModal.value;
   console.log('showNavigationModal', showNavigationModal.value);
};

const filteredRouterLinks = links.filter(link => link.routerLink);
</script>

<template>
   <div class="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75">
      <div class="max-w-[90rem] mx-auto">
         <div class="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
            <div class="relative flex items-end">
               <JeffBruchado :colorMode="colorMode"/>
               <div class="relative hidden lg:flex items-end ml-auto">
                  <nav class="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
                     <ul class="flex space-x-8">
                        <NavigationLink 
                           v-for="link in filteredRouterLinks" 
                           :key="link.label"
                           :href="link.href"
                           :label="link.label"
                           :routerLink="link.routerLink"
                        />
                     </ul>
                  </nav>
                  <div class="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
                     <colorModeBtnVue class="items-center"/>
                     <Instagram />
                     <Linkedin />
                     <Github />
                  </div>
               </div>
               <colorModeBtnVue class="ml-auto w-8 h-8 -my-1 flex items-center justify-center lg:hidden"/>
               <div class="ml-2 -my-1 lg:hidden">
                  <button 
                     @click="toggleNavigationModal"
                     type="button" 
                     class="w-8 h-8 flex items-center justify-center text-[#A80CE6] dark:text-[#22E68f] hover:text-[#a80ce6b9] dark:hover:text-[#22e68eee]">
                     <span class="sr-only">Navigation</span>
                     <svg width="24" height="24" fill="none" aria-hidden="true">
                        <path d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                     </svg>
                  </button>
               </div>
            </div>
         </div>
      </div>
   </div>
   <NavigationModal
      v-if="showNavigationModal"
      :links="links"
      @toggleNavigationModal="toggleNavigationModal"
   />
</template>