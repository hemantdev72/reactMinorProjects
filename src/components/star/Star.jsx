import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

function Star() {
  const [select, setSelect] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(index) {
    setSelect(index);
  }

  function handleMove(index) {
    setHover(index);
  }

  function handleLeave(index) {
    setHover(select);
  }

  return (
    <div className="main">
      {[...Array(5)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            className={index <= (hover || select) ? "active" : "inactive"}
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMove(index)}
            onMouseLeave={() => handleLeave(index)}
          />
        );
      })}
    </div>
  );
}

export default Star;
