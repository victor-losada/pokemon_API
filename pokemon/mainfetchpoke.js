function buscarPokemon() {
    const pokemonName = document.getElementById('name').value

    if (pokemonName == "") {
        alert("Ingrese un nombre por favor");
    } else {
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                displayPokemonInfo(data);
            })
            .catch((error) => {
                console.error('Fetch error: ', error);
                alert("El pokemon no existe");
            });
    }
}

function displayPokemonInfo(data) {
    const pokemonInfo = document.getElementById('poke-info');

    pokemonInfo.innerHTML = `
    <h2>${data.name}</h2>
    <img src="${data.sprites.front_default}" alt="${data.name}"/>
    <p>Height: ${data.height} decimeters</p>
    <p>Weight: ${data.weight} hectograms</p>`
}