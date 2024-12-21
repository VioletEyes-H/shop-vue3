import {defineConfig} from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import TransformPages from 'uni-read-pages-vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [
        uni(),
        AutoImport({
            imports: [
                'vue',
                'uni-app',
                {
                    from: 'uni-mini-router',
                    imports: ['createRouter', 'useRouter', 'useRoute']
                }
            ],
            dts: 'src/auto-imports.d.ts', // 这里src目录必须是已存在的，如果是HbuilderX创建的项目是没有src目录的，可以配置为 dts: 'auto-imports.d.ts'
            eslintrc: {
                enabled: true,
                globalsPropValue: true
            }
        })
    ],
    define: {
        ROUTES: new TransformPages().routes//注入路由表
    }
});
