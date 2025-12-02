// Laboratorio N° 19 Ejercicio_ 14
// Autor: ANDREA CAMARGO 
// Colaboro: 
// Tiempo: 5 minutos

const TOTAL_POKEMON = 12;
const POKEMON_PER_PAGE = 3;
let allPokemonData = [];
let currentPageIndex = 0; 
const pokemonGrid = document.getElementById('pokemon-grid');
const btnAnterior = document.getElementById('btn-anterior');
const btnSiguiente = document.getElementById('btn-siguiente');
const loadingStatus = document.getElementById('loading-status');

async function loadAllPokemon() {
    allPokemonData = [];
    for (let id = 1; id <= TOTAL_POKEMON; id++) {
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
            const response = await fetch(url);
            if (!response.ok) {
                console.error(`Error al cargar el Pokémon ID ${id}: ${response.status}`);
                continue;
            }
            const data = await response.json();
            allPokemonData.push(data);
            loadingStatus.textContent = `Cargando datos de los Pokémon (${id}/${TOTAL_POKEMON})...`;
        } catch (error) {
            console.error(`Error de conexión para el ID ${id}:`, error);
        }
    }
    loadingStatus.textContent = 'Carga completa.';
    if (allPokemonData.length > 0) {
        renderPokemonCards();
        setupNavigation();
    } else {
        pokemonGrid.innerHTML = '<p class="error">No se pudieron cargar los datos de ningún Pokémon. Revisa la conexión.</p>';
        btnAnterior.disabled = true;
        btnSiguiente.disabled = true;
    }
}
function renderPokemonCards() {
    const start = currentPageIndex;
    const end = currentPageIndex + POKEMON_PER_PAGE;
    const pokemonToShow = allPokemonData.slice(start, end);

    pokemonGrid.innerHTML = ''; 

    pokemonToShow.forEach(pokemon => {
        const card = document.createElement('div');
        card.classList.add('pokemon-card');
        card.innerHTML = `
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <h3>${pokemon.name}</h3>
            <p>ID: #${pokemon.id}</p> `;
        pokemonGrid.appendChild(card);
    });
    updateNavigationButtons();
}
function setupNavigation() {
    btnSiguiente.addEventListener('click', () => {
        if (currentPageIndex + POKEMON_PER_PAGE < allPokemonData.length) {
            currentPageIndex += POKEMON_PER_PAGE;
            renderPokemonCards();
        }
    });
    btnAnterior.addEventListener('click', () => {
        if (currentPageIndex > 0) {
            currentPageIndex -= POKEMON_PER_PAGE;
            renderPokemonCards();
        }
    });
    btnAnterior.disabled = true;
    btnSiguiente.disabled = false;
}
function updateNavigationButtons() {
    btnAnterior.disabled = currentPageIndex === 0;
    btnSiguiente.disabled = currentPageIndex + POKEMON_PER_PAGE >= allPokemonData.length;
}
loadAllPokemon();