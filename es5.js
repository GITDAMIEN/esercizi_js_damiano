/*
ES - 5

 
  Scrivi un programma che dato un numero intero compreso tra 1 e 7
  visualizzi il corrispondente giorno della settimana. Sapendo che:
    1 = lunedì
    2 = martedì
    3 = mercoledì
    ...
    7 = domenica
  Esempi:
    Input: numero = 6
    Output: "Sabato"
    Input: numero = 10
    Output: “Errore! Giorno della settimana non valido!"
*/

console.log("Eserzizio 5:")

let lunedì = 1, martedì = 2, mercoledì = 3, giovedì = 4, venerdì = 5, sabato = 6, domenica = 7;
let num;

num = prompt("Inserisci numero tra 1 e 7:");

while(num<1||num>7){
  num = prompt("Input errato. Inserisci numero tra 1 e 7:");
}

console.log(`Num: ${num}`);

let dayF;

switch (num){
    case "1": dayF = "Lunedì";
            break;
    case "2": dayF = "Martedì";
            break;
    case "3": dayF = "Mercoledì";
            break;
    case "4": dayF = "Giovedì";
            break;
    case "5": dayF = "Venerdì";
            break;
    case "6": dayF = "Sabato";
            break;
    case "7": dayF = "Domenica";
            break;
}

console.log(`${num} corrisponde a ${dayF}`);

