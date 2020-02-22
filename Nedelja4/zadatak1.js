pokemon1 = {
    ime: 'Pikachu',
    vrsta: 'elektricni',
    sposobnosti: ['staticki elektricitet', 'strujni udar'],
    karakteristike: { napad: 55, odbrana: 30, brzina: 90 },
}
pokemon2 = {
    ime: 'Charmander',
    vrsta: 'vatreni',
    sposobnosti: ['vatrene kugle'],
    karakteristike: { napad: 40, odbrana: 40, brzina: 65 },
}
pokemon3 = {
    ime: 'Squirtle',
    vrsta: 'vodeni',
    sposobnosti: ['vodeni snop'],
    karakteristike: { napad: 45, odbrana: 20, brzina: 80 },
}
pokemon4 = {
    ime: 'Butterfree',
    vrsta: 'leteci',
    sposobnosti: ['vazdusna oluja'],
    karakteristike: { napad: 60, odbrana: 15, brzina: 60 },
}
pokemon5 = {
    ime: 'Onix',
    vrsta: 'zemljani',
    sposobnosti: ['kameni cekic', 'kameni zid'],
    karakteristike: { napad: 30, odbrana: 90, brzina: 30 },
}
let pokemoni = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5];




// Zadatak 2



// let sposobnostiPokemona = (parametar) => {
//     let nizSposobnosti = [];
//     for(let element of parametar){
//         for(let el of element.sposobnosti){
//         nizSposobnosti.push(el);
//     }
// }
//     return nizSposobnosti;
// }
// console.log(sposobnostiPokemona(pokemoni))




// Zadatak 3



// const brzinaPokemona = pokemoni.sort(function(p1, p2){
//     if(p1.karakteristike.brzina > p2.karakteristike.brzina){
//         return 1;
//     }else{
//         return -1;
//     }
// })
// console.log(brzinaPokemona)


//Zadatak4


// function najjaciPokemon(pokemoni) {
//     let maxPos = 0;
//     let max = pokemoni[maxPos];
//     for (const pokemon of pokemoni) {
//         if (max.karakteristike.napad < pokemon.karakteristike.napad)
//             max = pokemon
//     }
//     return max
// }
// console.log(najjaciPokemon(pokemoni));
