import React, { useState } from "react";
import data from "./data";

function Accordian() {
  const [select, setSelect] = useState(null);
  const [isMultiple, setIsMultiple] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleMul = (id) => {
    console.log(id);
    setMultiple((prevMultiple) =>
      prevMultiple.includes(id)
        ? prevMultiple.filter((prevId) => prevId !== id)
        : [...prevMultiple, id]
    );
  };

  const handleSel = (id) => {
    setSelect(select === id ? null : id);
  };

  return (
    <div>
      <button onClick={() => setIsMultiple(!isMultiple)}>
        Enable Multiple
      </button>
      {data.map((acc, index) => (
        <div
          key={index}
          onClick={
            isMultiple ? () => handleMul(acc.id) : () => handleSel(acc.id)
          }
        >
          <h1>{acc.question}</h1>
          <span>+</span>
          {isMultiple
            ? multiple.includes(acc.id) && <div>{acc.answer}</div>
            : select === acc.id && <div>{acc.answer}</div>}
        </div>
      ))}
    </div>
  );
}

export default Accordian;
