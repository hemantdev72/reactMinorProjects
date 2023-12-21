import { createContext, useState } from "react";

export const cartContext = createContext(null);

export const CartContextProvider = (props) => {
  const [item, setItem] = useState([]);
  console.log(item);

  return (
    <cartContext.Provider value={{ item, setItem }}>
      {props.children}
    </cartContext.Provider>
  );
};
