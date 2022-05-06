/*
ES - 3

  Scrivi un programma che dato:
    a) Un numero totale di gatti
    b) Il numero dei gatti presenti in ogni fila
  Restituisca in output:
    - Il  numero di file risultanti
    - indicare il numero di gatti mancanti per completare una nuova fila 
    Gatti: 44, gatti in ogni fila : 6 
“Ci sono 7 file di gatti e ne mancano 2 per una nuova fila”.
*/

console.log("Eserzizio 3:")

let cats = 44, catsPerLine =6;

let lines = Math.floor(cats/catsPerLine);

let missingCats = catsPerLine - (cats%catsPerLine);

if(missingCats==catsPerLine)
    missingCats = 0;

console.log(`Ci sono ${lines} file di gatti e ne mancano ${missingCats} per creare una nuova fila.`)

