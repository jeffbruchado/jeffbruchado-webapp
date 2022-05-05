import hljs from 'highlight.js'

export const config = {
   html: true,
   linkify: true,
   typographer: true,
   breaks: true,
   highlight: (str, lang) => {
      if (lang && hljs.getLanguage(lang)) {
         try {
            return '<pre class="blog__code hljs"><code>' +
               hljs.highlight(str, { 
                  language: lang, 
                  ignoreIllegals: true 
               }).value +
               '</code></pre>';
         } catch (__) {}
      }
      return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
   }
}
