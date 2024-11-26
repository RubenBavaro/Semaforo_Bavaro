
/*
    Come accedere ad un elemento in Javascript
    Accedo ad un elemento in JS tramite il metodo querySelector
    che fa parte dell'oggetto document
    --> document.querySelector()
    querySelector è un metodo (funzione) dell'oggetto document
    a cui voglio accedere come stringa
    -restetuisce l'elemento del DOM "matchato" dal selettore
    --> possiamo asssegnare una variabile
    --> querySelector mi restituisce un oggetto di tipo Element
    (un elemento HTML); nel caso degli elementi <input>
    posso accedere agli attributi del campo utilizzando il punto
    es. -->
    let userField = document.querySelector("#guess")
    console.log(userField.value) --> logga in console il cont

Per gestire l'evento che poi andrà ad avviare il controlli sui numeri
inseriti dell'utente ha bisogno di 3 cose:
    1 - l'elemento che scatenerà l'evento (il button nel nostro caso)
    2 - il nome dell'evento
    3 - le cose da fare dopo che l'evento è stato scatenato

    1 --> è il button --> uso querySelector per accedere all'elemento
    2 --> l'evento che scatenerà il flusso di gioco è il click
    3 --> sanitize if/else per controllo numero e console.log

    per gestire un evento su un elemento HTML posso usare una funzione
    che si chiama addEventListener

        let btn = document.querySelector("#guessBtn") --> elemento al punto 1
        function handleClick(event){
        console.log(event)
        } --> cose da fare (punto 3)
        btn.addEventListener("click" handleClick)

addEventListener è un metodo (funzione) dell'elemento HTML al punto 1 
    parametri:
        - il nome dell'evento come stringa
        - la funzione da eseguire al verificarsi dell'evento (DEVE avere come oggetto argomento EVENT)

nella funzione handleClick avrò tutti i controlli del gioco:
    - prendo il valore inserito dall'utente
    -sanitize dell'input
    - parseInt dell'input
    if/else con console.log
*/



function generateRandomInteger(min=0, max=100){
    let num = Math.floor(Math.random() * (max - min) + min);
    return num
}

function sanitize(Var){
    let sanificata
    if (!isNaN(Var)){
        sanificata =  parseInt(Var.trim());
    } else {
        sanificata = NaN;
    }
    return sanificata
}

function handleClick(event) {
    let input = document.querySelector("#guess").value;
    numeroInserito = sanitize(input);

    if (isNaN(numeroInserito)) {
        console.log("Inserisci un numero valido");
    } else {
        if (numeroInserito > numEFFETIVO) {
            console.log("Il numero '" + numeroInserito + "' è troppo grande");
            tentativi -= 1;
            contatore += 1;
            console.log("Hai ancora " + tentativi + " tentativi");
        } else if (numeroInserito < numEFFETIVO) {
            console.log("Il numero '" + numeroInserito + "' è troppo piccolo");
            tentativi -= 1;
            contatore += 1;
            console.log("Hai ancora " + tentativi + " tentativi");
        } else if (numeroInserito === numEFFETIVO) {
            console.log("Bravo, hai vinto!");
            indovinato = true;
            document.querySelector("#guess").disabled = true;
            document.querySelector("#guessBtn").disabled = true;
        }
    }
    if (tentativi === 0 && !indovinato) {
        console.log("Mi dispiace, hai perso. Il numero era " + numEFFETIVO);
        document.querySelector("#guess").disabled = true;
        document.querySelector("#guessBtn").disabled = true;
    }

}



//PROGRAMMA PRINCIPALE
console.log("Benvenuto a 'INDOVINA IL NUMERO!'");
let numeroInserito
let tentativi = 5
let contatore = 0
let indovinato = false
let numEFFETIVO = generateRandomInteger()
let userField = document.querySelector("#guess")
let btn = document.querySelector("#guessBtn")
    btn.addEventListener("click", handleClick)



