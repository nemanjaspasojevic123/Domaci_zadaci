let x = '';
let red = 5;
for(let i = 1; i <= red; i++){
    for(let j = 0; j <=red - i; j++){
        x += ' ';
    }
    for(let k=1; k <= i; k++){
        x += '#';
    }
    x += '\n';
}
console.log(x);