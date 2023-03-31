const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';

const proxy = {
    'GET /api/user/detali': [
        {
            "users": "https://s2.xptou.com/2023/03/31/642690242de97.jpg",
            "username": "陈芊芊",
            "job": "千图特邀首席设计师"
        },
        {
            "users": "https://s2.xptou.com/2023/03/31/642690242de97.jpg",
            "username": "陈芊芊",
            "job": "千图特邀首席设计师"
        },
        {
            "users": "https://s2.xptou.com/2023/03/31/642690242de97.jpg",
            "username": "陈芊芊",
            "job": "千图特邀首席设计师"
        },
    ]
}

module.exports = proxy, noProxy, delay;