import { Link } from "react-router-dom";
import style from "./card.module.css";

export default function Card({ id, name, species, gender, image, onClose }) {
  return (
    <div className={style.container}>
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
