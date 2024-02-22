function buscarPokemon() {
    const pokemonName = document.getElementById('name').value

    if (pokemonName == "") {
        alert("Ingrese un nombre por favor");
    } else {
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`;
        console.log(pokemonName)
        axios.get(apiUrl)
            .then(function (response) {
                const pokemon = response.data;
                console.log(pokemon)
                const resultado = document.getElementById('poke-info');

                resultado.innerHTML = `
                <h2>${pokemon.name}</h2>
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}"/>
                <p>Height: ${pokemon.height} decimeters</p>
                <p>Weight: ${pokemon.weight} hectograms</p>`
            })
            .catch(function (error) {
                console.error("Error al buscar el Pokemon:", error);
                alert("No se encontro el Pokemon");
            })
    }
}