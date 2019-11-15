const express = require("express");

const Hobbits = require("../movies/moviesModel.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up", environment: process.env.DB_ENV });
});

server.get("/movies", (req, res) => {
  Hobbits.getAll()
    .then(movies => {
      res.status(200).json(movies);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;
