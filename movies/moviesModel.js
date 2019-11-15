const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById
};

function insert(hobbit) {
  return (
    db("movies")
      .insert(movie, "id")
       .then(ids => {
        const id = ids[0];
       return db("movies")
          .where({ id })
          .first();
      })
  );
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db("movies");
}

function findById(id) {
  return null;
}
