alert('Benvenuto in password genetator');
let nome, cognome, colore, numero;

// 1 Chiedi all’utente il suo nome,

nome = prompt('inserisci il tuo nome ps:non dimenticare la maiuscola!!');
console.log(nome);
// 2 poi chiedi il suo cognome,

cognome = prompt('inserisci il tuo cognome');
console.log(cognome);

// 3 poi chiedi il suo colore preferito

colore = prompt('inserisci il tuo colore preferito');
console.log(colore);

// 4 e un numero

numero = prompt('inserisci un numero');
numero = parseInt(numero);
console.log(numero);

// 5 Infine scrivi sulla pagina il risultato della concatenazione di: <nome><cognome><colorePreferito><numero>

let concatenazione = nome + '-' + cognome + '-' + colore + '-' + numero; 
document.getElementById('profilo_id').innerHTML =nome + ' ' + cognome;
document.getElementById('pass_id').innerHTML = concatenazione;
console.log(concatenazione + ' fine');

