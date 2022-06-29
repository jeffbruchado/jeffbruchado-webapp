<script setup>
import { onMounted, reactive, ref, watch } from 'vue';
import posts from '@/assets/posts/posts.json';
import BlogPost from './BlogPost.vue';
import HorizontalList from './HorizontalList.vue';
import VerticalList from './VerticalList.vue';
import NavigationLink from '@/components/shared/NavigationLink.vue';
import Tag from '@/components/shared/Tag.vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

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
];
const tags = reactive([
  {
    label: 'Vue',
    selected: false,
  },
  {
    label: 'Javascript',
    selected: false,
  },
  {
    label: 'React',
    selected: false,
  },
  {
    label: 'React Native',
    selected: false,
  },
  {
    label: 'Node',
    selected: false,
  },
  {
    label: 'Express',
    selected: false,
  },
  {
    label: 'MongoDB',
    selected: false,
  },
  {
    label: 'GraphQL',
    selected: false,
  },
  {
    label: 'Apollo',
    selected: false,
  },
  {
    label: 'Gatsby',
    selected: false,
  },
  {
    label: 'Next',
    selected: false,
  },
  {
    label: 'Webpack',
    selected: false,
  },
  {
    label: 'Styled Components',
    selected: false,
  },
  {
    label: 'Sass',
    selected: false,
  },
  {
    label: 'Nuxt',
    selected: false,
  },
  {
    label: 'Web Components',
    selected: false,
  },
]);

const handleTagSelected = tag => {
  tag.selected = !tag.selected;
};

const selectedPost = ref({});
const openPost = (post, pushRoute = true) => {
  selectedPost.value = post;
  pushRoute && routerPushPostWithSlug(post.slug);
};

const closePost = () => {
  selectedPost.value = {};
  router.push({
    name: 'blog',
  });
};

const routerPushPostWithSlug = slug => {
  router.push({
    name: 'blog',
    params: { slug },
  });
};

const findPostBySlug = slug => {
  return posts.data.find(post => post.slug === slug);
};

watch(
  () => route.params.slug,
  slug => !slug && closePost(),
);

onMounted(() => {
  if (route.params?.slug) {
    return openPost(findPostBySlug(route.params.slug), false);
  }
});
</script>

<template>
  <div id="blog" class="px-4 xl py-14 transition-colors delay-500">
    <div v-if="!selectedPost.content" class="divide-y dark:divide-[#22e68e28] divide-[#a80ce625]">
      <HorizontalList class="pb-4" :posts="posts.data" @open-post="openPost" />
      <div class="lg:flex">
        <VerticalList class="pt-8 lg:w-2/3 lg:mr-16" :posts="posts.data" @open-post="openPost" />
        <section class="hidden lg:block">
          <div class="lg:sticky top-28 divide-y dark:divide-[#22e68e28] divide-[#a80ce625]">
            <div
              class="pt-8 text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200 pb-6 lg:max-w-sm"
            >
              <h1>Discover more</h1>
              <div class="inline-flex flex-wrap">
                <Tag
                  class="mr-2 mb-2"
                  v-for="tag in tags"
                  :key="tag"
                  :tag="tag"
                  @onClick="handleTagSelected"
                />
              </div>
            </div>
            <nav
              class="pt-6 text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200 lg:max-w-sm"
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
        </section>
      </div>
    </div>
    <BlogPost v-else :postSource="selectedPost.content" class="transition-all" />
  </div>
</template>
