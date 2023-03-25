import Card from '../card/Card';
//import style from './Cards.module.css'
import { CardsContainer } from './stylecomponents';

export default function Cards({ characters, onClose }) {
   
  return (
    <CardsContainer>
      {characters.map(({id,name,species,gender,image}) => {
         return(
        <Card 
        id ={id}
        name = {name}
        species = {species}
        gender ={gender}
        image = {image}
        onClose = {onClose}
          />
         );
      })}
    </CardsContainer>
  );
}
