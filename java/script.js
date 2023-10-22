
import Vue from "vue";
import app from './app.vue';
import Vuelidate from "vuelidate";

Vue.use(Vuelidate);

Vue.config.productionTip = false;
new Vue({
    render: h=> h(app),
}).$mount('#app1')






