import Vue from 'vue'
import App from './App.vue'
import Config from './utils/Config'
import router from './router'

import InlineSvg from 'vue-inline-svg';
import VueCookies from 'vue-cookies';

import store from './store/store'
import SessionActions from './store/store-session-actions'
import i18n from './i18n'

Vue.config.productionTip = false

Vue.component('inline-svg', InlineSvg);
Vue.use(VueCookies, { expires: '7d', sameSite: true })

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

router.beforeEach((to, from, next) => {
  let team = store.state.session.user.team;

  if (to.name === 'onboarding' || team) {
    next();
  } else {
    next('onboarding');
  }
});

Config.init().then(() => {
  store.dispatch(SessionActions.AUTH).then(() => {
    new Vue({
      router,
      store,
      i18n,
      render: h => h(App)
    }).$mount('#app');
  }).catch((err) => {
    alert(err);
  })
});