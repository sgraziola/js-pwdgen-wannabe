/* Istruzioni */

//Chiedi all’utente il suo nome,
//poi chiedi il suo cognome,
//poi chiedi il suo colore preferito
//Infine scrivi sulla pagina nomecognomecolorepreferito22

const userName = prompt("Come ti chiami?")
//console.log(userName);
const userSurname = prompt("Qual'è il tuo cognome?")
//console.log(userSurname);
const userColor = prompt("Qual'è il tuo colore preferito?")
const currentYear = 2022
document.getElementById("unsecured_pwd").innerHTML = (`La tua password supersegretissima è ${userName}${userSurname}${userColor}${currentYear}`)