


// EN ESTA FUNCION ASINCRONA REALIZAREMOS LA PETICION HACIA LA API DE MARVEL 
export const getCharacters = async() => {

    // Aqui montaremos la url que hara la peticion a la API de Marvel
    // const url = 'https://gateway.marvel.com/v1/public/comics?ts=1&apikey=38d90848f70dbf7641a741a055318a5d&hash=5ba0110e6c23a4ae92f98927cdf69171';
    const url = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=38d90848f70dbf7641a741a055318a5d&hash=5ba0110e6c23a4ae92f98927cdf69171';

    // Realizaremos la peticion
    // La funcion fetch es asincrona, asi que pones un await para esperar a que se complete la tarea
    // fetch devolvera una promesa
    const resp = await fetch( url );
    // console.log(resp);

    // Ahora desestruturamos los datos obtenidos y los convertimos en formato json con la funcion json()
    const { data } = await resp.json();
    // console.log(data);

    // Desestructuramos el objeto para quedarnos con el array de objetos
    const { results } = data;
    // console.log(results);
    
    // Recorremos cada elementro del array de objetos y aplicamos la funcion, la cual desestructurara cada objeto y me devolvera
    // otro con solo los campos que se le ha especificado en la funcion
    const characters = results.map( (character) => ({ 
        id: character.id,
        name: character.name,
        img: character.thumbnail.path +'.'+ character.thumbnail.extension
    }));

    // console.log(characters);
    // console.log(characters);

  // Devolvemos los personajes que hemps obtenido de la peticion  
  return characters;

}
