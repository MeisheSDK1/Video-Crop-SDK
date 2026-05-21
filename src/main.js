import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import Template from './Template.vue'
const ROOTComponent = App 
const app = createApp(ROOTComponent).use(ElementPlus)
app.mount("#app")
