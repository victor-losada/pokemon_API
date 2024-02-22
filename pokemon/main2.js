function buscarPokemon(){
    const nombrePokemon = prompt("Ingresa el nombre del pokemon: ");
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon.toLowerCase()}`;

    axios.get(apiUrl)
        .then(function (response){
            const pokemon = response.data;
            const resultado = document.getElementById('resultado');

            resultado.innerHTML =  `
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