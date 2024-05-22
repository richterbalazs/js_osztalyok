import Pokemon from "./Pokemon.js"

const pokemon = new Pokemon("Ditto","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png", $(".pokemonok"))
const pokemon2 = new Pokemon("Lucario","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/448.png", $(".pokemonok"))

pokemon.beszel()

console.log(pokemon.nev)
console.log(pokemon.mondat)
console.log(pokemon2.nev)
console.log(pokemon2.mondat)
pokemon.harciero = 2
pokemon2.harciero = 10
delete pokemon.nev
delete pokemon2.nev
console.log(pokemon)
console.log(pokemon2)
// privát adattagok elérése getterrel.
// pokemon.nev="Roland"
pokemon.mondat = "Szép napunk van!"
pokemon2.mondat = "Szép esténk van!"
pokemon2.beszel()
pokemon.beszel()