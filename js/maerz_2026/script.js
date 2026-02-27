import { aufgabe} from './primzahl.js';

const input = document.getElementById("input");
const send = document.getElementById("send");
const output = document.getElementById("output");
const form = document.getElementById("form");
const headingBig = document.getElementById("groß");
const headingSmall = document.getElementById("klein");

headingBig.innerText = "Gib eine Zahl ein.";
headingSmall.innerText = "";

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    output.innerText = aufgabe(input.value);

    input.value = "";
})