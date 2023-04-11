const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';

const proxy = {
    'GET /api/user/card': [
        {
            "name": "[手绘设计30天速成班]小喵老师教你快速练就高阶",
            "time": "第五章 01 跳动的xxx",
            "svg": "https://s1.ax1x.com/2023/04/03/pphZUrq.png",
            "imgurl": "https://s1.ax1x.com/2023/04/03/pphZ0aT.png",
            "favorties": true,
            "deleteAt": "2022/12/01",
            "Trash": "2022/12/01",
        },
        {
            "name": "平面设计,你也可以成为高阶大师",
            "time": "第五章 01 跳动的xxx",
            "svg": "https://s1.ax1x.com/2023/04/03/pphZUrq.png", 
            "imgurl": "https://s1.ax1x.com/2023/04/03/pphZ0aT.png",
            "Trash": "2022/12/01",
        },
        {
            "name": "PS初级入门到精通,小喵老师教你快速练就高阶",
            "time": "第五章 01 跳动的xxx",
            "deleteAt": "2022/12/01",
            "svg": "https://s1.ax1x.com/2023/04/03/pphZUrq.png", 
            "imgurl": "https://s1.ax1x.com/2023/04/03/pphZ0aT.png",
        },
        {
            "name": "Sketch 插件大合集----Using Sketch Like A BOSS",
            "time": "第五章 01 跳动的xxx",
            "svg": "https://s1.ax1x.com/2023/04/03/pphZUrq.png", 
            "deleteAt": "2022/12/01",
            "imgurl": "https://s1.ax1x.com/2023/04/03/pphZ0aT.png",
        },
        {
            "name": "Sketch 插件大合集----Using Sketch Like A BOSS",
            "time": "第五章 01 跳动的xxx",
            "svg": "https://s1.ax1x.com/2023/04/03/pphZUrq.png", 
            "imgurl": "https://s1.ax1x.com/2023/04/03/pphZ0aT.png",
        },
        {
            "name": "Sketch 插件大合集----Using Sketch Like A BOSS",
            "time": "第五章 01 跳动的xxx",
            "svg": "https://s1.ax1x.com/2023/04/03/pphZUrq.png", 
            "imgurl": "https://s1.ax1x.com/2023/04/03/pphZ0aT.png",
        },
        {
            "name": "Sketch 插件大合集----Using Sketch Like A BOSS",
            "time": "第五章 01 跳动的xxx",
            "svg": "https://s1.ax1x.com/2023/04/03/pphZUrq.png", 
            "imgurl": "https://s1.ax1x.com/2023/04/03/pphZ0aT.png",
        },
        {
            "name": "Sketch 插件大合集----Using Sketch Like A BOSS",
            "time": "第五章 01 跳动的xxx",
            "svg": "https://s1.ax1x.com/2023/04/03/pphZUrq.png", 
            "imgurl": "https://s1.ax1x.com/2023/04/03/pphZ0aT.png",
        },
        {
            "name": "Sketch 插件大合集----Using Sketch Like A BOSS",
            "time": "第五章 01 跳动的xxx",
            "svg": "https://s1.ax1x.com/2023/04/03/pphZUrq.png", 
            "imgurl": "https://s1.ax1x.com/2023/04/03/pphZ0aT.png",
        },
        {
            "name": "Sketch 插件大合集----Using Sketch Like A BOSS",
            "time": "第五章 01 跳动的xxx",
            "svg": "https://s1.ax1x.com/2023/04/03/pphZUrq.png", 
            "imgurl": "https://s1.ax1x.com/2023/04/03/pphZ0aT.png",
        },
    ]
}

module.exports = proxy, noProxy, delay;