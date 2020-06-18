import {Pokemon} from './pokemon.js';

let pokemons = [];
let counter = 0;
let currUrl = "https://pokeapi.co/api/v2/pokemon";
let nextUrl = '';
let prevUrl = '';

document.querySelector('#next').addEventListener('click', loadNext);
document.querySelector('#prev').addEventListener('click', loadPrev);

load(currUrl);

function loadNext() {
    currUrl = nextUrl;
    load(currUrl);
}

function loadPrev() {
    currUrl = prevUrl;
    load(currUrl);
}

function load(url) {
    console.log("loading....");
    console.log(currUrl);
    fetch(url)
        .then( (data) => data.json())
        .then( (data) => generateHtml(data))

}

const generateHtml = (data) => {
    counter = 0;
    document.querySelector('#display').innerHTML = '';
    nextUrl = data.next;
    prevUrl = data.previous;
    //console.log(nextUrl);
    while(data.results[counter]) {
        console.log(counter);
        console.log(data.results[counter].name);
        fetch("https://pokeapi.co/api/v2/pokemon/" + data.results[counter].name)
            .then( (pokemon) => pokemon.json())
            .then( (pokemon) => {document.querySelector('#display').innerHTML += 
        `<div class="card">
            <h2>${pokemon.name}</h2>
            <img src='${pokemon.sprites.front_default}'>
            <img src='${pokemon.sprites.back_default}'>
            <section>
                <p>weight: ${pokemon.weight}</p>
                <p>height: ${pokemon.height}</p>
            </section>
        </div>`})

        counter++;
    }
}

const getPoke = (pokemon) => {
    //console.log(pokemon.name); 
    // console.log(pokemon.sprites.front_default); 
    console.log(counter);
    document.querySelector('#display').innerHTML += `<p>${pokemon.name}</p>
    <img src='${pokemon.sprites.front_default}'>`;
}