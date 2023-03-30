const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';

const proxy = {
    'GET /api/user/list': [
        {
            "CourseName": "Sketch插件大合集------Usi-ngSketch Like A Boss",
            "imgurl": "https://s1.ax1x.com/2023/03/27/ppsMeeg.jpg",
        },
        {
            "CourseName": "[ps大师班,告别小白]",
            "imgurl": "https://s1.ax1x.com/2023/03/27/ppsMeeg.jpg",
        },
    ]
}

module.exports = proxy, noProxy, delay;