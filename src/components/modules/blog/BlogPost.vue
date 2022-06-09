<script setup>
import md from 'markdown-it';
import meta from 'markdown-it-meta';
import { config } from '@/configs/md';

defineProps({
  postSource: {
    default: '',
    type: String,
  },
});

const markdown = new md(config);
markdown.use(meta);
</script>

<template>
  <div class="blog__post">
    <div class="blog__post__content" v-html="markdown.render(postSource)" />
  </div>
</template>

<style lang="scss">
.blog {
  &__post {
    @apply xl:flex md:flex justify-center;

    &__content {
      max-width: 750px;
      @apply lg:rounded-[0.8rem] lg:border-2 lg:border-[#a80ce654] lg:dark:border-[#22e68e54] lg:p-7;
      @apply lg:shadow-lg lg:shadow-[#a80ce654] lg:dark:shadow-[#22e68e54];
      @apply lg:bg-[#f3f3f3] lg:dark:bg-[#0a101d] transition-colors duration-500;

      // @apply bg-white dark:bg-slate-800 rounded-[1.3rem] shadow-md shadow-[#a80ce654] dark:shadow-[#22e68e54] p-7;
      @apply text-black dark:text-white;
      h1 {
        @apply text-3xl font-bold mb-6;
      }
      h2 {
        @apply ml-1;
      }
      h3 {
        @apply ml-1;
      }
      blockquote {
        @apply border-l-2 border-[#A80CE6] dark:border-[#22E68f];
        p {
          @apply ml-3 mb-5 mt-5 font-semibold text-black dark:text-gray-400;
        }
        blockquote {
          @apply ml-3;
          p {
            @apply ml-3 mb-5 mt-5 font-semibold text-black dark:text-gray-400;
          }
          blockquote {
            @apply ml-3;
            p {
              @apply ml-3 mb-5 mt-5 font-semibold text-black dark:text-gray-400;
            }
          }
        }
      }
    }
  }
  &__code {
    @apply rounded-[1rem] shadow-lg shadow-[#a80ce654] dark:shadow-[#22e68e54] p-7;
    @apply border-2 border-[#a80ce654] dark:border-[#22e68e54];
    @apply whitespace-pre overflow-x-scroll lg:overflow-x-hidden;
  }
}
</style>
