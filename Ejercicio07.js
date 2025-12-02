// Laboratorio N° 19 Ejercicio_ 07
// Autor: ANDREA CAMARGO 
// Colaboro: 
// Tiempo: 5 minutos

function ListarPokemon() {
    const URL_LISTA = "https://pokeapi.co/api/v2/pokemon?limit=20";
    fetch(URL_LISTA)
        .then(res => {
            if (!res.ok) {
                throw new Error("Error HTTP: " + res.status + " al buscar la lista");
            }
            return res.json(); 
        })
        .then(data => {
            const listaPokemon = data.results;

            console.log("--- Lista de los Pokémon ---");
            listaPokemon.forEach((pokemon, index) => {
                console.log(`${index + 1}. ${pokemon.name}`);
            });
        })
        .catch(err => {
            console.error("Error al obtener la lista de Pokémon:", err);
        });
}
ListarPokemon();