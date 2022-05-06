/*
ES - 16

  Scrivi un programma che dato un array di numeri, calcoli la media dei valori e
  restituisca in output la media e tutti i valori minori della media.
  
  Esempio:
    Input: a = [3, 5, 10, 2, 8]
    Output: media = 5.6, valori minori = [3, 5, 2]
    
  Variante:
  Stampa anche quanti sono i valori minori della media e quanti quelli maggiori. 
*/

let a = [3, 5, 10, 2, 8];

let m;

m= media(a);
magg = [];
min = [];

console.log(m);

minori(a,m);
maggiori(a,m);

console.log(`Elementi minori di ${m}: ${min}`);
console.log(`Elementi maggiori di ${m}: ${magg}`);


function minori(a, m){
  a.forEach((element)=> {
    if(element<m)
      min.push(element);
  });
}

function maggiori(a, m){
  a.forEach((element)=> {
    if(element>m)
      magg.push(element);
  });
}

function media(a){
  let somma=0, m=0;
  a.forEach(element => {
    somma+=element;
  });
  m=somma/a.length;

  return m;
}
