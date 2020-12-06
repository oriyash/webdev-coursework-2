import {dict} from "./dict.js"
const jokeText = document.querySelector('#jokeText')
const jokeDiv = document.querySelector('#joke')

jokeText.textContent = dict[Math.floor(Math.random()*dict.length)]

    
function makeJoke() {
    jokeText.textContent = dict[Math.floor(Math.random()*dict.length)]
}

jokeDiv.addEventListener("click", makeJoke, false)