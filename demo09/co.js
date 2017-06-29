var fetch = require('node-fetch')
var co = require('co');
var api = 'https://api.github.com/users/popzhou'

co(function *() {
    var res = yield fetch(api);
    var json = yield res.json();
    console.log(json.login);

    return json;
}).then((val) => {
    console.log(val.login);
});