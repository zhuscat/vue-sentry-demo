import Vue from 'vue'
import App from './App.vue'
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';

Raven
  .config('https://03506f86f9874b428a70bb642240900a@sentry.io/1255229')
  .addPlugin(RavenVue, Vue)
  .install();

window.addEventListener(
  'unhandledrejection',
  function(e) {
    Raven.captureException(e.reason, {
      extra: { unhandledPromise: true },
    });
  },
  false
);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
