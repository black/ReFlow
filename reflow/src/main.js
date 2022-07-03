import { createApp } from 'vue'
import App from './App.vue'
import 'material-icons/iconfont/material-icons.css'
import {
    SVG
} from '@svgdotjs/svg.js'
import './index.css' 


const app = createApp(App)
app.config.globalProperties.svg = SVG 
app.mount('#app')



/*  Bugs & Fixes -----------
https: //stackoverflow.com/questions/65184107/how-to-use-vue-prototype-or-global-variable-in-vue-3
provide/ syntax replaced Vue.prototype in Vue3

GOJS = "https://gojs.net/latest/index.html?gclid=CjwKCAjw2f-VBhAsEiwAO4lNeNT8OvEwsKhJT5RaNr-SeuDBmR6aI62rUQHBlhqwgWcLMtmCRNvs2RoCrQEQAvD_BwE"
*/ 
