//Emile Mol
//Applicatie en Media Ontwikkelaar

const VRAAG = 'U moet deze drie vragen beantwoorden' //De vraag

alert(VRAAG) //Toont pop-up
let voornaam = prompt('Wat is je voornaam?', 'Voornaam...') //Voornaam vraag
let achternaam = prompt('Wat is je achternaam?', 'Achternaam...') //Achternaam vraag
let leeftijd = prompt('Wat is je leeftijd', 'Leeftijd...') //Leeftijd vraag

let antwoord = document.write(voornaam + " " + achternaam + " " + leeftijd) //Laat alles zien in een regel