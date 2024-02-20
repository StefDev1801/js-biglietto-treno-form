//- Chiedere chilometri che il passeggiero dovrà percorrere
// const kmToTravel =  (Number("Quanti chilometri deve percorrere?"));//.getElementById('km')

// Voglio che kmToTravel mi dia il valore che scrivo quando scrivo dentro al mio input id="km"
let elementKmToTravel = document.getElementById('km');//html input dei km
let elementAgeCostumer = document.getElementById('age');//html input dell età
console.log(elementKmToTravel);
console.log(elementAgeCostumer);






//<!-- - avere una variabile con il prezzo (€0.21/km) -->
//- SE il passeggiero ha 17 anni o meno applicare lo sconto del 20%
// let ticketPrice; NON SERVE CREDO
const element = document.getElementById('btn');
console.log(element);
element.addEventListener('click', function() {
     let ageCostumer = elementKmToTravel.value;

     console.info(ageCostumer);

});


/*
if (ageCostumer < 18) {                         
     ticketPrice = (((kmToTravel*0.21)/100*80).toFixed(2));
}
//    - OPPURE SE il passeggiero ha più o uguale a 65 anni applicare lo sconto del 40%
else if(ageCostumer >= 65){                    
     ticketPrice = (((kmToTravel*0.21)/100*60).toFixed(2));
}
//        - OPPURE far pagare prezzo pieno
else{                                          
     ticketPrice = ((kmToTravel*0.21).toFixed(2));
}
console.log("Lei dovrà pagare €" + ticketPrice);
*/

//- Far visualizzare l'output desiderato con massimo due cifre decimali e il simbolo €
// document.writeln, creare una sola variabile per accorpare il prezzo?