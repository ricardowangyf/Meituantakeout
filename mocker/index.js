const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';
// const meatydetalis = require('./meatydetalis');
// const detalis = require('./detalis');
// console.log(detalis)
// const user = require('./data');
const proxy = {

    // ...user,
    // ...detalis,
    // ...meatydetalis,

    'GET /api/user/': [
        // {
        //     "name": "多肉",
        //     "imgurl": "/img/cactus.jpg",
        //     "paragraph": "用户主动点击分享绝大多数APP都是在详情页等需要分享的页面放置一个分享按钮,由用户自行选择分享。这种情况下用户是否分享主要是取决于产品内容本身,比如内容有趣或是有用。在一些APP中设计者会对这个分享按钮加一些鼓励的文案或着重的设计来促进用户分享所以监听用户的载图操作,提示用户进行分享,旺缩短了以前分享截图的操作路径,避免了在之前长路径中的行为流失比如微图完成后忘记分享或觉得麻烦放弃分享等等",
        // },
    ],
}
module.exports = (noProxy ? {} : delay(proxy, 10));