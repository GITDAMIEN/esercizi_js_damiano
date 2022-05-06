/*
Condizioni
ES - 4

  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.
  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    “La temperatura piu’ calda e’ 31 quella piu’ fredda -6”
*/

console.log("Eserzizio 4:")

let mon = 10, tue = -2, wed = 31, thu = 22, fri = 15, sat = -6, sun = 7;

let max, min;

//versione con array

let temperature = [mon, tue, wed, thu, fri, sat, sun];
let days = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica'];

max = temperature[0];
min = temperature[0]
let index, indexMax = 0, indexMin = 0;

for(index=0;index<7;index++){
    if(temperature[index]>max){
        max=temperature[index];
        indexMax = index;
    }
    if(temperature[index]<min){
        min=temperature[index];
        indexMin = index;
    }
}


console.log(`[versione array] La temperatura piu’ calda e’ ${days[indexMax]} (${max} gradi) quella piu’ fredda ${days[indexMin]} (${min} gradi)`);

