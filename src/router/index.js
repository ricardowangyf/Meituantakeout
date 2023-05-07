import Vue from 'vue'
import Router from 'vue-router'

export default new Router({
    mode: 'hash',
    linkActiveClass: 'hover',
    routes: [
        {
            path: '/',
            name: 'homePage',
            props: true,
            component: () => import('../view/homepage.vue'),
        },//首页
        {
            path: '/detali',
            name: 'detali',
            component: () => import('../view/detali.vue'),
        },//我的
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
            path: '/classcard',
            name: 'classcard',
            component: () => import('../view/classcard.vue'),
        },//课程管理
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