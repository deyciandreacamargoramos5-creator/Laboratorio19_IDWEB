// Laboratorio N° 19 Ejercicio_04
// Autor: ANDREA CAMARGO 
// Colaboró: 
// Tiempo: 5 minutos 
async function Altura_Peso_Pikachu() {
    try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
        if (!res.ok) {
            throw new Error("Error HTTP: " + res.status);
        }

        const data = await res.json();
        
        console.log("--- Datos de Pikachu ---");
        console.log("Altura:", data.height);
        console.log("Peso:", data.weight);   

    } catch (error) {
        console.error("Error al obtener datos:", error);
    }
}