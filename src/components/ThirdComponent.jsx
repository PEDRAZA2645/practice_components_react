import PropTypes from "prop-types";

const ThirdComponent = (props) => {
  return (
    <div>
      <h1>Comunicación entre Componentes</h1>
      <ul>
        <li>{ props.name }</li>
        <li>{ props.lastName }</li>
        <li>{ props.age }</li>
      </ul>
    </div>
  )
}

ThirdComponent.propTypes = {
    name: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.number
}

export default ThirdComponent
