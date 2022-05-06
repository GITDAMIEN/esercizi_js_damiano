/*

Funzioni 

ES - 10

Scrivi una funzione di uguaglianza che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI,
  FALSE altrimenti.
  Esempi:
    Input: n = 2, m = 3
    Output: FALSE
    Input: n = 2, m = '2'
    Output: FALSE
    Input: n = 2, m = 2
    Output: TRUE
*/

console.log("Eserzizio 10:");

let el1 = 3, el2 = '3';

function uguaglianza(el1,el2){
  if(el1 === el2)
    return true;
  else
    return false;
}

console.log(uguaglianza(el1,el2));
