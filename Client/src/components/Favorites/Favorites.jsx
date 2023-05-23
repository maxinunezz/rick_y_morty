import Card from "../Card/Card";
import { connect, useDispatch } from "react-redux";
import styled from "./Favorites.module.css";
import { filterCards, orderCards } from "../../Redux/action";
import { useState } from "react";

const Favorites = ({ myFavorites }) => {
  const dispatch = useDispatch();

  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <div>
        <select className={styled.order} onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select className={styled.filter} onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <div className={styled.favorites}>
        {myFavorites?.map((fav) => {
          return (
            <div className={styled.Card}>
              <Card
                key={fav.key}
                id={fav.id}
                name={fav.name}
                image={fav.image}
                onClose={fav.onClose}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
export default connect(mapStateToProps, null)(Favorites);
