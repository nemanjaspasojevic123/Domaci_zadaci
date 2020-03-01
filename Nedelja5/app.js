let dropdown = document.querySelector('#dropdown')
let opisPolje = document.querySelector('#opis');
let iznosPolje = document.querySelector('#iznos');
const dugme = document.querySelector('#dugme');
let items1 = document.querySelector('#items1');
let items2 = document.querySelector('#items2');
let vrednostBudzet = document.querySelector('#vrednost-budzet');
let paragrafUkupanPrihod = document.querySelector('#ukupanPrihod');
let paragrafUkupanRashod = document.querySelector('#ukupanRashod');
let stanjeUkupno = document.querySelector('#stanje');

let podaci = [];
let counter = 0;
let ukupanPrihod = 0;
let ukupanRashod = 0;
let stanje = 0;

const dodajUnos = (vrsta, opis, iznos) =>{
    let podatak = {
        id: counter,
        vrsta: vrsta,
        opis: opis,
        iznos: iznos
    }
    podaci.push(podatak);
    counter++;
    if (vrsta == 'prihod'){
        ukupanPrihod += iznos;
    }else if (vrsta == 'rashod'){
        ukupanRashod += iznos;
    }
    stanje = ukupanPrihod - ukupanRashod;
}
const ukloniUnos = (podatak) => {
    let i = podaci.findIndex((el)=>{
        return el.id == podatak.id;
    })
    podaci.splice(i, 1);
    if(podatak.vrsta == 'prihod'){
        ukupanPrihod -= podatak.iznos;
        stanje = ukupanPrihod - ukupanRashod;
    }else if(podatak.vrsta == 'rashod'){
        ukupanRashod -= podatak.iznos;
        stanje = ukupanPrihod - ukupanRashod;
    }
}
let vrsta = 'prihod';
dropdown.addEventListener('change', () => {
    vrsta = dropdown.value;
})
let opis = '';
opisPolje.addEventListener('input',(e) => {
    opis = e.target.value;
})
let iznos;
iznosPolje.addEventListener('input', (e) => {
    iznos = parseInt(e.target.value);
})


dugme.addEventListener('click', dodajDogadjaj);

function dodajDogadjaj()  {
    if(opisPolje.value.trim() == ''){
       opisPolje.value = ''
       alert ('Opis polje ne moze biti prazano')
       return
    }
    if(iznosPolje.value.trim() <= 0){
        iznosPolje.value = ''
        alert ('Iznos polje ne moze biti 0 ili negativno')
        return
    }
    dodajUnos(vrsta, opis, iznos);
    stanjeUkupno.innerHTML = stanje;

    let noviOpis = document.querySelector('#opis').value;
    let noviIznos = document.querySelector('#iznos').value;
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(noviOpis +' '));
    li.appendChild(document.createTextNode(noviIznos +' '));
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    if(document.querySelector('#dropdown').value == 'prihod'){
    items1.appendChild(li);
    paragrafUkupanPrihod.innerHTML = ('+' + ukupanPrihod);
    }else if(document.querySelector('#dropdown').value == 'rashod'){
    items2.appendChild(li)
    paragrafUkupanRashod.innerHTML = ('-' + ukupanRashod)+ ' (' + Math.round(ukupanRashod/ukupanPrihod*100) + '%)';
    }
}

items1.addEventListener('click', removeItems1);
function removeItems1(e){
    e.target.classList.contains('delete');
    const li = e.target.parentElement;
    items1.removeChild(li)
}
items2.addEventListener('click', removeItems2);
function removeItems2(e){
    e.target.classList.contains('delete');
    const li = e.target.parentElement;
    items2.removeChild(li)
}

