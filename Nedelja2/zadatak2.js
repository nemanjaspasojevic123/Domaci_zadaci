let cena = 400;
let novac = 546;
if (cena > novac){
    console.log('Nemate dovoljno novca.')
    console.log('Stanje ostaje isto.')
}
else if(cena <= novac)
{
    console.log('Uspesno ste kupili proizvod.')
    console.log('Trenutno stanje:', novac - cena)
}