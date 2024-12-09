import "./App.css"

const Card = ({ name, age, pic }) => {

    return (<div className="div1">
        <h1>NAME: {name}</h1>
        <h1>AGE: {age}</h1>
        <img src={pic} alt="img" />
    </div>)
}

export default Card;