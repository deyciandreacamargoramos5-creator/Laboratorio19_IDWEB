// Laboratorio N° Ejercicio 11
// Autor: ANDREA CAMARGO
// Colaboró: 
// Tiempo: 5 minutos

const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
async function buscarPokemon() {
    const inputElement = document.getElementById('input-pokemon');
    const resultadoElement = document.getElementById('resultado');
    const nombreOID = inputElement.value.trim().toLowerCase();
    resultadoElement.innerHTML = '<p>Cargando...</p>';
    if (!nombreOID) {
        resultadoElement.innerHTML = '<p class="error">Por favor, escribe un nombre o ID de Pokémon.</p>';
        return;
    }
    const url = `${POKEAPI_BASE_URL}${nombreOID}`;
    try {
        const response = await fetch(url);

        if (!response.ok) {
            if (response.status === 404) {
                resultadoElement.innerHTML = `<p class="error">¡Pokémon "${nombreOID}" no encontrado!</p>`;
            } else {
                throw new Error(`Error en la petición: ${response.status}`);
            }
            return;
        }
        const data = await response.json();
        const nombre = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        const tipos = data.types.map(tipoInfo => tipoInfo.type.name);
        const tiposTexto = tipos.join(', ');
        const imagenUrl = data.sprites.front_default;
        if (imagenUrl) {
            resultadoElement.innerHTML = `
                <img id="pokemon-imagen" src="${imagenUrl}" alt="${nombre}">
                <h2 id="pokemon-nombre">${nombre}</h2>
                <p id="pokemon-tipos">Tipos: <strong>${tiposTexto}</strong></p>
            `;
        } else {
             resultadoElement.innerHTML = `
                <h2 id="pokemon-nombre">${nombre}</h2>
                <p id="pokemon-tipos">Tipos: <strong>${tiposTexto}</strong></p>
                <p>No se encontró imagen para este Pokémon.</p>
            `;
        }
    } catch (error) {
        console.error("Error al obtener datos del Pokémon:", error);
        resultadoElement.innerHTML = `<p class="error">Ocurrió un error: ${error.message}</p>`;
    }
}
document.getElementById('btn-buscar').addEventListener('click', buscarPokemon);
document.getElementById('input-pokemon').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        buscarPokemon();
    }
});