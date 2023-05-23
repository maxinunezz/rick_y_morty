import { addFav, removeFav, filterCards, orderCards } from "./action";
import { ADD_FAV } from "./actionTypes";
const initialState = {
  myFavorites: [],
  allCharacters: [],
};
const reducer = (state = initialState, { type, payLoad }) => {
  switch (type) {
    case "ADD_FAV":
      return {
        ...state,
        myFavorites: payLoad,
        allCharacters: payLoad,
      };
    case removeFav().type:
      return {
        ...state,
        myFavorites: payLoad,
        allCharacters: payLoad,
      };
    case filterCards().type:
      const allCharactersFiltered = state.allCharacters.filter(
        (character) => character.gender === payLoad
      );
      return {
        ...state,
        myFavorites:
          payLoad === "allCharacters"
            ? [...state.allCharacters]
            : allCharactersFiltered,
      };
    case orderCards().type:
      const allCharactersCopy = [...state.allCharacters];
      return {
        ...state,
        myFavorites:
          payLoad === "A"
            ? allCharactersCopy.sort((a, b) => a.id - b.id)
            : allCharactersCopy.sort((a, b) => b.id - a.id),
      };
    default:
      return { ...state };
  }
};

export default reducer;
