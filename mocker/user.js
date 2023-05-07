const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';

const proxy = {
    'GET /api/user/hot': [
        {
            "people": "18",
            "money": "￥89",
            "name": "Sketch插件大合集---Usi-ngSketch Like A Boss",
            "imgurl": "https://s1.ax1x.com/2023/03/31/pp27Hr8.png",
        },
        {
            "people": "16",
            "money": "￥129",
            "name": "Sketch插件大合集---Usi-ngSketch Like A Boss",
            "imgurl": "https://s1.ax1x.com/2023/03/31/pp27Hr8.png",
        },
        {
            "people": "16",
            "money": "￥129",
            "name": "Sketch插件大合集---Usi-ngSketch Like A Boss",
            "imgurl": "https://s1.ax1x.com/2023/03/31/pp27Hr8.png",
        },
        {
            "people": "16",
            "money": "￥129",
            "name": "Sketch插件大合集---Usi-ngSketch Like A Boss",
            "imgurl": "https://s1.ax1x.com/2023/03/31/pp27Hr8.png",
        },
        {
            "people": "16",
            "money": "￥129",
            "name": "Sketch插件大合集---Usi-ngSketch Like A Boss",
            "imgurl": "https://s1.ax1x.com/2023/03/31/pp27Hr8.png",
        },
        {
            "people": "16",
            "money": "￥129",
            "name": "Sketch插件大合集---Usi-ngSketch Like A Boss",
            "imgurl": "https://s1.ax1x.com/2023/03/31/pp27Hr8.png",
        },
    ]
}

module.exports = proxy, noProxy, delay;