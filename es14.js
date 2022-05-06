/*
ES - 14

Metti un po' d'ordine
Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.
  Esempio:
    Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
    Output: [8, 7, 6, 5, 5, 3, 2, 1, -2, -4]
  Variante:
  Prova ad ordinali in modo crescente.
*/

let array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];

let i=0, temp;

while(i<array.length){
  for(let index=0;index<array.length-i;index++)
    if(array[index]>array[index+1]){
      temp = array[index];
      array[index]=array[index+1];
      array[index+1]=temp;
    }
  i++;
}

console.log("CON WHILE E FOR:")

console.log(`Ordine decrescente: ${array}`);

i=0;

while(i<array.length){
  for(let index=0;index<array.length-i;index++)
    if(array[index]<array[index+1]){
      temp = array[index];
      array[index]=array[index+1];
      array[index+1]=temp;
    }
  i++;
}


console.log(`Ordine crescente: ${array}`);


console.log("CON METODO SORT:")

array.sort((number1,number2)=> number1 - number2)
console.log(`Ordine decrescente: ${array}`);

array.sort((number1,number2)=> number2 - number1)
console.log(`Ordine crescente: ${array}`);


