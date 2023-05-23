const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
  const { id } = req.params;
  axios
    .get(`${URL}/${id}`)
    .then((response) => response.data)
    .then(({ status, name, species, origin, image, gender }) => {
      if (name) {
        const character = {
          id,
          name,
          species,
          origin,
          image,
          gender,
        };
        return res.status(200).json(character);
      }
      return res.status(404).send("Character not found");
    })
    .catch((error) => res.status(500).send(error.message));
};

module.exports = { getCharById };
