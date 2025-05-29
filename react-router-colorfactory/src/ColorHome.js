import React from "react";
import { Link } from "react-router-dom";

function ColorHome({ colors }) {
  return (
    <div>
      <div>
        <Link to="/color/new">Add a New Color</Link>
      </div>
      <div>
        <h2>Available Colors:</h2>
        {colors.map((color) => (
          <p key={color.name}>
            <Link to={`/color/${color.name}`}>{color.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
}

export default ColorHome;
