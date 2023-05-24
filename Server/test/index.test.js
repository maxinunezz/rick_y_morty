const app = require("../src/app");
const session = require("supertest");
const request = session(app);

const character = {
  id: 999,
  name: "Maxi",
  species: "Alien",
  gender: "Male",
  status: "Alive",
  origin: {
    name: "Earth (C-137)",
  },
  image: "image.jpg",
};

describe("Route testing ", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Status response: 200", async () => {
      const response = await request.get("/rickandmorty/character/1");
      expect(response.statusCode).toBe(200);
    });
    it('Responding with an object containing properties: "id","name","species","gender","status","origin","image"', async () => {
      const response = await request.get("/rickandmorty/character/1");
      for (const prop in character) {
        expect(response.body).toHaveProperty(prop);
      }
    });
    it("If there is an error, respond with status: 500", async () => {
      const response = await request.get(
        "/rickandmorty/character/1834758937fd"
      );
      expect(response.statusCode).toBe(500);
    });
  });
  describe("GET /rickandmorty/login", () => {
    const access = { access: true };
    it("Respond with an object containing the property 'access' set to true if the user information is valid", async () => {
      const response = await request.get(
        "/rickandmorty/login?email=maxicbapl@gmail.com&password=maxi123"
      );
      expect(response.body).toEqual(access);
    });
    it("Respond with an object containing the property 'access' set to false if the user information is invalid", async () => {
      const response = await request.get(
        "/rickandmorty/login?email=maxicbaplgmail.com&password=maxi13"
      );
      access.access = false;

      expect(response.body).toEqual(access);
    });
  });
  describe("POST /rickandmorty/fav", () => {
    it("You must save the character as a favorite", async () => {
      const response = await request.post("/rickandmorty/fav").send(character);
      expect(response.body).toContainEqual(character);
    });
    it("You must add characters to favorites without removing the existing ones", async () => {
      character.id = 1212;
      character.name = "pepito";
      const response = await request.post("/rickandmorty/fav").send(character);
      expect(response.body.length).toBe(2);
    });
  });

  describe("DELETE /rickandmorty/favorites/:id", () => {
    it("f the requested ID does not exist, it should return an array with all the favorites", async () => {
      const response = await request.delete("/rickandmorty/fav/maxi321");
      expect(response.body.length).toBe(2);
    });
    it("If the requested ID does not exist, it should remove it from the favorites", async () => {
      const response = await request.delete("/rickandmorty/fav/999");
      expect(response.body.length).toBe(1);
    });
  });
});
