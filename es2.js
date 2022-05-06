/*
ES - 2  

  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

Esempio:
“Hai  25 anni e ti mancano 75 anni per compierne 100”
*/

console.log("Eserzizio 2:")


let dob = 1950, year = 2022;

let age = year - dob;

console.log(`Hai ${age} anni.`);

console.log(`Ti mancano ${100-age} anni per arrivare ai 100.`);
