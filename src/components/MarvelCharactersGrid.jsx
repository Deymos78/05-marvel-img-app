import { useState } from "react";
import { useFetchCharacters } from "../hooks/useFetchCharacters";
import { MarvelCharacterItem } from "./MarvelCharacterItem";



export const MarvelCharactersGrid = () => {

    // Aqui se almacenaran las imagenes de los personajes marveL
    // Previamente hemos creado un hook personalizado, el cual realizara las peticiones 
    const { title, isLoading } = useFetchCharacters();



  return (
    <>
        {
            isLoading && (<h2>Cargando...</h2>)
        }

        <div className="card-grid">                

                    { 
            
                        title.map( (character) => (
                            // console.log(character),
                            <MarvelCharacterItem
                                key={character.id}
                                {...character}
                            />
                        ))
                    }
                
                
            ¡
        </div>
    </>
  )
}
