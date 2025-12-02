// Laboratorio N° Ejercicio 10
// Autor: ANDREA CAMARGO
// Colaboró: 
// Tiempo: 5 minutos

document.addEventListener('DOMContentLoaded', obtenerYMostrarPokemon);
const contenedor = document.getElementById('pokemon-container');
const loadingMessage = document.getElementById('loading');
async function obtenerPokemonPorId(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) {
            throw new Error(`Error al obtener Pokémon con ID ${id}`);
        }
        const datos = await respuesta.json();
        
        return {
            id: datos.id,
            nombre: datos.name,
            imagen: datos.sprites.front_default 
        };
    } catch (error) {
        console.error(error);
        return null;
    }
}
async function obtenerYMostrarPokemon() {
    const promises = [];
    for (let i = 1; i <= 10; i++) {
        promises.push(obtenerPokemonPorId(i));
    }
    const resultados = await Promise.all(promises);
    loadingMessage.style.display = 'none';
    let htmlTotal = '';
    resultados.forEach(pokemon => {
        if (pokemon) {
            htmlTotal += crearTarjetaPokemon(pokemon);
        }
    });
    contenedor.innerHTML = htmlTotal;
}
function crearTarjetaPokemon(pokemon) {
    return `
        <div class="pokemon-card">
            <img src="${pokemon.imagen}" alt="${pokemon.nombre}">
            <h2>${pokemon.nombre}</h2> <p>#${pokemon.id}</p>
        </div>
    `; }