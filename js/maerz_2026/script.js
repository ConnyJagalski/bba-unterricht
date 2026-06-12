import { aufgabe} from './randomHashLength.js';

const input = document.getElementById("input");
const send = document.getElementById("send");
const output = document.getElementById("output");
const form = document.getElementById("form");
const headingBig = document.getElementById("groß");
const headingSmall = document.getElementById("klein");

headingBig.innerText = "Deine Eingabe:";
headingSmall.innerText = "";

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    output.innerText = aufgabe(input.value);

    input.value = "";
})