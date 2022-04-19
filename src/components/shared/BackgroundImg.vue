<template>
   <div class="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none transition-colors delay-500">
      <div class="w-[108rem] flex-none flex justify-end">
        <picture>
          <source srcset="../../assets/images/bg-image.avif" type="image/avif">
          <img src="../../assets/images/bg-image.png" alt="" class="w-[71.75rem] flex-none max-w-none dark:hidden">
        </picture>
        <picture>
          <source srcset="../../assets/images/bg-dark-image.avif" type="image/avif">
          <img src="../../assets/images/bg-dark-image.png" alt="" class="w-[90rem] flex-none max-w-none hidden dark:block">
        </picture>
      </div>
  </div>
</template>