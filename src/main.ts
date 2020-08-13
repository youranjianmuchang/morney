import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import Ant from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icons from '@/components/Icons.vue';
import store2 from '@/store/index2.ts';

Vue.config.productionTip = false

const { Message, Modal } = Ant;

Vue.prototype.$message = Message;
Vue.prototype.$confirm = Modal.confirm;

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icons', Icons);
Vue.component(Modal.name, Modal);
Vue.use(Modal);
Message.config({
  duration: 2,
})

Vue.prototype.$store2 = store2;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

if(document.documentElement.clientWidth > 500){
    Message.info('请在手机中打开本页面，以获得更好的体验',5);
}

/* eslint-disable */
(function (doc, win) {
  const docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      const clientWidth = docEl.clientWidth > 750 ? 750 : docEl.clientWidth;
      if (!clientWidth) { return }
      docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
    };
  recalc();
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window) 