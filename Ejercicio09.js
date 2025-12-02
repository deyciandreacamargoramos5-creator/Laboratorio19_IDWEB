// Laboratorio N° Ejercicio 9
// Autor: ANDREA CAMARGO
// Colaboró: 
// Tiempo: 5 minutos

const pokemonInfoDiv = document.getElementById('pokemon-info');
async function buscarPokemon() {
    const id = document.getElementById('pokemon-id-input').value;
    if (!id || id <= 0) {
        pokemonInfoDiv.innerHTML = '<p>Por favor, ingresa un ID de Pokémon valido.</p>';
        return;
    }
    pokemonInfoDiv.innerHTML = '<p>Cargando datos...</p>'; 
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!respuesta.ok) {
            throw new Error('Pokémon no encontrado. Verifica el ID.');
        }
        const datos = await respuesta.json();
        const nombre = datos.name.toUpperCase();
        const pokemonId = datos.id;
        const peso = datos.weight / 10; 
        const altura = datos.height / 10; 
        const imagenUrl = datos.sprites.front_default; 
        const habilidades = datos.abilities.map(h => h.ability.name);
        let htmlHabilidades = '<ul>';
        habilidades.forEach(h => {
            htmlHabilidades += `<li id="habilidades-list">${h}</li>`;
        });
        htmlHabilidades += '</ul>';
        pokemonInfoDiv.innerHTML = `
            <h2>${nombre} (#${pokemonId})</h2>
            <img src="${imagenUrl}" alt="${nombre}" width="150">
            <p>
                <strong>ID:</strong> ${pokemonId}<br>
                <strong>Peso:</strong> ${peso} kg<br>
                <strong>Altura:</strong> ${altura} m
            </p>
            <h3>Habilidades:</h3>
            ${htmlHabilidades}
        `;
    } catch (error) {
        pokemonInfoDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
}