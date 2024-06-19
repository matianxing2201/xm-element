import { createApp } from 'vue'
import App from './App.vue'
import XmElement from 'xm-element'
import './assets/reset.css'
import 'xm-element/dist/es/index.css'

createApp(App).use(XmElement).mount('#app')
