// Laboratorio N° 19 Ejercicio_04
// Autor: ANDREA CAMARGO 
// Colaboró: 
// Tiempo: 5 minutos 
function Altura_Peso_Pikachu_Then() {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        .then(res => {
            if (!res.ok) {
                throw new Error("Error HTTP: " + res.status);
            }
            return res.json(); 
        })
        .then(data => {
            console.log("--- Datos de Pikachu ---");
            console.log("Altura: ", data.height);
            console.log("Peso: ", data.weight); 
        })
        
        .catch(err => {
            console.error("Error al obtener datos:", err);
        });
}
Altura_Peso_Pikachu_Then();