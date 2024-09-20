

const SecondComponent = () => {

    const books = [
        "Harry Potter y La Piedra Filosofal",
        "Harry Potter y La Camara Seceta",
        "Harry Potter y Harry Potter y el Prisionero de azkcaban",
        "Harry Potter y El Calis de Fuego",
        "Harry Potter y La Orden del Fenix",
        "Harry Potter y El Misterio del Principe",
        "Harry Potter y Las Reliquias de la Muerte",
        "Animales Fantásticos y dónde encontrarlos",
        "Otro libro"
    ];

  return (
   <>
     <div className="container mt-2 pt-2 bg-warning-subtle">
        <h1>Second Component</h1>
        {/* no es la forma correcta de hacerlo
            <ul>
            <li>{books[0]}</li>
            <li>{books[1]}</li>
            <li>{books[2]}</li>
            <li>{books[3]}</li>
            <li>{books[4]}</li>
            <li>{books[5]}</li>
            <li>{books[6]}</li>
        </ul> */}

        <ul>
            {
                books.map((book, index) =>{
                    return <li key={index}>{ book }</li>       
                })
            }
        </ul>
      </div>
   </>
  )
}

export default SecondComponent
