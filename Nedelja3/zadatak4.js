function lifeSupply (numPerMonth, age) {
    let zaGodinuDana = numPerMonth * 12;
    let dokNeCrknem = 80 - age;
    return (dokNeCrknem * zaGodinuDana);
}
lifeSupply(10,27);
console.log (`Dovoljno pizze za dozivotno snadbevanje: ${lifeSupply(10,27)}`)