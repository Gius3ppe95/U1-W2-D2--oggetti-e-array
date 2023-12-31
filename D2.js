/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let n1 = 10;
let n2 = 15;

if (n1 < n2) {
  console.log("N2 è il numero più grande è :" + n2);
} else if (n1 > n2) {
  console.log("Il numero più grande è:" + n1);
} else {
  console.log("I numeri sono uguali");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let num1 = 10;
if (num1 !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let a = 20;
if (a % 5 === 0) {
  console.log("divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let num2 = 20;
let num3 = 12;
if (num2 === 8 && num3 === 8) {
  console.log("il valore di entrambi è :" + " " + (num2, num3));
} else if (num2 === 8) {
  console.log("il valore del num3 è:" + " " + num2);
} else if (num3 === 8) {
  console.log("il valore del num4 è:" + " " + num3);
} else if (num2 + num3 === 8 || num2 - num3 === 8 || num3 - num2 === 8) {
  console.log("il valore della loro somma/sottrazione è :" + " " + "8");
} else {
  console.log("valore non verificato");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalShoppingCart = 0;

if (totalShoppingCart > 50) {
  const totalOrder = totalShoppingCart + 10;
  console.log("il totale ada pagare è:", totalOrder);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let totalShoppingCart2 = 60;
totalShoppingCart2 = totalShoppingCart2 * 0.8;

if (totalShoppingCart2 <= 50) {
  const totalOrder = totalShoppingCart2 + 10;
  console.log("totale con sconto Black Friday 20% su ogni prodotto + 10 EURO DI SPEDIZIONE  :" + " " + totalOrder);
} else {
  console.log(
    "totale con sconto Black Friday 20% su ogni prodotto con spedizione gratuita è :" + " " + totalShoppingCart2
  );
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let c = 56;
let d = 67;
let e = 30;
if (c >= d && d >= e) {
  console.log(c, d, e);
} else if (c >= e && e >= d) {
  console.log(c, e, d);
} else if (d >= e && e >= c) {
  console.log(d, e, c);
} else if (d >= c && c >= e) {
  console.log(d, c, e);
} else if (e >= c && c >= d) {
  console.log(e, c, d);
} else if (e >= d && d >= c) {
  console.log(e, c, d);
} else {
  console.log(" i tre valori sono uguali");
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let dynamicValue = 5;
if (typeof dynamicValue === "number") {
  console.log("il valore è un numero");
} else {
  console.log("il valore non è un numero ");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let n3 = 0;
if (n3 % 2 === 0 && n3 !== 0) {
  console.log(" il valore è pari");
} else if (n3 === 0) {
  console.log(" il valore è 0 ");
} else {
  console.log("il valore è dispari ");
}
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
const obj = {
  name: "Giuseppe",
  lastName: "Chiarella",
  age: 28,
  Skills: ["javascript", "CSS", "Html"],
};
obj.city = "Toronto";
console.log(obj);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete obj.lastName;
console.log(obj);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

obj.Skills.pop();
console.log(obj);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
const numbers = [];
numbers.push("1");
numbers.push("2");
numbers.push("3");
numbers.push("4");
numbers.push("5");
numbers.push("6");
numbers.push("7");
numbers.push("8");
numbers.push("9");
numbers.push("10");
console.log(numbers);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

numbers.pop();
console.log(numbers);
numbers.push("100");
console.log(numbers);
