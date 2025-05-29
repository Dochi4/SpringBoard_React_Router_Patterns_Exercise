// ColorNew.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SketchPicker } from "react-color";

function ColorNew({ addColor }) {
  const [colorName, setColorName] = useState("");
  const [pickerColor, setPickerColor] = useState("#ffffff");
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setColorName(e.target.value);
  };

  const handleChangePicker = (newColor) => {
    setPickerColor(newColor.hex);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let name = colorName.trim();
    if (!name) {
      name = pickerColor.replace("#", "");
    }

    addColor({ name, value: pickerColor });
    navigate("/color");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={colorName}
        placeholder="Name your color"
        onChange={handleNameChange}
      />
      <SketchPicker color={pickerColor} onChangeComplete={handleChangePicker} />
      <p>Selected color: {pickerColor}</p>
      <button type="submit">Add Color</button>
    </form>
  );
}

export default ColorNew;
