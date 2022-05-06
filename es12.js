/*
ES 12 

  Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
  Nel controllo scarta gli spazi e i segni di punteggiatura.

  Esempio:
    Input: i topi non avevano nipoti
    Output: TRUE


  Consigli:
  Puoi eliminare spazi e segni di punteggiatura usando :
  

     str.replace(/\W/g, "").
*/

let stringa = "parli il rap";

console.log(`stringa: ${stringa}`);

function palindromo(stringa){
  stringa = stringa.replace(/\W/g, "");
  console.log(`stringa senza spazi: ${stringa}`);

  let array = stringa.split("");

  // console.log(array);

  for(let i= 0; i<Math.floor(array.length/2); i++)
    if(array[i]!=array[array.length-1-i])
      return false;

  return true;
}

console.log(`Esito: ${palindromo(stringa)}.`);



