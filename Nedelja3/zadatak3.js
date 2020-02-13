function deljiviSa5(niz){
    for (let element of niz) {
        if (element % 5 == 0){
            console.log(element)
        }
    }
}
deljiviSa5([13, 15, 43, 7, 5, 60, 32, 25, 17, 71, 100])



// function divisibleByFive(niz) {
//     for(let i = 0; i < niz.length; i++) {
//         let element = niz[i]
//     if (element % 5 == 0){
//         console.log(element)
//            }
//        }
//    }
//    divisibleByFive([13, 15, 43, 7, 5, 60, 32, 25, 17, 71, 100])