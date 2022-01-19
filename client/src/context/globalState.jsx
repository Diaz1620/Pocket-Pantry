import React, { useState } from "react";
import inventoryContext from "./inventoryContext";

const GlobalState = (props) => {
  const [inventory, setInventory] = useState([]);

  const addToInventory = (product) => {
    let copy = [...inventory];
    let found = false;

    for (let i = 0; i < copy.length; i++) {
      let prod = copy[i];
      if (product.name === prod.name) {
        found = true;
        prod.amount += product.amount;
        console.log("Found it! adding amount to current inventory");
      }
    }

    if (!found) {
      console.log("Adding this item to inventory");
      copy.push(product);
    }

    console.log(copy);
    setInventory(copy);
  };

  const removeFromInventory = (prods) => {
    console.log("Remove from inventory");
    console.log(prods);
  };

  return (
    <inventoryContext.Provider
      value={{
        inventory: inventory,
        addProductToInventory: addToInventory,
        removeProductFromInventory: removeFromInventory,
      }}
    >
      {props.children}
    </inventoryContext.Provider>
  );
};

export default GlobalState;
