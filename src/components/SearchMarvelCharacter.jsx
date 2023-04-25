import { useState } from "react"


export const SearchMarvelCharacter = () => {

// Creamos un hook de estado que nos permita almacenar el estado del input 
const [inputValue, setinputValue] = useState('');

// Cada vez que se produce algun cambio en el input se lanzara la siguiente funcion la cual 
// almacenara el valor del input
const onInputChange = ({target}) => {

    setinputValue(target.value);

}

const onSubmit = () => {
    
}

  return (
    <>
        <form action="">
            <input 
                type="text" 
                placeholder="Buscar Personaje de Marvel"
                // Como onChange es una funcion y le pasamos la referencia de una funcion como argumento entonces, 
                // podemos llamara a la funcion sin parentesis
                onChange={ onInputChange }
            />
        </form>
    
    </>
  )
}
