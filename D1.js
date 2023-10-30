/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*String : Questo tipo di dato è una sequenza di caratteri. E' anche detto alfanumerico. Ad esempio "Andrea". 

Number : Questo tipo di dato è numerico. Può trattarsi di un numero intero (integer) o decimale (floating point).  

Boolean :  E' il tipo di dato booleano. Può assumere solo i valori true (vero) o false (falso).

Date : E' il tipo di dato per memorizzare le date e l'ora.

Null : Questo data type lo rilevo nelle variabili che ho dichiarato ma a cui non ho ancora assegnato un valore.

undefind : Questo data type lo rilevo quando qualcosa non è stato ben definito in una variabile a cui ho assegnato un valore.

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Andrea"
console.log(name);



/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let numero1= 12
let numero2= 20
console.log(numero1 + numero2);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x= 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

 name = "Battaglia"
 /* const name= andrea
    name = Battaglia   non posso cambiare il valore di una variabile constante

  
  

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let numero=4
console.log(x - numero);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1= "jhon"
let name2= "Jhon"
console.log(name1 !== name2 );


