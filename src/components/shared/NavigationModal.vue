<script setup>
import NavigationLink from '@/components/shared/NavigationLink.vue';

defineProps({
  links: {
    type: Array,
    default: () => [],
  },
});
const emit = defineEmits({
  toggleNavigationModal: {
    type: Boolean,
    default: false,
  },
});

const toggleNavigationModal = () => emit('toggleNavigationModal');
</script>

<template>
  <div
    class="fixed z-50 inset-0 lg:hidden"
    id="headlessui-dialog-22"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80"
      id="headlessui-dialog-overlay-31"
      aria-hidden="true"
    ></div>
    <div
      class="fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:highlight-white/5"
    >
      <button
        @click="toggleNavigationModal"
        type="button"
        class="absolute top-5 right-5 w-8 h-8 flex items-center justify-center hover:text-[#A80CE6] dark:hover:text-[#22E68f] z-10"
        tabindex="0"
      >
        <span class="sr-only">Close navigation</span>
        <svg viewBox="0 0 10 10" class="w-2.5 h-2.5 overflow-visible" aria-hidden="true">
          <path
            d="M0 0L10 10M10 0L0 10"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          ></path>
        </svg>
      </button>
      <ul class="space-y-6">
        <NavigationLink
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          :target="link?.target"
          :routerLink="link.routerLink"
          :label="link.label"
          @toggleNavigationModal="toggleNavigationModal"
        />
      </ul>
    </div>
  </div>
</template>
