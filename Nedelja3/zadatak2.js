function pizza(poluprecnik, cena){
    povrsina = Math.PI * Math.pow(poluprecnik, 2)
    cenaPoCm = cena / povrsina;   
}
 pizza(25, 850);
 console.log(cenaPoCm)
