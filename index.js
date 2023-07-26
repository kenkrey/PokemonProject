const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const pokemonModel = require("./models/pokemonModel");
require("dotenv").config();
app.use(cors());
app.get("/api/pokemon", async (req, res) => {
  try {
    const allPokemon = await pokemonModel.find({});
    res.status(200).json(allPokemon);
    //console.log(allPokemon);
  } catch (e) {
    res.status(400).json({ error: e.message });
    console.log(e);
  }
});

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("COnnected to the database");
    app.listen(3000, () => {
      console.log(" Listening on port 3000");
    });
  } catch (e) {
    console.log(e, "errrorr==============================");
  }
};
connectDb();
