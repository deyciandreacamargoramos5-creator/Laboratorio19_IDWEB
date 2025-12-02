// Laboratorio N° 19 Ejercicio_ 08
// Autor: ANDREA CAMARGO 
// Colaboro: 
// Tiempo: 5 minutos

async function obtenerPokemonAleatorio(){
    const maxPokemonId = 898;
    const randomId = Math.floor(Math.random() * maxPokemonId) + 1;

    const URL = `https://pokeapi.co/api/v2/pokemon/${randomId}`;

    try{
        const res = await fetch(URL);
        if (!res.ok){
            throw new Error (`Error al obtener Pokemon con ID ${randomId} (Código: ${res.status})`);
        }
        const data = await res.json();

        console.log("--- Pokémon Aleatorio ---");
        console.log("ID: ", data.id);
        console.log("Nombre: ", data.name.toUpperCase());
        console.log("Peso: ", data.weight);
        console.log("Altura: ", data.height);
    }catch (error){
        console.error ("Error: ", error.message)
    }
}    