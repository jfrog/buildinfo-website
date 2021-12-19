import DefaultLayout from '~/layouts/Default.vue'

import BootstrapVue from 'bootstrap-vue'
import './assets/styles/main.scss'

import checkIfMobile from './mixins/checkIfMobile'

import VueYouTubeEmbed from 'vue-youtube-embed'

export default function (Vue, { router, head, isClient }) {
  
  // --- UNCOMMENT TO HIDE FROM SEARCH ENGINES ---
  // head.meta.push({
  //   name: 'robots',
  //   content: 'noindex'
  // })
  // head.meta.push({
  //   name: 'googlebot',
  //   content: 'noindex'
  // })
  // --- UNCOMMENT TO HIDE FROM SEARCH ENGINES | END ---

  Vue.use(BootstrapVue)
  Vue.use(VueYouTubeEmbed)
  Vue.component('Layout', DefaultLayout)
  Vue.mixin(checkIfMobile)
}
