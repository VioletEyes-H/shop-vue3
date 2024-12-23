import {createSSRApp} from "vue";
import App from "./App.vue";
import router from './router'
import uviewPlus, {setConfig} from 'uview-plus'
import {pinia} from '@/store'

setConfig({
    config: {
        unit: 'rpx'
    }
})

export function createApp() {
    const app = createSSRApp(App);
    app.use(router);
    app.use(uviewPlus);
    app.use(pinia);
    return {
        app,
    };
}
