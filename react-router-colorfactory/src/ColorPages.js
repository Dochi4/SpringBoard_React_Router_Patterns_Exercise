import React from "react";
import { Navigate, Link, useParams } from "react-router-dom";

function ColorPages({ colors }) {
  const { color } = useParams();

  const found = colors.find(
    (c) =>
      c.name.toLowerCase() === color.toLowerCase() ||
      c.value.toLowerCase().replace("#", "") === color.toLowerCase()
  );

  if (!found) {
    return <Navigate to="/color/nope" replace />;
  }

  return (
    <div
      style={{
        backgroundColor:
          found.value.toLowerCase() === "#ffffff" ? found.name : found.value,
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <p>{`THIS IS ${found.name.toUpperCase()}`}</p>
      <p>ISN'T IT BEAUTIFUL?</p>
      <Link to="/color">GO BACK</Link>
    </div>
  );
}

export default ColorPages;
