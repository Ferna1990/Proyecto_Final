
import Vue from "vue";
import app from "../Paginas/pagina5.html";
import Vuelidate from "vuelidate";

Vue.use(Vuelidate);

Vue.config.productionTip = false;
new Vue({
    render: h=> h(app),
}).$mount('#app1')






