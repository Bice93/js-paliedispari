// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//chiedo all'utente se sceglie pari o dispari
const betUser = prompt (`Scegli tra pari o dispari`);
console.log(betUser);

//chiedo all'utente un numero da 1 a 5
let numberUser = Number(prompt(`Scegli un numero da 1 a 5`));
console.log(numberUser)


let numberIa = randomNumber (); //richiamo la funzione random per il pc
console.log(numberIa);
 
let sum = numberUser += numberIa; //sommo i due numeri inseriti
console.log(sum)

let check = evenNumbers(sum); //richiamo la funzione per stabilire se il numero è pari o dispari
//console.log(check);

let betUserEven = `pari`;
let betUserOdd = `dispari`;

if ((betUser == betUserEven) && (check == true)){
    console.log(`Hai vinto`)
} else if ((betUser == betUserOdd) && (check == false)){
    console.log(`Hai vinto`)
} else {
    console.log(`Hai perso!`)
}

// ********FUNZIONI*******
//funzione numero random
function randomNumber (){
   return Math.floor((Math.random()*5) + 1);
};

//funzione numeri pari e dispari
function evenNumbers (number){
    if (number % 2 === 0){
        console.log(`Il numero è pari`)
        return true;
    } else {
        console.log(`Il numero è dispari`)
        return false;
    }
};
