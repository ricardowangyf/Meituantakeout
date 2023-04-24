import requests from './request'

export const list = (params) => requests({ url: 'http://localhost:3721/api/user/list', method: 'POST', data:{...params}})  //在线课程API

export const recommend = () => requests({ url: 'http://localhost:3721/api/user/hot', method: 'GET' }) //热门推荐API

export const detali = () => requests({ url: 'http://localhost:3721/api/user/detali', method: 'GET' }) //用户头像API

export const line = () => requests({ url: 'http://localhost:3721/api/user/line', method: 'GET' }) //线下推荐API

export const time = () => requests({ url: 'http://localhost:3721/api/user/time', method: 'GET' }) //课程时间API

export const card = () => requests({ url: 'http://localhost:3721/api/user/card', method: 'GET' }) //课程页面卡片API

export const username = () => requests({ url: 'http://localhost:3721/api/user/username', method: 'GET' }) //我的界面用户名API

export const classcard = () => requests({ url: 'http://localhost:3721/api/user/classcard', method: 'GET' }) //课程卡片组件API

export const classare = () => requests({ url: 'http://localhost:3721/api/user/classare', method: 'GET' }) //课程管理API

    