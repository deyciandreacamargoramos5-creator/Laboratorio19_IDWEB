// Laboratorio N° Ejercicio 12
// Autor: ANDREA CAMARGO
// Colaboró: 
// Tiempo: 5 minutos

const POKEMON_DATABASE = [
  {
    nombre: "Pikachu",
    tipo: ["Eléctrico"],
    stats_base: {
      HP: 35,
      Ataque: 55,
      Defensa: 40,
      AtEsp: 50,
      DefEsp: 50,
      Velocidad: 90
    },
    total_base: 320
  },  {
    nombre: "Charizard",
    tipo: ["Fuego", "Volador"],
    stats_base: {
      HP: 78,
      Ataque: 84,
      Defensa: 78,
      AtEsp: 109,
      DefEsp: 85,
      Velocidad: 100
    },
    total_base: 534
  },  {
    nombre: "Blastoise",
    tipo: ["Agua"],
    stats_base: {
      HP: 79,
      Ataque: 83,
      Defensa: 100,
      AtEsp: 85,
      DefEsp: 105,
      Velocidad: 78
    },
    total_base: 530
  },  {
    nombre: "Snorlax",
    tipo: ["Normal"],
    stats_base: {
      HP: 160,
      Ataque: 110,
      Defensa: 65,
      AtEsp: 65,
      DefEsp: 110,
      Velocidad: 30
    },
    total_base: 540
  }
];
function mostrarEstadisticasBase(nombrePokemon) {
  if (typeof nombrePokemon !== 'string' || nombrePokemon.trim() === '') {
    console.error(" Error: Debe proporcionar un nombre de Pokémon válido.");
    return;
  }
  const nombreBuscado = nombrePokemon.trim().toLowerCase();
  const pokemon = POKEMON_DATABASE.find(p => {
    return p && typeof p.nombre === 'string' && p.nombre.toLowerCase() === nombreBuscado;
  });
  if (!pokemon) {
    console.log(` Error: El Pokémon "${nombrePokemon}" no fue encontrado en la base de datos.`);
    return;
  }
  const stats = pokemon.stats_base;
  console.log(`Estadísticas Base de ${pokemon.nombre} (${pokemon.tipo.join('/')})`);
  console.log('--------------------------------------------------');
  console.log(`HP:             ${stats.HP}`);
  console.log(`Ataque Físico:  ${stats.Ataque}`);
  console.log(`Defensa Física: ${stats.Defensa}`);
  console.log(`Ataque Especial: ${stats.AtEsp}`);
  console.log(`Defensa Especial: ${stats.DefEsp}`);
  console.log(`Velocidad:        ${stats.Velocidad}`);
  console.log('--------------------------------------------------');
  console.log(`Total Base:      ${pokemon.total_base}`);
}
mostrarEstadisticasBase("Charizard");
mostrarEstadisticasBase("sNoRlAx");
mostrarEstadisticasBase("Mewtwo");
mostrarEstadisticasBase(undefined);