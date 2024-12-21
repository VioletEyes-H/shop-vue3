import {createRouter} from 'uni-mini-router'

const router = createRouter({
    routes: [...ROUTES] // 路由表信息
})
router.beforeEach((to, from, next) => {
    next()
})
router.afterEach((to, from) => {
})
export default router
