const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';

const proxy = {
    'GET /api/user/username': [
        {
            "name": "小千千",
            "imgurl": "https://s2.xptou.com/2023/03/31/642690242de97.jpg",
        },
    ]
}

module.exports = proxy, noProxy, delay;