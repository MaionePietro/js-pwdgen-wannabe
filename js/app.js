alert('Benvenuto in password genetator');
let nome, cognome, colore, numero;

// 1 Chiedi all’utente il suo nome,

nome = prompt('inserisci il tuo nome');
console.log(nome);

// 2 poi chiedi il suo cognome,

cognome = prompt('inserisci il tuo cognome');
console.log(cognome);

// 3 poi chiedi il suo colore preferito

colore = prompt('inserisci il tuo colore preferito');
console.log(colore);

// 4 e un numero

numero = prompt('inserisci un numero');
console.log(numero);

// 5 Infine scrivi sulla pagina il risultato della concatenazione di: <nome><cognome><colorePreferito><numero></numero>

let concatenazione = nome + '-' + cognome + '-' + colore + '-' + numero; 
console.log(console.log);
document.getElementById('titolo_id').innerHTML =concatenazione;

