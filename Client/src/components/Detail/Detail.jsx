import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Detail.module.css";
import { ButtonA } from "../../button";
const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={styles.container}>
      {
        <div className={styles.card}>
          <img src={character?.image} alt={character?.name} />
          <div>
            <p>{character?.name}</p>
            <h2>Status: {character?.status}</h2>
            <h2>Species: {character?.species}</h2>
            <h2>Gender: {character?.gender}</h2>
            <h2>Origin: {character?.origin?.name}</h2>
            <Link to="/home">
              <ButtonA>Back</ButtonA>
            </Link>
          </div>
        </div>
      }
    </div>
  );
};
export default Detail;
