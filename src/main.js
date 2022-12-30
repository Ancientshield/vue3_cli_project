// 引入的不再是 Vue 的構造函數，引入的是一個名為 createApp 的工廠函數
// 構造函數一般來說首字母呼叫，需要 new 一個實體，工廠函數不用 new，可以直接呼叫

// 不能用 Vue2 的寫法了
// import Vue from 'vue'
// console.log('&&&', Vue) // undefiend

import { createApp } from "vue";
import App from "./App.vue";

// 先註解掉原程式碼，下面分析分析
// createApp(App).mount("#app");

// 建立應用實體物件（類似於 Vue2 之前的 vm，但 app 比較『輕』
const app = createApp(App);

// 掛載
app.mount("#app");

setTimeout(() => {
  app.unmount("#app");
}, 3000);

/*
Vue2 的寫法
const vm = new Vue({
  render:h => h(app)
})
vm.$mount('#app')
*/
