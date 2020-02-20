pokemon1 = {
    ime: 'pikachu',
    vrsta: 'elektricni',
    sposobnosti: ['staticki elektricitet', 'strujni udar'],
    karakteristike: { napad: 55, odbrana: 30, brzina: 90 }
}
pokemon2 = {
    ime: 'charmander',
    vrsta: 'vatreni',
    sposobnosti: ['vatrene kugle'],
    karakteristike: { napad: 40, odbrana: 40, brzina: 65 }
}
pokemon3 = {
    ime: 'squirtle',
    vrsta: 'vodeni',
    sposobnosti: ['vodeni snop'],
    karakteristike: { napad: 45, odbrana: 20, brzina: 80 }
}
pokemon4 = {
    ime: 'butterfree',
    vrsta: 'leteci',
    sposobnosti: ['vazdusna oluja'],
    karakteristike: { napad: 60, odbrana: 15, brzina: 60 }
}
pokemon5 = {
    ime: 'onix',
    vrsta: 'zemljani',
    sposobnosti: ['kameni cekic', 'kameni zid'],
    karakteristike: { napad: 30, odbrana: 90, brzina: 30 }
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


//Zadatak5



const app = document.querySelector('#app');
const prikaz = document.querySelector('#prikaz');
prikaz.addEventListener('click',(e) => {
    app.innerHTML = getSlikaPokemona();
})
const pobednik = document.querySelector('#pobednik');
pobednik.addEventListener('click',(e) => {
    app.innerHTML = getSlikaPobednika();
})

const getSlikaPokemona = () => {
    return ` <div class="slike">
    <div>
        <p>BUTTERFREE. In battle, it flaps its wings at high speed to release highly toxic dust into the air.</p>
    <img src="assets/images/butterfree.jpg">
    </div>
    <div>
        <p>PIKACHU. When several of these POKéMON gather, their electricity could build and cause lightning storms.</p>
    <img src="assets/images/pikachu.jpg">
    </div>
    <div>
        <p>ONIX. As it grows, the stone portions of its body harden to become similar to a diamond, but colored black.</p>
    <img src="assets/images/onix.jpg">
    </div>
    <div>
        <p>CHARMANDER. Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.</p>
    <img src="assets/images/charmander.jpg">
    </div>
    <div>
        <p>SQUIRTLE. After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.</p>
    <img src="assets/images/squirtle.jpg">
    </div>
</div>`};

const getSlikaPobednika = () => {
    return ` `};