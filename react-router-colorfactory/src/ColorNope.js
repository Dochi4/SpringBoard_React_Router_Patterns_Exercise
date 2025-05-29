import React from "react";
import { Link } from "react-router-dom";

function ColorNope() {
  return (
    <div>
      <h2>NOT A COLOR!</h2>
      <p>
        <Link to={`/color`}>GO BACK </Link>
      </p>
    </div>
  );
}

export default ColorNope;
