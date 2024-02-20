# Instructions

Trenitalia ha bisogno di un programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65 (fortunelli :adulto_anziano:).
L'output del prezzo finale va messo fuori in forma umana (con massimo due cifre decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca - come quelle fatte in classe :occhiolino:

## PseudoCode
- Chiedere chilometri che il passeggiero dovrà percorrere
- Chiedere età del passeggiero
<!-- - avere una variabile con il prezzo (€0.21/km) -->
- SE il passeggiero ha 17 anni o meno
    applicare lo sconto del 20%
- OPPURE SE il passeggiero ha più o uguale a 65 anni
    applicare lo sconto del 40%
- OPPURE 
    far pagare prezzo pieno
- Far visualizzare l'output desiderato con massimo due cifre decimali e il simbolo €

### Tools
- Variabili
- Prompt
- if/else