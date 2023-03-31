const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';

const proxy = {
    'GET /api/user/list': [
        {
            "people": "18",
            "money": "￥89",
            "CourseName": "Sketch插件大合集---Usi-ngSketch Like A Boss",
            "imgurl": "https://www.hualigs.cn/image/64265c49dc27d.jpg",
        },
        {
            "people": "16",
            "money": "￥129",
            "CourseName": "Sketch插件大合集---Usi-ngSketch Like A Boss",
            "imgurl": "https://s1.ax1x.com/2023/03/31/pp27Hr8.png",
        },
    ]
}

module.exports = proxy, noProxy, delay;