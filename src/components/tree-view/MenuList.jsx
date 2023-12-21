import React from "react";
import menus from "./data";
import MenuItem from "./MenuItem";

function MenuList() {
  return (
    <div className="tree-view">
      <ul>
        {menus && menus.length > 0
          ? menus.map((item) => <MenuItem item={item} />)
          : null}
      </ul>
    </div>
  );
}

export default MenuList;
