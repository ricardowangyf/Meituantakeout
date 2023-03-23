const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';
const proxy = {

    'GET /api/user/': [
        {
            "CourseName": "[ps大师班,告别小白]",
            "imgurl": "/img/ps.jpg",
            "speaker": "千小喵",
        },
        {
            "CourseName": "[手绘设计30天速成班]",
            "imgurl": "/img/cactus.jpg",
            "speaker": "千小喵",
        },
        {
            "CourseName": "[平面设计30天速成班]",
            "imgurl": "/img/cactus.jpg",
            "speaker": "千小喵",
        },
        {
            "CourseName": "[PS初级入门到精通]",
            "imgurl": "/img/cactus.jpg",
            "speaker": "千小喵",
        },
        {
            "CourseName": "[1天练就Sketch高手]",
            "imgurl": "/img/cactus.jpg",
            "speaker": "千小喵",
        },
        {
            "CourseName": "[AE初级入门到精通]",
            "imgurl": "/img/cactus.jpg",
            "speaker": "千小喵",
        },
    ],
}
module.exports = (noProxy ? {} : delay(proxy, 10));