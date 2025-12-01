// Laboratorio N° 19 Ejercicio_ 03
// Autor: ANDREA CAMARGO 
// Colaboro: 
// Tiempo: 5 minutos 

async function mostrarNombrePorId() {
    const id = prompt("Ingresa el ID del Pokémon:");
    if (id === null || id.trim() === "") {
        console.log("Operación cancelada o ID no ingresado.");
        return;
    }
    try {
        const url = "https://pokeapi.co/api/v2/pokemon/" + id.toLowerCase();
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error("Pokémon con ID " + id + " no encontrado (Código: " + res.status + ")");
        }
        const data = await res.json();
        console.log("El Pokémon con ID " + id + " es: " + data.name.toUpperCase());
    } catch (error) {
        console.error("Error:", error.message);
    }
}
mostrarNombrePorId();