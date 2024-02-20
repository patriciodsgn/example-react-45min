
import "./Card.css";

function Card1({name='Titulo', description='Lorem ipsum dolor sit amet consectetur'}) {
  return (
    <div className="Card">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Card1