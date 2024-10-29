const FristComponent = () => {

  const name = "Maria Ines Oliveros";

  const github_profile = "https://github.com/PEDRAZA2645";

  const student = {
    name : "Andres",
    lastName : "Moreno Pedraza",
    mobile: "31128657145",
    linkedinProfile: "https://www.linkedin.com/in/andres-moreno-pedraza-3777a4205/"
  }

  return (
    <>
        <div>My First Comonent</div>
        <div className="container mt-4">
        <h1>Temas de React</h1>
        <ul>
            <li>Componentes</li>
            <li>Eventos</li>
            <li>Estados Hooks</li>
            <li>Props</li>
        </ul>
        </div>

        <div className="container py-2">
        <h1>Datos del Docente</h1>
        <p>Nombre: <strong>{ name }</strong></p>
        <p>Github: <strong>{ github_profile }</strong></p>
        </div>

        <div className="container py-2">
        <h1>Datos del Estudiante</h1>
        <p>Nombre: <strong>{ student.name }</strong></p>
        <p>Apellido: <strong>{ student.lastName }</strong></p>
        <p>Celular: { student.mobile }</p>
        <p><a href={ student.linkedinProfile }>Linkedin</a></p>
        </div>

        <div className="container mt-2 pt-2">
          <h1>Objeto Completo</h1>
          <pre>{JSON.stringify(student)}</pre>
        </div>

    </>
  )
}

export default FristComponent
