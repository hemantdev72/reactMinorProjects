import React, { useState } from "react";

function RandomColor() {
  const [color, setColor] = useState("#000000");
  const [type, setType] = useState("hex");

  function utility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleHex() {
    setType("hex");
    let col = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      hex += col[utility(col.length)];
    }
    setColor(hex);
  }

  function handleRgb() {
    setType("rgb");
    let r = utility(255);
    let g = utility(255);
    let b = utility(255);
    let col = `rgb(${r},${g},${b})`;
    setColor(col);
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "flex-start",
        background: color,
        color: "#fff",
      }}
    >
      <button onClick={handleHex}>create hex color</button>
      <button onClick={handleRgb}>create rgb color</button>
      <button>create random color</button>
    </div>
  );
}

export default RandomColor;
