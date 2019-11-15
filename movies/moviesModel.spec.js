const db = require("../data/dbConfig.js");

const { insert } = require("./moviesModel.js");

describe("movies model", function() {
  describe("insert()", function() {
    beforeEach(async () => {
      await db("movies").truncate();
    });

    it("should insert a movie", async function() {
      await insert({ name: "avatar" });


      const movies = await db("movies"); 
      expect(movies).toHaveLength(1);
    });

    it("should insert the provided  movie", async function() {
      await insert({ name: "avatar" });
      await insert({ name: "harry potter" });

      const hobbits = await db("movies"); 

      expect(hobbits).toHaveLength(2); 
      expect(hobbits[0].name).toBe("avatar"); 
      expect(hobbits[1].name).toBe("harry potter"); 
    });

    it("should return the inserted movie", async function() {
      let hobbit = await insert({ name: "avatar" });
      expect(hobbit.name).toBe("avatar");
      expect(hobbit.id).toBeDefined(); 

      hobbit = await insert({ name: "harry potter" });
      expect(hobbit.name).toBe("harry potter");
      expect(hobbit.id).toBeDefined();
    });
  });
});