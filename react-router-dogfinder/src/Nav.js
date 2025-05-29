import React from "react";
import { Link } from "react-router-dom";

function Nav({ list }) {
  return (
    <nav>
      <div>
        {list.map((item) => (
          <Link to={`/dogs/${item.name}`}>{item.name}</Link>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
