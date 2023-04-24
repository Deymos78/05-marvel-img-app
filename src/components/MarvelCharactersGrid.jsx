import { useState } from "react";
import { useFetchCharacters } from "../hooks/useFetchCharacters";
import { MarvelCharacterItem } from "./MarvelCharacterItem";



export const MarvelCharactersGrid = () => {

    // Aqui se almacenaran las imagenes de los personajes marveL
    // Previamente hemos creado un hook personalizado, el cual realizara las peticiones 
    const { title, isLoading } = useFetchCharacters();



  return (
    <>
        <h2>Categoria</h2>
        {
            isLoading && (<h2>Cargando...</h2>)
        }

        <div>Aqui Apareceran los personajes de Marvel</div>
        <div className="card-grid">
            Soy una tarjeta vacia
        </div>
        <div className="card-grid">
            {
                
            }
            { 
    
                title.map( (character) => (
                    // console.log(character),
                    <MarvelCharacterItem
                        key={character.id}
                        {...character}
                    />
                ))
            }
        </div>

        
    </>
  )
}
