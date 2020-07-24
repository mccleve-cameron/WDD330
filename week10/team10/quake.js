
let baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=';

document.getElementById('search').addEventListener('click', search);

function search() {
    let month = document.getElementById('month').value;
    let day = document.getElementById('day').value;
    let year = document.getElementById('year').value;
    
    let nDay = Number(day);
    nDay = nDay + 1;
    
    let start = (year + '-' + month + '-' + day);
    let end = (year + '-' + month + '-' + nDay);

    console.log(nDay);
    
    fetch(baseUrl + start + '&endtime=' + end)
     .then((data) => data.json())
     .then( (data) => generateHtml(data))

}

const today = new Date();
const now = new Date(1546386417685);
const style = {weekday:'long', month:'short', day:'numeric'};

//document.querySelector('h1').innerHTML = today.toLocaleDateString("en-US", style);
//document.querySelector('h1').innerHTML = now.toLocaleDateString("en-US", style);
console.log(now.toLocaleDateString("en-US", style));

let counter = 0;
const generateHtml = (data) => {
    console.log('genhtml');

    document.querySelector('#quakeList').innerHTML += '';
    while(data.features[counter]) {
        let time = data.features[counter].properties.time;
        let mag = data.features[counter].properties.mag;
        let place = data.features[counter].properties.place;
        let coord = data.features[counter].geometry.coordinates;
        let date = new Date(time);
        let sDate = date.toLocaleDateString("en-US", style)
        
        document.querySelector('#quakeList').innerHTML += 
        `<div class="card">
        <p>Location: ${place}</p>
        <p>Magnitude: ${mag}</p>
        <p>Coordinates: ${coord}</p>
        </div>`
        
        counter++;
    }
}
    


// const generateHtml = (data) => {
//     counter = 0;
//     document.querySelector('#display').innerHTML = '';
//     nextUrl = data.next;
//     prevUrl = data.previous;
//     //console.log(nextUrl);
//     while(data.results[counter]) {
//         console.log(counter);
//         console.log(data.results[counter].name);
//         fetch("https://pokeapi.co/api/v2/pokemon/" + data.results[counter].name)
//             .then( (pokemon) => pokemon.json())
//             .then( (pokemon) => {document.querySelector('#display').innerHTML += 
//         `<div class="card">
//             <h2>${pokemon.name}</h2>
//             <img src='${pokemon.sprites.front_default}'>
//             <img src='${pokemon.sprites.back_default}'>
//             <section>
//                 <p>weight: ${pokemon.weight}</p>
//                 <p>height: ${pokemon.height}</p>
//             </section>
//         </div>`})

//         counter++;
//     }
// }