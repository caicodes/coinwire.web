import { createApp } from "vue"
import App from "./App.vue"
import VueApexCharts from "vue3-apexcharts"
import "./tailwind.css"

const app = createApp(App)
app.use(VueApexCharts).mount("#app")
