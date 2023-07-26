const mongoose = require("mongoose");

const pokemonSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  type: Array,
});

module.exports = mongoose.model("Pokemon", pokemonSchema);
