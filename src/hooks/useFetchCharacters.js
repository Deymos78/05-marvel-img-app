import { useEffect, useState } from "react"
import { getCharacters } from "../helpers/getCharacters";


// ESTE ES UN CUSTOM HOOK, CUYO COMPORTAMIENTO SERA EL DE HACER UNA PETICION ASINCRONA 

// debido a que haremos una peticion asoncrona tendremos que hacer la peticion de manera asincrona
export const useFetchCharacters = () => {

    // Inicializaremos un hook de estado para almacenar el array de objetos en formato json 
    const [title, setTitle] = useState([]);

    const [isLoading, setisLoading] = useState(true)

    // Creamos una funcion asincrona para almacernar los datos de la llamada que vamos ha hacer
    const getMarvelCh = async() => {
        // Creamos una constante donde almacenaremos el array de objetos
        const newCharacters = await getCharacters();
        // Con la funcion del hook de estado almacenaremos el objeto en la variable
        setTitle(newCharacters);
        setisLoading(false);
    }
    
    // Usaremos el useEffect para hacer el llamada a una funcion asincrona y ademas asegurarnos que solo sea llamado 
    // la primera vez que se contruye 
    useEffect(() => {
      getMarvelCh();
    
    }, []);
  
    
    // Retornamos la variable del hoook de estado donde esta almacenado el array de objetos de la peticion asincrona haci la api marvel
    return {
        title,
        isLoading
    }
        
}

