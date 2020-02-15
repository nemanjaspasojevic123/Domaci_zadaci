let pCount = document.querySelector('#count');
let count = 0;
let btnOrder = document.querySelector('#order');
let btnOrder2 = document.querySelector('#order2');
let btnOrder3 = document.querySelector('#order3');
let btnOrder4 = document.querySelector('#order4');

btnOrder.addEventListener('click',(e) => {
    count++;
    pCount.innerHTML = count;
})
btnOrder2.addEventListener('click',(e) => {
    count++;
    pCount.innerHTML = count;
})
btnOrder3.addEventListener('click',(e) => {
    if(count == 0){
        alert(`Greska! Izaberite kolicinu klikom na dugme Order. Hvala.`)
    }else{
    alert(`Narucili ste ${count} pizze/a ` + time() +` u ` + getNowTimeInFormat() + ` casova. Prijatno.`)
    }
    count = 0;
    pCount.innerHTML = count;
})
btnOrder4.addEventListener('click',(e) => {
    if(count == 0){
        alert(`Greska! Izaberite kolicinu klikom na dugme Order. Hvala.`)
    }else{
    alert(`Narucili ste ${count} pizze/a ` + time() +` u ` + getNowTimeInFormat() + ` casova. Prijatno.`)
    }
    count = 0;
    pCount.innerHTML = count;  
})

function time(){
    let time = new Date();
    return `${time.getDate()}/${time.getMonth()+1}/${time.getFullYear()}`
}
app.innerHTML += `<h3>${time()}</h3>`;

function getNowTimeInFormat(){
    let vreme = new Date();
    return `${vreme.getHours()}:${vreme.getMinutes()}:${vreme.getSeconds()}`
}
app.innerHTML += `<h3>${getNowTimeInFormat()}</h3>`;

