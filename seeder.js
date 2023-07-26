const firstGenPokemon = require("./pokemon");
const mongoose = require("mongoose");
const pokemonModel = require("./models/pokemonModel");
require("dotenv").config();
const seedDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    await pokemonModel.deleteMany();
    console.log("DELETED ALL POKEMONS");
    let i = 1;
    firstGenPokemon.forEach((pokemon) => {
      pokemon.number = i;
      pokemon.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i}.svg`;

      i++;
    });
    const insertedPokemons = await pokemonModel.insertMany(firstGenPokemon);
    console.log(insertedPokemons);
    mongoose.disconnect();
    console.log("Disconnected to the database!!!");
  } catch (e) {
    console.log(e, "ERRORRRRRRRRR");
  }
};
seedDb();
