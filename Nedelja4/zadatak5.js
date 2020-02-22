pokemon1 = {
    ime: 'Pikachu',
    vrsta: 'elektricni',
    sposobnosti: ['staticki elektricitet', 'strujni udar'],
    karakteristike: { napad: 55, odbrana: 30, brzina: 90 },
    fotografija: 'pikachu.jpg',
}
pokemon2 = {
    ime: 'Charmander',
    vrsta: 'vatreni',
    sposobnosti: ['vatrene kugle'],
    karakteristike: { napad: 40, odbrana: 40, brzina: 65 },
    fotografija: 'charmander.jpg',
}
pokemon3 = {
    ime: 'Squirtle',
    vrsta: 'vodeni',
    sposobnosti: ['vodeni snop'],
    karakteristike: { napad: 45, odbrana: 20, brzina: 80 },
    fotografija: 'squirtle.jpg',
}
pokemon4 = {
    ime: 'Butterfree',
    vrsta: 'leteci',
    sposobnosti: ['vazdusna oluja'],
    karakteristike: { napad: 60, odbrana: 15, brzina: 60 },
    fotografija: 'butterfree.jpg',
}
pokemon5 = {
    ime: 'Onix',
    vrsta: 'zemljani',
    sposobnosti: ['kameni cekic', 'kameni zid'],
    karakteristike: { napad: 30, odbrana: 90, brzina: 30 },
    fotografija: 'onix.jpg',
}
let pokemoni = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5];


const wrapper = document.querySelector('.wrapper');
const prikaz = document.querySelector('#prikaz');
const pobednik = document.querySelector('#pobednik');
const app = document.querySelector('#app');

function prikaziPokemone(sviPokemoni){
    let imena='';
    for(let i = 0; i < sviPokemoni.length; i++){
        imena += `<div><ul><li> Ime: ${sviPokemoni[i].ime}
        <li>Vrsta: ${sviPokemoni[i].vrsta}
    <li>Sposobnosti: ${sviPokemoni[i].sposobnosti}</li></ul>
<img src=' ${sviPokemoni[i].fotografija}'>
     </div>`
    } return(imena);
} prikaziPokemone(pokemoni);

prikaz.addEventListener('click',(e) =>{
    app.innerHTML=prikaziPokemone(pokemoni)
})

function najjaciPokemon(pokemoni) {
    let maxPos = 0;
    let pokemonNaj = '';
    let max = pokemoni[maxPos];
    for (const pokemon of pokemoni) {
        if (max.karakteristike.napad < pokemon.karakteristike.napad)
            max = pokemon;
            pokemonNaj=`<div><ul><li> Ime: ${max.ime}
            <li>Vrsta: ${max.vrsta}
        <li>Sposobnosti: ${max.sposobnosti}</li></ul>
    <img src=' ${max.fotografija}'>
         </div>`
    }
    return pokemonNaj
}
pobednik.addEventListener('click',(e) =>{
    app.innerHTML=najjaciPokemon(pokemoni)
})