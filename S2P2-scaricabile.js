// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.

ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const vanessa = {
  name: "Vanessa",
  lastName: "Pisati",
  isAmbassador: false,
}

const nicola = {
  name: "Nicola",
  lastName: "Ferrari",
  isAmbassador: true,
}

const giulia = {
  name: "Giulia",
  lastName: "Bianchi",
  isAmbassador: true,
}

const prices = [50, 50]
const shippingCost = 50

let utenteCheEffettuaLAcquisto = vanessa //cambia il valore qui per provare se il tuo algoritmo funziona!

//CREAZIONE DEGLI ARRAY

let utenti = [marco, paul, amy]
utenti.push(vanessa, nicola, giulia)
console.log(utenti);

let ambassador = []
console.log(ambassador)

for (let i=0; i<utenti.length; i++) {
  if (utenti[i].isAmbassador == true){
    console.log(utenti[i].name.valueOf() + " " + utenti[i].lastName.valueOf() + " è Ambassador")
    ambassador.push(utenti[i]);
  } else {
    console.log(utenti[i].name.valueOf() + " " + utenti[i].lastName.valueOf() + " non è Ambassador")
  };
}

//ALGORITMO CARRELLO

let carrello = 0;
for (i=0; i<prices.length; i++) {
  carrello += prices[i];
}

//let carrelloAmbassador = carrello - ((carrello*30)/100);
// qui avevo provato la strada di creare una variabile esterna che calcolasse il carrello degli ambassador per assegnarla successivamente nel controllo IF

console.log(carrello)
//console.log(carrelloAmbassador) 

for (i=0; i<utenti.length; i++) {
  if (utenti[i].isAmbassador == true) {
    carrello = 15; // il problema è qui. Se utilizzo numeri assegnati (esempio: 15 e 5) mi tiene la differenza dei due carrelli, ma se uso il calcolo per estrarre il 70% (o assegno la variabile carrelloAmbassador nell'altra prova che ho fatto) mi prende questo valore anche nell'else
    console.log(utenti[i].name.valueOf() + " " + carrello + " ciao") // questo console.log l'avevo fatto per verificare che effettivamente mi estraesse i 3 utenti con valore "isAmbassador" e funziona, quindi li estrae dall'Array.
  } else {
    carrello = 5;
    console.log(utenti[i].name.valueOf() + " " + carrello)
  } 
}

/*let spedizione = 0;
if (carrello<100) {
  spedizione = 50;
} 

let totale = carrello + spedizione

for(i=0; i<utenti.length; i++) {
console.log(utenti[i].name.valueOf() + " il prezzo che devi pagare è di: " + totale)
}*/


