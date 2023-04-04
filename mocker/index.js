const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';
const user = require('./user');
const avatar = require('./avatar');
const offline = require('./offline');
const time = require('./time');
const card = require('./card');
const username = require('./username');

const proxy = {
    ...user,
    ...avatar,
    ...offline,
    ...time,
    ...card,
    ...username,

    'GET /api/user/': [
        {
            "CourseName": "[ps大师班,告别小白]",
            "imgurl": "https://s1.ax1x.com/2023/03/27/ppsMeeg.jpg",
            "speaker": "千小喵",
        },
        {
            "CourseName": "[手绘设计30天速成班]",
            "imgurl": "https://s1.ax1x.com/2023/03/27/ppstBp4.jpg",
            "speaker": "千小喵",
        },
        {
            "CourseName": "[平面设计30天速成班]",
            "imgurl": "https://s1.ax1x.com/2023/03/27/ppstakT.jpg",
            "speaker": "千小喵",
        },
        {
            "CourseName": "[PS初级入门到精通]",
            "imgurl": "https://s1.ax1x.com/2023/03/27/ppstdtU.jpg",
            "speaker": "千小喵",
        },
        {
            "CourseName": "[1天练就Sketch高手]",
            "imgurl": "https://s1.ax1x.com/2023/03/27/ppstwhF.jpg",
            "speaker": "千小喵",
        },
        {
            "CourseName": "[AE初级入门到精通]",
            "imgurl": "https://s1.ax1x.com/2023/03/27/ppstBp4.jpg",
            "speaker": "千小喵",
        },
    ],
}
module.exports = (noProxy ? {} : delay(proxy, 10));