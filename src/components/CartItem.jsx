import { useContext } from "react";
import { cartContext } from "../context/CartContext";

function CartItem({ name, price }) {
  const { item, setItem } = useContext(cartContext);

  function handleClick() {
    setItem([...item, { name, price }]);
  }
  return (
    <div>
      <h1>{name}</h1>
      <h1>{price}</h1>
      <button onClick={handleClick}>Add to cart</button>
    </div>
  );
}

export default CartItem;
