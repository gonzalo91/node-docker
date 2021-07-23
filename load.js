const fetch = require('node-fetch');

let i = 0 

while(i < 10000){
    fetch('http://147.182.179.160/api')
        .then(res => res.text(), e => console.error(e))
        .then(body => console.log(body + ' ' + i), e => console.error(e))
        ;
    i++
}