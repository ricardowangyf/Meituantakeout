const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';

const proxy = {
    'GET /api/user/classare': [
        {
            "name": "[手绘设计30天速成班]小喵老师教你快速练就高阶",
            "imgurl": "https://s1.ax1x.com/2023/04/05/pp5DBzF.jpg",
            "free": "免费"
        },
        {
            "name": "[手绘设计30天速成班]小喵老师教你快速练就高阶",
            "imgurl": "https://s1.ax1x.com/2023/04/05/pp5DBzF.jpg",
            "free": "免费"
        },
        {
            "name": "[手绘设计30天速成班]小喵老师教你快速练就高阶",
            "imgurl": "https://s1.ax1x.com/2023/04/05/pp5DBzF.jpg",
            "free": "免费"
        },
        {
            "name": "[手绘设计30天速成班]小喵老师教你快速练就高阶",
            "imgurl": "https://s1.ax1x.com/2023/04/05/pp5DBzF.jpg",
            "free": "免费"
        },
        {
            "name": "[手绘设计30天速成班]小喵老师教你快速练就高阶",
            "imgurl": "https://s1.ax1x.com/2023/04/05/pp5DBzF.jpg",
            "free": "免费"
        },
        {
            "name": "[手绘设计30天速成班]小喵老师教你快速练就高阶",
            "imgurl": "https://s1.ax1x.com/2023/04/05/pp5DBzF.jpg",
            "free": "免费"
        },
        {
            "name": "小升初特训营火热[手绘设计30天速成班]小喵老师教你快速练就高阶报名中",
            "imgurl": "https://s1.ax1x.com/2023/04/05/pp5DBzF.jpg",
            "free": "免费"
        },
    ]
}

module.exports = proxy, noProxy, delay;