import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icons from '@/components/Icons.vue';
import { tagListModel } from "@/models/tagListModel";

Vue.config.productionTip = false

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icons', Icons);

window.tagList = tagListModel.fetch();
window.createTag = function () {
  const name = window.prompt("请输入标签名称");
  if (name) {
    const message = tagListModel.create(name);
    if (message === "duplicated") {
      window.alert("标签已存在");
    } else if (message === "success") {
      window.alert("添加成功");
    }
  }
}
window.findTag = function (id: string) {
  return window.tagList.filter(tag => tag.id === id)[0];
}
window.updateTag = function (id: string, name: string) {
  return tagListModel.update(id, name);
}
window.removeTag = function (id: string) {
  return tagListModel.remove(id);
}

window.saveTag = function () {
  tagListModel.save();
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
