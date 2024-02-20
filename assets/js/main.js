//- Chiedere chilometri che il passeggiero dovrà percorrere
// const kmToTravel =  (Number("Quanti chilometri deve percorrere?"));//.getElementById('km')
let kmToTravel = Number(document.getElementById('km'));
kmToTravel.addEventListner('click')

console.log(kmToTravel);
//Sto cancellando PROMPT per cercare di inserirlo attraverso l'html

//- Chiedere età del passeggiero
// const ageCostumer = Number ("Inserisca la sua età");
let ageCostumer = Number(document.getElementById('km'));
console.log(ageCostumer);


console.log("Età: " + ageCostumer,", chilometri da percorrere: " + kmToTravel);
console.log(typeof ageCostumer, typeof kmToTravel);



//<!-- - avere una variabile con il prezzo (€0.21/km) -->
//- SE il passeggiero ha 17 anni o meno applicare lo sconto del 20%
// let ticketPrice; NON SERVE CREDO

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
//- Far visualizzare l'output desiderato con massimo due cifre decimali e il simbolo €
// document.writeln, creare una sola variabile per accorpare il prezzo?