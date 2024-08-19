const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let answer = '';
    for (let i = 0; i < str.length; i++) {
        let s = str[i];
        if (s === s.toUpperCase()) {
            answer += s.toLowerCase();
        } else {
            answer += s.toUpperCase();
        }
    }
    console.log(answer)
});