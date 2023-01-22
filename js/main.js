
// Chiedi il nome
let firstname = prompt("come ti chiami?");

// chiedi il cognome
let lastname = prompt("qual'è il tuo cognome?")


// Chiedi qual'è il suo colore preferito
let favourite_color = prompt("qual'è il tuo colore preferito?")

let number = "23";

const main_msg = `${firstname} ${lastname} ${favourite_color} ${number}`;
// // // console.log(main_msg);

document.getElementById('main_msg').innerHTML = main_msg;