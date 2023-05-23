import { ADD_FAV, REMOVE_FAV, ORDER, FILTER } from "./actionTypes";
const initialState = {
  myFavorites: [],
  allCharacters: [],
};
const reducer = (state = initialState, { type, payLoad }) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: payLoad,
        allCharacters: payLoad,
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: payLoad,
        allCharacters: payLoad,
      };
    case FILTER:
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
    case ORDER:
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
