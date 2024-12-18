import { createApp } from 'vue'
import App from './App.vue'

// 导入插件
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 创建App实例
const app = createApp(App);

// 使用插件
app.use(router);
app.use(ElementPlus);

// 导入所有图标并进行全局注册
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

// 修改页面title
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

// 禁用右键
document.oncontextmenu = function () { return false; }
// 禁用选择
document.onselectstart = function () { return false; }
// 禁用F12
document.οnkeydοwn = function () { return false; }

// 挂载app
app.mount('#app');
