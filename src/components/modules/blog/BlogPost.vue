<script setup>
import md from 'markdown-it'
import meta from 'markdown-it-meta'
import { config } from '@/configs/md'

defineProps({
  postSource: {
    default: '',
    type: String
  }
})

const markdown = new md(config)
markdown.use(meta)

</script>

<template>
   <div class="blog__post" v-html="markdown.render(postSource)"/>
</template>

<style lang="scss">
.blog {
  &__post {
    @apply text-black dark:text-white;
    h1 {
      @apply text-3xl font-bold
    }
  }
  &__code {
    @apply rounded-[1.8rem] shadow-lg shadow-[#a80ce654] dark:shadow-[#22e68e54] p-7;
    @apply whitespace-pre overflow-x-scroll lg:overflow-x-hidden
  }
}
</style>