// Palidroma
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.

// creare una costante per chiedere all'utente una parola
// dobbiamo verificare che la parola sia polindroma.
//...prendo ogni singolo carattere partendo dalla fine e lo inserisco in una variabile. 
//verifico se questa parola inversa sia uguale alla parola inserita.

const wordUser = prompt(`Inserisci una parola`); //chiedo all'utente una parola
console.log(wordUser);


let invertWord = wordToReverse(wordUser);

if (wordUser == invertWord){
  console.log(`${wordUser} - sei una parola polindroma!`)
} else {
  console.log(`${wordUser} - non sei una parola polindroma!`)
};


// *****FUNZIONE*****
//funzione dove vado a prendere ogni singolo carattere e lo inserisco in una variabile chiamata "invertWord"
function wordToReverse(insertWord) {
  let invertWord = ``;
  let index = insertWord.length - 1;
  while (index >= 0) {
    invertWord += insertWord[index];
    index--; //condizione di uscita
  };
  console.log(invertWord)
};