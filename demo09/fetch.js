var fetch = require('node-fetch');
var api = 'https://api.github.com/users/popzhou';

fetch(api).then((res)=>{
    return res.json();
}).then((json)=>{
    console.log(json);
}).catch((err)=>{
    console.log(err);
});