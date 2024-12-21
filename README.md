# uni-mini-router

- push方法

  router.push(target:RouteLocationRaw): void
  保留当前页面，跳转到应用内的某个页面，相当于使用 uni.navigateTo(OBJECT)。


- pushTab方法

  router.pushTab(target:RouteLocationRaw): void
  跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面，相当于使用 uni.switchTab(OBJECT)。


- replace方法

  router.replace(target:RouteLocationRaw): void
  关闭当前页面，跳转到应用内的某个页面，相当于使用 uni.redirectTo(OBJECT)。


- replaceAll方法

  router.replaceAll(target:RouteLocationRaw): void
  关闭所有页面，打开到应用内的某个页面，相当于使用 uni.reLaunch(OBJECT)。


- back方法

  router.back(level?: number): void
  关闭当前页面，返回上一页面或多级页面，相当于使用 uni.navigateBack(OBJECT)。

### 前置守卫`beforeEach`
- to: 即将要进入的目标
- from: 当前导航正要离开的路由
- next: 用于reslove beforeEach钩子，需要确保 next 在导航守卫中都被严格调用一次

  - next(): 执行默认路由跳转逻辑
  - next(false): 终止跳转逻辑
  - next({ path: '/' }): 跳转到不同的页面
  - next({ path: '/', navType: 'replaceAll' }): 改变当前跳转类型并跳转到不同的页面，可以通过navType指定新的跳转类型。（实例为中断当前导航，改用replaceAll方法跳转到新的页面）
