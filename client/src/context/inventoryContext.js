import React from "react";

export default React.createContext({
  inventory: [],

  addProductToInventory: (product) => {},
  removeProductFromInventory: (productId) => {},
});
