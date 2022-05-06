/*
Cicli
ES - 7

 Scrivi un programma che, dato il numero dei tiri da effettuare per ciascun giocatore (N),
  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizzato più punti,
  supponendo che ogni dado abbia al massimo 6 facce, ogni giocatore tirerà il dado N volte, ciò  significa che verrà generato un numero casuale ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore
  

// Suggerimento 
// Usiamo questa formula per generare un numero random

    Math.floor(Math.random() * (max - min + 1) + min);
*/

console.log("Eserzizio 7:");


let player1 = 0, player2 = 0, tiri;

let maxN = 6, minN =1;

tiri = prompt("Quanti tiri volete fare?");

for(let tiriDaFare=tiri; tiriDaFare > 0; tiriDaFare--)
  player1 += Math.floor(Math.random() * (max - min + 1) + min);

console.log(`Giocatore 1 ha totalizzato ${player1} punti`)

for(let tiriDaFare=tiri; tiriDaFare > 0; tiriDaFare--)
  player2 += Math.floor(Math.random() * (max - min + 1) + min);

console.log(`Giocatore 2 ha totalizzato ${player2} punti`)

if(player1>player2)
  console.log("Giocatore 1 ha vinto");
else
  console.log("Giocatore 2 ha vinto");

