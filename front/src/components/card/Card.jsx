import { connect } from "react-redux";
import { Link } from "react-router-dom";
import style from "./card.module.css";
import { addFavorite, removeFavorite } from "../../redux/actions";
import { useState } from "react";

function Card({
  id,
  name,
  species,
  gender,
  image,
  onClose,
  addFavorite,
  removeFavorite,
}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavorite(id);
    } else {
      setIsFav(true);
      addFavorite({
        id,
        name,
        species,
        gender,
        image,
        onClose,
        addFavorite,
        removeFavorite,
      });
    }
  };

  return (
    <div className={style.container}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button
        onClick={() => onClose(id)}
        className={style.closeButton}
        data-bs-dismiss="alert"
      >
        X
      </button>
      <img className={style.imgen} src={image} alt="img" />
      <Link to={`/detail/${id}`}>
        <h2>name: {name}</h2>
      </Link>
      <h2>Specie :{species}</h2>
      <h2>Genero: {gender}</h2>
    </div>
  );
}

const mapsDispachToProps = (dispach) => {
  return {
    addFavorite: (character) => {
      dispach(addFavorite(character));
    },
    removeFavorite: (id) => {
      dispach(removeFavorite(id));
    },
  };
};

export default connect(null, mapsDispachToProps)(Card);
