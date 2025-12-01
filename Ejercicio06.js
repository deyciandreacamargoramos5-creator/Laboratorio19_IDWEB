// Laboratorio N° 19 Ejercicio_ 06
// Autor: ANDREA CAMARGO 
// Colaboro: 
// Tiempo: 5 minutos

async function MostrarURL() {
    const URL = "https://pokeapi.co/api/v2/pokemon/charizard";
    try {
        const res = await fetch(URL);
        if (!res.ok) {
            throw new Error(`Error HTTP: ${res.status} al buscar Charizard`);
        }
        const data = await res.json();
        const spriteUrl = data.sprites.front_default;

        console.log("--- URL del Sprite de Charizard ---");
        console.log("URL:", spriteUrl);

    } catch (err) {
        console.error("Error al obtener los datos de Charizard:", err);
    }
}
MostrarURL();