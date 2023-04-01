const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';

const proxy = {
    'GET /api/user/line': [
        {
            "name": "小升初特训营火热报名中",
            "data": "11月11日开课",
            "money": "￥99",
            "job": "广东广州千图新世界1号"
        },
        {
            "name": "寒假东令营火热报名中",
            "data": "11月11日开课",
            "money": "￥999",
            "job": "广东广州千图新世界1号",
        },
    ]
}

module.exports = proxy, noProxy, delay;