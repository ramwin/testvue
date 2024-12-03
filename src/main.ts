import "./assets/main.css"

import { createApp } from "vue"
import { createPinia } from "pinia"

import Antd from "ant-design-vue"
import "ant-design-vue/dist/reset.css"

import App from "./App.vue"
import router from "./router"

import piniaPluginPersistedstate from "pinia-plugin-persistedstate"

import VxeUI from 'vxe-pc-ui'
import 'vxe-pc-ui/lib/style.css'
import VxeUITable from 'vxe-table'
import 'vxe-table/lib/style.css'


const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(Antd)

app.use(VxeUI).use(VxeUITable)

app.mount("#app")
