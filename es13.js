/*
ES - 13

  Scrivi due funzioni una che prenda in input un array di numeri e restituisca il maggiore,
  l'altra che restituisca il minore.
  Esempio:
  Input: a = 1, b = -10, c = 4
  Output: minore = -10, maggiore = 4
*/

let array = [1,31,54,2,-8,61,3,5];

function maggiore(array){
  let max = array[0];

  for(let i=1;i<array.length; i++)
    if(array[i]>max)
      max=array[i];

  return max;
}

function minore(array){
  let min = array[0];

  for(let i=1;i<array.length; i++)
    if(array[i]<min)
      min=array[i];

  return min;
}

console.log(`Minore: ${minore(array)}`);
console.log(`Maggiore: ${maggiore(array)}`);

