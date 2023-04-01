import Vue from 'vue'
import Router from 'vue-router'

export default new Router({
    mode: 'hash',
    linkActiveClass: 'isactive',
    base: '/TrainingApp/',// 属性用于指定应用程序部署时的基本 URL 路径
    routes: [
        {
            path: '/',
            name: 'homePage',
            component: () => import('../view/homepage.vue'),
        },//首页
        {
            path: '/classity',
            name: 'classity',
            component: () => import('../view/classity.vue'),
        },//分类
        {
            path: '/class',
            name: 'class',
            component: () => import('../view/class.vue'),
        },//课程
        {
            path: '/my',
            name: 'my',
            component: () => import('../view/my.vue'),
        },//我的
    ]
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => {
        return err
    })
}

Vue.use(Router);