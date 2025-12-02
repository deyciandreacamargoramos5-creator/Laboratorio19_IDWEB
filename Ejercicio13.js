// Laboratorio N° 19 Ejercicio_ 13
// Autor: ANDREA CAMARGO 
// Colaboro: 
// Tiempo: 5 minutos

async function buscarPokemon() {
    const input = document.getElementById('pokemonInput');
    const resultadoDiv = document.getElementById('resultado');
    const nombrePokemon = input.value.toLowerCase().trim();
    if (!nombrePokemon) {
        resultadoDiv.innerHTML = '<p class="error">Por favor, ingresa un nombre de Pokémon.</p>';
        return;
    }
    resultadoDiv.innerHTML = '<p style="text-align: center;">Buscando a ' + nombrePokemon + '...</p>';
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;
        const response = await fetch(url);
        if (!response.ok) { 
            if (response.status === 404) {
                resultadoDiv.innerHTML = `<p class="error">Pokémon "${nombrePokemon}" no encontrado. Verifica el nombre.</p>`;
            } else {
                resultadoDiv.innerHTML = `<p class="error">Error al obtener los datos (Estado: ${response.status}).</p>`;
            }
            return;
        }
        const data = await response.json();
        mostrarStats(data);
    } catch (error) {
        console.error('Error de solicitud:', error);
        resultadoDiv.innerHTML = '<p class="error">Ocurrió un error de conexión.</p>';
    }
}
function mostrarStats(data) {
    const resultadoDiv = document.getElementById('resultado');
    const nombre = data.name;
    const imagenUrl = data.sprites.front_default;
    let tablaHTML = ` <h2>${nombre}</h2>
        <div style="text-align: center;">
            <img src="${imagenUrl}" alt="${nombre}" style="width: 100px; height: 100px;">
        </div>
        <table>
            <thead>
                <tr> <th>Estadística</th>
                     <th>Valor Base</th> </tr>
            </thead>
            <tbody> `;
    data.stats.forEach(statItem => {
        const nombreStat = statItem.stat.name;
        const valorBase = statItem.base_stat;
        let nombreDisplay = nombreStat;
        switch (nombreStat) {
            case 'hp':
                nombreDisplay = 'HP (Puntos de Salud)';
                break;
            case 'attack':
                nombreDisplay = 'Ataque Físico';
                break;
            case 'defense':
                nombreDisplay = 'Defensa Física';
                break;
            case 'special-attack':
                nombreDisplay = 'Ataque Especial';
                break;
            case 'special-defense':
                nombreDisplay = 'Defensa Especial';
                break;
            case 'speed':
                nombreDisplay = 'Velocidad';
                break;
        }
        tablaHTML += ` <tr> <td>${nombreDisplay}</td> <td>${valorBase}</td> </tr> `;
    });
    const totalBase = data.stats.reduce((total, stat) => total + stat.base_stat, 0);
    tablaHTML += ` <tr> <td><strong>TOTAL BASE</strong></td>
                       <td><strong>${totalBase}</strong></td> </tr> `;
    tablaHTML += ` </tbody>  </table> `;
    resultadoDiv.innerHTML = tablaHTML;
}