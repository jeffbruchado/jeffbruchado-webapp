<script setup>
import { ref } from 'vue';
import posts from '@/assets/posts/posts.json';
import BlogPost from './BlogPost.vue';
import HorizontalList from './HorizontalList.vue';
import VerticalList from './VerticalList.vue';
import NavigationLink from '@/components/shared/NavigationLink.vue';

const links = [
  {
    label: 'Home',
    href: '/',
    routerLink: true,
  },
  {
    label: 'Blog',
    href: '/blog',
    routerLink: true,
  },
  {
    label: 'About',
    href: '/about',
    routerLink: true,
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
  },
  {
    label: 'Home',
    href: '/',
    routerLink: true,
  },
  {
    label: 'Blog',
    href: '/blog',
    routerLink: true,
  },
  {
    label: 'About',
    href: '/about',
    routerLink: true,
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
  },
];
</script>

<template>
  <div id="blog" class="px-4 xl py-14 transition-colors delay-500">
    <div class="divide-y dark:divide-[#22e68e28] divide-[#a80ce625]">
      <HorizontalList class="pb-4" :posts="posts.data" />
      <div class="lg:flex">
        <VerticalList class="pt-8 lg:w-2/3 lg:mr-16" :posts="posts.data" />
        <div class="divide-y dark:divide-[#22e68e28] divide-[#a80ce625] hidden lg:block">
          <div class="pt-8 text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200 pb-6">
            <h1>Discover more</h1>
          </div>
          <nav
            class="pt-8 text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200 lg:max-w-sm"
          >
            <ul class="inline-flex flex-wrap">
              <NavigationLink
                class="mr-4"
                v-for="link in links"
                :key="link.label"
                :href="link.href"
                :label="link.label"
                :routerLink="link.routerLink"
              />
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <!-- <BlogPost :postSource="posts.data[0].content" /> -->
  </div>
</template>
