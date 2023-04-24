import { useState } from "react"
import { MarvelCharactersGrid } from "./components/MarvelCharactersGrid";



export const MarvelApiApp = () => {

  //Inicializamos un hook de estado que es el que almacenara los personajes de marvel que nos devuelva la llamada a la api
  const [marvelCharacters, setmarvelCharacters] = useState([]);


  return (
    <>
        {/* Titulo */}

        {/* Input */}
        <h1>MarvelApiApp</h1>
        <div>MarvelApiApp</div> 

        {/* Listado de Personajes de Marvel */}
        {/* Creamos otro componente funcional o funtional component para traer una lista de personajes de marvel con una peticion fetch 
            a una API publica y gratuita */}
        <MarvelCharactersGrid/>
    </>
  )
}
