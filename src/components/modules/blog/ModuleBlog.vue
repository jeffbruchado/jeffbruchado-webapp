<script setup>
import { ref } from 'vue';
// import md from 'markdown-it'
// import meta from 'markdown-it-meta'
import post1 from '@/assets/posts/1-higher-order-functions-programacao-funcional.md'
// import hljs from 'highlight.js'
import BlogPost from './BlogPost.vue';

// const markdown = new md({
//    html: true,
//    linkify: true,
//    typographer: true,
//    breaks: true,
//    highlight: function (str, lang) {
//     if (lang && hljs.getLanguage(lang)) {
//       try {
//         return '<pre class="hljs"><code>' +
//                hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
//                '</code></pre>';
//       } catch (__) {}
//     }

//     return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
//   }
// })

// markdown.use(meta)

</script>

<template>
   <div id="blog" class="px-4 xl:px-4 py-14 transition-colors delay-500">
      <BlogPost :postSource="post1" />
      <div class="mx-auto container">
         <span role="contentinfo">
            <h1 tabindex="0" class="focus:outline-none text-center text-3xl lg:text-5xl tracking-wider text-black dark:text-white transition-colors">Latest</h1>
         </span>
         <div tabindex="0" aria-label="Group of cards" class="focus:outline-none mt-12 lg:mt-24">
            <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
               <div tabindex="0" class="focus:outline-none" aria-label="card 1">
                  <img role="img" aria-label="code editor" tabindex="0" class="focus:outline-none w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(1).png" alt="code editor" />
                  <div class="py-4 px-8 w-full flex justify-between bg-[#A80CE6] dark:bg-[#22E68f] transition-colors">
                     <p  tabindex="0" class="focus:outline-none text-sm text-white dark:text-black font-semibold tracking-wide">Bruce Wayne</p>
                     <p tabindex="0" class="focus:outline-none text-sm text-white dark:text-black font-semibold tracking-wide">13TH Oct, 2020</p>
                  </div>
                  <div class="bg-gray-200 dark:bg-gray-800 px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                     <h1 tabindex="0" class="focus:outline-none text-4xl text-black dark:text-white transition-colors font-semibold tracking-wider">Transactions</h1>
                     <p tabindex="0" class="focus:outline-none text-gray-700 dark:text-white text-base transition-colors lg:text-lg lg:leading-8 tracking-wide mt-6 w-11/12">Find the latest events updates or create events, concerts, conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event.Find the latest events updates or create events, concerts, conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event.</p>
                     <div class="w-full flex justify-end" >
                        <button class="focus:outline-none focus:ring-2 ring-offset-2 focus:ring-gray-600 hover:opacity-75 mt-4 justify-end flex items-center cursor-pointer">
                           <span class=" text-base tracking-wide text-[#A80CE6] dark:text-[#22E68f] hover:text-[#a80ce6b9] dark:hover:text-[#22e68eee] transition-colors">Read more</span>
                           <svg class="ml-3 lg:ml-6 text-[#A80CE6] dark:text-[#22E68f] hover:text-[#a80ce6b9] dark:hover:text-[#22e68eee] transition-colors" xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                              <path d="M11.7998 1L18.9998 8.53662L11.7998 16.0732" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M1 8.53662H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                           </svg>
                        </button>
                     </div>
                     <div class="h-5 w-2"></div>
                  </div>
               </div>
               <div>
                  <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                     <div tabindex="0" class="focus:outline-none " aria-label="card 2" >
                        <img tabindex="0" role="img" aria-label="gaming" class="focus:outline-none w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(2).png" alt="games" />
                        <div class="py-2 px-4 w-full flex justify-between bg-[#A80CE6] dark:bg-[#22E68f]">
                           <p tabindex="0" class="focus:outline-none  text-sm text-white dark:text-black font-semibold tracking-wide transition-colors">Bruce Wayne</p>
                           <p tabindex="0" class="focus:outline-none text-sm text-white dark:text-black font-semibold tracking-wide transition-colors">13TH Oct, 2020</p>
                        </div>
                        <div class="bg-gray-200 dark:bg-gray-800 px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                           <h1 tabindex="0" class="focus:outline-none text-lg text-black dark:text-white font-semibold tracking-wide transition-colors">Transactions</h1>
                           <p tabindex="0" class="focus:outline-none text-black dark:text-white text-sm lg:text-base lg:leading-8 pr-4 tracking-wide transition-colors mt-2">Find the latest events updates or create events, concerts, conferences, workshops...</p>
                        </div>
                     </div>
                     <div  tabindex="0" class="focus:outline-none" aria-label="card 3">
                        <img tabindex="0" role="img" aria-label="gaming" class="focus:outline-none w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(3).png" alt="notes" />
                        <div class="py-2 px-4 w-full flex justify-between bg-[#A80CE6] dark:bg-[#22E68f]">
                           <p tabindex="0" class="focus:outline-none text-sm text-white dark:text-black font-semibold tracking-wide transition-colors">Bruce Wayne</p>
                           <p tabindex="0" class="focus:outline-none text-sm text-white dark:text-black font-semibold tracking-wide transition-colors">13TH Oct, 2020</p>
                        </div>
                        <div class="bg-gray-200 dark:bg-gray-800 px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                           <h1 tabindex="0" class="focus:outline-none text-lg text-black dark:text-white font-semibold tracking-wider transition-colors">Transactions</h1>
                           <p tabindex="0" class="focus:outline-none text-black dark:text-white text-sm lg:text-base lg:leading-8 pr-4 tracking-wide transition-colors mt-2">Find the latest events updates or create events, concerts, conferences, workshops...</p>
                        </div>
                     </div>
                  </div>
                  <div class="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                     <div tabindex="0" class="focus:outline-none " aria-label="card 4">
                        <img tabindex="0" role="img" aria-label="laptop" class="focus:outline-none w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(4).png" alt="laptop" />
                        <div class="py-2 px-4 w-full flex justify-between bg-[#A80CE6] dark:bg-[#22E68f]">
                           <p tabindex="0" class="focus:outline-none text-sm text-white dark:text-black font-semibold tracking-wide transition-colors">Bruce Wayne</p>
                           <p tabindex="0" class="focus:outline-none text-sm text-white dark:text-black font-semibold tracking-wide transition-colors">13TH Oct, 2020</p>
                        </div>
                        <div class="bg-gray-200 dark:bg-gray-800 px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                           <h1 tabindex="0" class="focus:outline-none text-lg text-black dark:text-white font-semibold tracking-wider transition-colors">Transactions</h1>
                           <p tabindex="0" class="focus:outline-none text-black dark:text-white text-sm lg:text-base lg:leading-8 pr-4 tracking-wide transition-colors mt-2">Find the latest events updates or create events, concerts, conferences, workshops...</p>
                        </div>
                     </div>
                     <div tabindex="0" class="focus:outline-none" aria-label="card 5">
                        <img tabindex="0" role="img" aria-label="worker" class="focus:outline-none w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(5).png" alt="worker" />
                        <div class="py-2 px-4 w-full flex justify-between bg-[#A80CE6] dark:bg-[#22E68f]">
                           <p tabindex="0" class="focus:outline-none text-sm text-white dark:text-black font-semibold tracking-wide transition-colors">Bruce Wayne</p>
                           <p tabindex="0" class="focus:outline-none text-sm text-white dark:text-black font-semibold tracking-wide transition-colors">13TH Oct, 2020</p>
                        </div>
                        <div class="bg-gray-200 dark:bg-gray-800 px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                           <h1 tabindex="0" class="focus:outline-none  text-lg text-black dark:text-white font-semibold tracking-wider transition-colors">Transactions</h1>
                           <p tabindex="0" class="focus:outline-none  text-black dark:text-white text-sm lg:text-base lg:leading-8 pr-4 tracking-wide transition-colors mt-2">Find the latest events updates or create events, concerts, conferences, workshops...</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>