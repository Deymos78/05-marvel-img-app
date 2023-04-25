

export const MarvelCharacterItem = ({id, name, img}) => {


   
   
  return (
    <>

        <div className="card">
            <img src={ img } alt={ name } />
            <p>{ name}</p>
        </div>
      
    </>
    
  )
}
