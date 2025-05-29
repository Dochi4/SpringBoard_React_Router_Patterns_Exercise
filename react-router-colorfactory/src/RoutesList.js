import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ColorHome from "./ColorHome";
import ColorPages from "./ColorPages";
import ColorNew from "./ColorNew";
import ColorNope from "./ColorNope";

function RoutesList() {
  const [colorList, setColorList] = useState([
    { name: "red", value: "red" },
    { name: "green", value: "green" },
    { name: "blue", value: "blue" },
  ]);

  const addColor = (newColor) => {
    setColorList([...colorList, newColor]);
  };

  return (
    <Routes>
      <Route path="/color" element={<ColorHome colors={colorList} />} />
      <Route path="/color/nope" element={<ColorNope />} />
      <Route path="/color/new" element={<ColorNew addColor={addColor} />} />
      <Route path="/color/:color" element={<ColorPages colors={colorList} />} />
      <Route path="*" element={<Navigate to="/color" replace />} />
    </Routes>
  );
}

export default RoutesList;
