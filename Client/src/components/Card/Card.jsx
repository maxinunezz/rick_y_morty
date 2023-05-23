import { ButtonD, ButtonE } from "../../button";
import { Link, useLocation } from "react-router-dom";
import styles from "./Card.module.css";
import { addFav, removeFav } from "../../Redux/action"; //es lo que tengo que despachar
import { connect } from "react-redux"; //necesario para el mapdispatchtoprop
import { useState, useEffect } from "react"; //usamos usestate para declarar un estado local, useeffect sirve para ejecutar efectos en cualquier ciclo de vida del componente

const Card = ({
  //exporto el contenedor card con todas sus propiedades
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) => {
  const [isFav, setIsFav] = useState(false); //el primer parametro es el estado local, y el segundo es una funcion seteadora de ese estado.
  const handleFavorite = () => {
    console.log(addFav);
    isFav
      ? removeFav(id)
      : addFav({ id, name, status, species, gender, origin, image, onClose });
    setIsFav(!isFav);
  };

  useEffect(() => {
    //el useeffect comprobara si mi carta ya esta en favoritos o no

    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);
  const { pathname } = useLocation();
  return (
    <div className={styles.card}>
      <div className={styles.botones}>
        <div className={styles.botonesFav}>
          <ButtonE onClick={handleFavorite}>{isFav ? "💚" : "🤍"}</ButtonE>
        </div>
        <div className={styles.botonesClose}>
          {pathname !== "/favorites" && (
            <ButtonD onClick={() => onClose(id)}>❌</ButtonD>
          )}
        </div>
      </div>

      <img src={image} alt={name} />
      <div>
        <Link to={`/Detail/${id}`}>
          <p className={styles.name}>{name}</p>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
      console.log(character);
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Card); //luego de importar lo que necesito, hago el connect y recien ahi hago la funcion mapdispatch y mapstate. ademas lo ideal seria que si usamos el connect sea con sintaxis de clase, para la sintaxis   funcional estan los hooks
