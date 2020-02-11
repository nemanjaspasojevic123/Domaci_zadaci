function max3br(broj1, broj2, broj3){
let max = broj1;
    if (broj2 > max){
        max = broj2;
    }
    if (broj3 > max){
        max = broj3;
    }
    return (max)
}
let maksimum = max3br(6, 14, 10);
console.log(maksimum)