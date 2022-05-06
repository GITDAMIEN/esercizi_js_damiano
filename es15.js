/*
ES - 15 DIFFICILE 


  Operazioni tra array

Scrivi un programma che dati:
  - 2 array di 10 elementi interi casuali compresi tra 1 e 10,
  - il tipo di operazione aritmetica da effettuare, una delle seguenti:
    addizione
    sottrazione
    moltiplicazione
    divisione
   Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array d’appoggio.

  Esempio:
    Input: a= [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b= [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione"
    Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]
*/

let arr1 = [], arr2 = [];
const lunghezza = 10;

let operazione = "divisione";
let risultato = [];


for(let index=0;index<lunghezza;index++){
  arr1.push(Math.floor(Math.random()*(10-1)+1));
  arr2.push(Math.floor(Math.random()*(10-1)+1));
}


console.log(`Operazione: ${operazione}`)
console.log(`Array 1: ${arr1}`);
console.log(`Array 2: ${arr2}`);


//con ciclo for
for(index=0;index<lunghezza;index++){
  if(operazione=='addizione'){
    risultato.push(arr1[index]+arr2[index]);
  }
  if(operazione=='sottrazione'){
    risultato.push(arr1[index]-arr2[index]);
  }
  if(operazione=='moltiplicazione'){
    risultato.push(arr1[index]*arr2[index]);
  }
  if(operazione=='divisione'){
    risultato.push((arr1[index]/arr2[index]).toFixed(2));
  }
}


console.log(`Risultato con ciclo for: ${risultato}`)


//con funzione e switch
function operazioneArray(arr1,arr2,operazione){
  switch(operazione){
    case 'addizione': return arr1.map((el,i) => el+arr2[i]);
                      break;
    case 'sottrazione': return arr1.map((el,i) => el-arr2[i]);
                      break;
    case 'moltiplicazione': return arr1.map((el,i) => el*arr2[i]);
                      break;
    case 'divisione': return arr1.map((el,i) => (el/arr2[i]).toFixed(2));
                      break;
  }

}

let risultato2 = operazioneArray(arr1,arr2,operazione)

console.log(`Risultato con funzione e switch: ${risultato2}`)

