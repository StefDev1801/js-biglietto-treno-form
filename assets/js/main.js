//- Chiedere chilometri che il passeggiero dovrà percorrere
// const kmToTravel =  (Number("Quanti chilometri deve percorrere?"));//.getElementById('km')
// Voglio che kmToTravel mi dia il valore che scrivo quando scrivo dentro al mio input id="km"
let elementKmToTravel = document.getElementById('km');//html input dei km
let elementAgeCostumer = document.getElementById('age');//html input dell età
console.log(elementKmToTravel);
console.log(elementAgeCostumer);

//<!-- - avere una variabile con il prezzo (€0.21/km) -->
//- SE il passeggiero ha 17 anni o meno applicare lo sconto del 20%

const element = document.getElementById('btn');
console.log(element);
element.addEventListener('click', function() {
     let kmToTravel = elementKmToTravel.value;
     console.info(kmToTravel);


     let ageCostumer = elementAgeCostumer.value;
     console.info(ageCostumer);

     let ticketPrice;
     if (elementAgeCostumer < 18) {                         
          ticketPrice = (((elementKmToTravel*0.21)/100*80).toFixed(2));
          console.log("Lei dovrà pagare €" + ticketPrice);
     }
     //    - OPPURE SE il passeggiero ha più o uguale a 65 anni applicare lo sconto del 40%
     else if(elementAgeCostumer >= 65){                    
          ticketPrice = (((elementKmToTravel*0.21)/100*60).toFixed(2));
          console.log("Lei dovrà pagare €" + ticketPrice);
     }
     //        - OPPURE far pagare prezzo pieno
     else{                                          
          ticketPrice = ((elementKmToTravel*0.21).toFixed(2));
          console.log("Lei dovrà pagare €" + ticketPrice);
     }

});
//numero carrozza

//I want cancel to delete js 
/*
let cancel = document.getElementById('cancel')
cancel.addEventListener('click', function () {
     Set.clear() //This is a method not a function
})
*/

//I want to show random nubers from 1 to 9
console.log(Math.floor(Math.random() * 10));
let carrozza  = Math.floor(Math.random() * 10);
document.querySelector('#train_carriage').innerHTML= carrozza;


//I want to show random 4 digits numbers
console.log(Math.floor(Math.random() * 10000) + 1000);
let codice = Math.floor(Math.random() * 10000) + 1000;
document.querySelector('#codiceCP').innerHTML=  codice;




//- Far visualizzare l'output desiderato con massimo due cifre decimali e il simbolo €
// document.writeln, creare una sola variabile per accorpare il prezzo?