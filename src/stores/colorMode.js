import { defineStore } from "pinia";

export const useColorModeStore = defineStore('colorMode', {
   state: () => ({
      colorMode: 'dark',
   }),
   actions: {
      setColorMode(payload) {
         this.colorMode = payload;
      }
   },
})