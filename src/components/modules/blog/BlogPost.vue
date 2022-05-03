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
   <div v-html="markdown.render(postSource)"/>
</template>

<style lang="scss" scoped>

</style>