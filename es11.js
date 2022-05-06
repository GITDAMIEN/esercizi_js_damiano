/*
ES - 11

Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.

Esempi:

    Input : 9
    Output :  1 cifra


    Input : 99
    Output :  2 cifre

*/

let numero, risultato;

do{
  numero = prompt("Inserisci un numero (massimo 9999)");
}while(Number(numero)>9999||Number(numero)<-9999);

risultato = cifre(numero);

console.log(`Il numero inserito ha ${risultato} cifre.`);


//metodo veloce, conta lunghezza stringa

console.log(Math.abs(numero.toString()).length);



function cifre(numero){
  let conta=0;
  numero = Math.abs(numero);
  while(numero>0){
    conta++;
    numero = Math.floor(numero/10);
  }

  return conta;

}
