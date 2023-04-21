const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';
const user = require('./user');
const avatar = require('./avatar');
const offline = require('./offline');
const time = require('./time');
const card = require('./card');
const classcard = require('./classcard');
const username = require('./username');
const classare = require('./classare');
const listname = require('./listname');


const proxy = {
    ...user,
    ...avatar,
    ...offline,
    ...time,
    ...card,
    ...classcard,
    ...classare,
    ...username,
    ...listname,
}
module.exports = (noProxy ? {} : delay(proxy, 10));