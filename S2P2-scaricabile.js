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


const prices = [50, 50]
const shippingCost = 50

//let utenteCheEffettuaLAcquisto = amy //cambia il valore qui per provare se il tuo algoritmo funziona!

//CREAZIONE DEGLI ARRAY

let users = [marco, paul, amy]

users.push({name: "Vanessa", lastName: "Pisati", isAmbassador: false});
users.push({name: "Nicola", lastName: "Bianchi", isAmbassador: true});
users.push({name: "Giulia", lastName: "Verdi", isAmbassador: true});

console.log(users);

let ambassador = []
console.log(ambassador)

for (let i=0; i<users.length; i++) {
  if (users[i].isAmbassador == true){
    console.log(users[i].name.valueOf() + " " + users[i].lastName.valueOf() + " è Ambassador")
    ambassador.push(users[i]);
  } else {
    console.log(users[i].name.valueOf() + " " + users[i].lastName.valueOf() + " non è Ambassador")
  };
}

//ALGORITMO CARRELLO

let listPrice = 0;
for (i=0; i<prices.length; i++) {
  listPrice += prices[i];
}

const actualUser = users[1];

function calculateCart(listPrice, users, shippingCost) {
  if (users.isAmbassador==true){
    listPrice = listPrice*0.7;
  }

  if(listPrice>100){
    shippingCost = 0;
  }

  return listPrice + shippingCost
};

for (i=0; i<users.length; i++) {
  console.log(users.isAmbassador)
}

const total = calculateCart(listPrice, actualUser, shippingCost);
console.log("Il totale da pagare è di: " + total + "€");


/*let carrello = 0;
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


