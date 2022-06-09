<script>
export default {
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    console.log(props.posts);
    return {};
  },
};
</script>

<template>
  <div class="transition-colors duration-500">
    <div
      v-for="(post, i) in posts"
      :key="post.id"
      class="pt-2 pb-6 lg:pr-20 lg:max-w-[33%] lg:inline-flex flex-col justify-self-center"
    >
      <div class="flex">
        <div class="mr-5">
          <span class="text-4xl font-bold font-mono leading-6 dark:text-gray-600 text-gray-200">
            0{{ i + 1 }}</span
          >
        </div>
        <div>
          <div class="flex mb-1">
            <img class="h-4 w-4 rounded-full" :src="post.metadata.createdBy.avatar" alt="avatar" />
            <div
              class="ml-1 font-semibold text-[10px] font-mono text-gray-700 dark:text-gray-200 self-center"
            >
              {{ post.metadata.createdBy.name }}
            </div>
          </div>
          <a class="cursor-pointer font-bold font-sans text-base dark:text-white text-black">{{
            post.title
          }}</a>
          <p
            class="mt-3 font-semibold text-[10px] font-mono text-gray-700 dark:text-gray-200 self-center"
          >
            {{ post.metadata.createdAt }} · {{ post.metadata.timeToRead }} read
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
