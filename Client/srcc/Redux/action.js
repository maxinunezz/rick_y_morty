import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actionTypes";
import axios from "axios";

export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/";
  return (dispatch) => {
    axios.post(endpoint, character).then(({ data }) => {
      return dispatch({
        type: ADD_FAV,
        payLoad: data,
      });
    });
  };
};
export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: REMOVE_FAV,
        payLoad: data,
      });
    });
  };
};
export const filterCards = (gender) => {
  return { type: FILTER, payLoad: gender };
};
export const orderCards = (order) => {
  return { type: ORDER, payLoad: order };
};
