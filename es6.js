/*
ES - 6

  Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
    v < 18: insufficiente
    18 <= v < 21: sufficiente
    21 <= v < 24: buono
    24 <= v < 27: distinto
    27 <= v <= 29: ottimo
    v = 30: eccellente
  Esempio:if
    Input: v = 29
    Output: Ottimo
*/

console.log("Eserzizio 6:");

let voto = prompt("Inserisci voto:");
while(voto<1||voto>30){
  voto = prompt("Inserisci voto valido:");
}

if(voto<18)
  console.log("Insufficiente");

if(voto>=18&&voto<21)
  console.log("Sufficiente");

if(voto>=21&&voto<24)
  console.log("Buono");
  
if(voto>=24&&voto<27)
  console.log("Distinto");

if(voto>=27&&voto<=29)
  console.log("Ottimo");

if(voto==30)
  console.log("Eccellente");

