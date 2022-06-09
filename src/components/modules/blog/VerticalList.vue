<script>
export default {
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    return {};
  },
};
</script>

<template>
  <div class="transition-colors duration-500">
    <div v-for="(post, i) in posts" :key="post.id" class="pt-2 pb-6 flex-col justify-self-center">
      <div class="flex">
        <div>
          <div class="flex mb-1">
            <img class="h-4 w-4 rounded-full" :src="post.metadata.createdBy.avatar" alt="avatar" />
            <div
              class="ml-1 font-semibold text-[10px] font-mono text-gray-700 dark:text-gray-200 self-center"
            >
              {{ post.metadata.createdBy.name }}
            </div>
          </div>
          <a
            class="cursor-pointer lg:text-2xl text-sm font-bold font-sans dark:text-white text-black"
          >
            {{ post.title }}
          </a>
          <p
            class="mt-1 cursor-pointer text-base font-thin font-sans dark:text-gray-100 text-black hidden lg:line-clamp-2"
          >
            {{ post.description }}
          </p>
          <p
            class="mt-2 font-semibold text-[12px] font-mono text-gray-700 dark:text-gray-200 self-center"
          >
            {{ post.metadata.createdAt }} · {{ post.metadata.timeToRead }} read
          </p>
        </div>
        <div class="lg:ml-10 lg:mr-4 lg:mt-4 lg:mb-4 ml-2 border-2">
          <img class="lg:h-32 lg:w-52 w-24 h-24" :src="post.metadata.coverImage" :alt="post.id" />
        </div>
      </div>
    </div>
  </div>
</template>
