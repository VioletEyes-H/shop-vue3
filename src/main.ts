import {createSSRApp} from "vue";
import App from "./App.vue";
import router from './router'
import uviewPlus, {setConfig} from 'uview-plus'

setConfig({
    config: {
        unit: 'rpx'
    }
})

export function createApp() {
    const app = createSSRApp(App);
    app.use(router);
    app.use(uviewPlus);
    return {
        app,
    };
}
