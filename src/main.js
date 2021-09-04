import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
import VueParticles from "vue-particles";
import router from "./router";


const app= createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(VueParticles);
app.mount('#app')
