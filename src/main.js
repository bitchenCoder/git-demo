import {
  createApp
} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import cnZH from './assets/lang/cn.js';
import enUS from './assets/lang/en.js';
import {
  createI18n
} from 'vue-i18n';
// main.js



// import {
//   useI18n
// } from 'vue-i18n'
// import {
//   useStore
// } from "vuex"

const app = createApp(App);

// 中英文切换
const i18n = createI18n({
  // 语言标识
  legacy: false, // Vue 3 中的i18n需要设置legacy为false
  locale: 'en-US',
  // 语言标识，后面会用做切换和将用户习惯存储到本地浏览器
  fallbackLocale: 'en-US',
  messages: {
    'cn-ZH': cnZH,
    'en-US': enUS
  }
});

// 指定全局宽
app.config.globalProperties.width = 3840;

// 指定全局高
app.config.globalProperties.height = 2160;


// // 添加全局方法
// app.config.globalProperties.jump = (name) => {
//   if (name !== this.$route.name) {
//     this.$router.push({
//       name,
//       query: {
//         lang: this.$i18n.locale.value // 注意这里需要用.value
//       }
//     });
//   }
// };


// app.mixin({
//   created() {
//     this.$i18n = useI18n()
//     this.$store = useStore()
//   },
// });
app.use(router);
app.use(store);
app.use(i18n);

app.mount('#app');