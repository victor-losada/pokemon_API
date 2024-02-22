const pokemonName = 'charmander';

/*
charmander
ivysaur
charizard
wartortle
caterpie
kakuna
pidgey
pidgeot
raticate
pikachu
*/

const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

fetch(apiUrl)
    .then((response)=>{
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then((data)=>{
        displayPokemonInfo(data);
    })
    .catch((error)=>{
        console.error('Fetch error: ', error);
    });

function displayPokemonInfo(data){
    const pokemonInfo = document.getElementById('poke-info');

    pokemonInfo.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}"/>
        <p>Height: ${data.height} decimeters</p>
        <p>Weight: ${data.weight} hectograms</p>`
}