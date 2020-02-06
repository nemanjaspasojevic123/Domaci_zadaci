let x = '';
let red = 5;
for(let i = 1; i <= red; i++){
    for(let j = 1; j <= i; j++){
        x += '#';
    }
    x += '\n';
}
console.log(x);