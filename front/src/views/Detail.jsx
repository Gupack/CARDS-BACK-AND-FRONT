import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { URL_BASE, KEY } from "../components/variables/variables";

const Detail = () => {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios(`${URL_BASE}/character/${detailId}?key=${KEY}`).then((response) =>
      setCharacter(response.data)
    );
  }, []);

  return (
    <div>
      {character.name ? (
        <>
          <h2>{character.name}</h2>
          <p>{character.status}</p>
          <p>{character.species}</p>
          <p>{character.gender}</p>
          <p>{character.origin.name}</p>
          <img src={character.image} alt="imagen  " />
        </>
      ) : (
        <img src="https://www.siis.net/img/loading.gif" alt="loading..." />
      )}
    </div>
  );
};

export default Detail;
