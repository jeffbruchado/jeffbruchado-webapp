<script>
export default {
  props: {
    tag: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ['onClick'],
  setup(props, ctx) {
    const handleClick = () => ctx.emit('onClick', props.tag);

    return {
      handleClick,
    };
  },
};
</script>

<template>
  <div class="transition-colors delay-500">
    <h1
      class="cursor-pointer border border-gray-200 dark:border-gray-500 pr-2 pl-2 text-gray-400 dark:text-gray-300 hover:text-[#a80ce6b9] hover:border-[#a80ce6b9] dark:hover:text-[#22e68eee] dark:hover:border-[#22e68eee]"
      :class="{
        'dark:bg-[#22e68e7a] dark:border-[#22e68e5b] bg-[#a80ce670] border-[#a80ce64d] text-white dark:text-white hover:text-white':
          tag.selected,
      }"
      @click="handleClick"
    >
      {{ tag.label }}
    </h1>
  </div>
</template>
