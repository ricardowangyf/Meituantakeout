const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';

const proxy = {
    'GET /api/user/time': [
        {
            "time": "20",
        },
    ]
}

module.exports = proxy, noProxy, delay;