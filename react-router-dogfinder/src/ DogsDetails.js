import React from "react";
import { Link, useParams } from "react-router-dom";
import dogsList from "./DogsList";

function DogsDetails() {
  const { name } = useParams();

  const dog = dogsList.find((d) => d.name.toLowerCase() == name.toLowerCase());

  if (!dog) {
    return (
      <div>
        <p> Dog Not Found!</p>
        <Link to={`/dogs`}>Return to Dog Home</Link>;
      </div>
    );
  }
  return (
    <div>
      <h1>{dog.name}</h1>
      <img src={dog.src} alt={dog.name} />
      <p>Age: {dog.age}</p>
      <ul>
        {dog.facts.map((fact, idx) => (
          <li key={idx}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogsDetails;
