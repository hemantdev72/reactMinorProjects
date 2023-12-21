import React from "react";
import MenuList from "./MenuList";

function MenuItem({ item }) {
  console.log(item);
  return (
    <li>
      <p>{item.label}</p>
      {item && item.children && item.children.length > 0 ? (
        <MenuList item={item.children} />
      ) : null}
    </li>
  );
}

export default MenuItem;
