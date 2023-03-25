//import Card from './components/card/Card.jsx'
import Cards from './components/cards/Cards.jsx'
import Nav from './components/nav/nav';
import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './views/About';
import Detail from './views/Detail'
import { URL_BASE, KEY } from './components/variables/variables.js';
import Error404 from './views/Error.jsx';
import Form from './components/Form/Form.jsx';
//import style from './components/cards/Cards.module.css'


function App() {
   const { pathname } = useLocation();
   const [characters, setCharacters] = useState([]);
   const [acces, setAcces] = useState(false);
   const navigate = useNavigate()
   const username = "felipe9925@gmail.com";
   const password = "Felipe99";

   useEffect(() => {
      !acces && navigate("/");
   }, [acces]);

   //!


   const onSearch = (id) => {


      if (characters.find((char) => char.id === id)) {
         return alert("persona repetido")
      }
      fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
         .then((response) => response.json())
         .then((data) => {
            if (data.name) {
               setCharacters([...characters, data]);
            } else {
               window.alert('ERROR');
            }
         });

   }

   const onClose = (id) => {
      setCharacters(characters.filter((char) => char.id !== id));

   }

   const login = (userData) => {
      if (userData.username === username && userData.password === password) {
         setAcces(true)
         navigate('/home')

      } else {
         alert("INCORRECTO")
      }

   }


   return (
      <div>
         {pathname !== "/" && <Nav onSearch={onSearch} />}
         <Routes>
            <Route path='/' element={<Form Login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:detailId' element={<Detail />} />
            <Route path='*' element={<Error404 />} />

         </Routes>



      </div>
   );
}

export default App;
