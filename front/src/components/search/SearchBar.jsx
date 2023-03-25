import { useState } from 'react';
import style from './search.module.css'

export default function SearchBar({onSearch}) {
   const [id,setId] = useState("");
   const handleChange = (event) => {
       setId(event.target.value) 
   } 
   return (
      <div className={style.bar}>   
         <input 
         type='search' 
         className={style.input}
         onChange={handleChange}
         />
         <button className={style.searchButton} onClick={() => onSearch(id)}>Agregar</button> 
      </div>
   );
}

