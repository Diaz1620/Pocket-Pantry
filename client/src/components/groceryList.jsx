import "./groceryList.css";
import { useContext, useState, useEffect } from "react";
import inventoryContext from "../context/inventoryContext";
import GroceryListItem from "./groceryListItem";
import ItemService from "../services/itemService";

const GroceryList = () => {
  // Variables
  let [selectedItemsList, setSelectedItemsList] = useState([]);
  let [items, setItems] = useState([]);
  const inventory = useContext(inventoryContext).inventory;
  const removeFromInventory =
    useContext(inventoryContext).removeProductFromInventory;
  const addToInventory = useContext(inventoryContext).addProductToInventory;

  // Logic
  const retrieveList = () => {
    let service = new ItemService();
    setItems(service.getList());
  };

  const selectedItems = (prod) => {
    let list = [...selectedItemsList];
    let inList = false;
    let selected = false;
    console.log("checked item: " + prod);

    if (list.length < 1) {
      list.push(prod);
      setSelectedItemsList(list);
      console.log(list);
    } else {
      for (let i = 0; i < list.length; i++) {
        if (prod._id === list[i]._id) {
          inList = true;
          if (prod.selected === list[i].selected) {
            selected = true;
          } else {
            selected = false;
          }
        }
        if (inList) {
          list[i].selected = prod.selected;
          setSelectedItemsList(list);
        }
        break;
      }
      if (!inList) {
        list.push(prod);
        setSelectedItemsList(list);
        console.log(list);
      }
    }
  };

  const btn = () => {
    console.log(selectedItemsList);
  };

  const removeItems = (prods) => {
    //NOT SURE IF I'LL NEED THIS AFTER IMPLEMENT BACKEND
    // let prods = selectedItemsList;
    removeFromInventory(selectedItemsList);
  };

  const removeMultItems = () => {
    let service = new ItemService();
    service.removeMultiple(selectedItemsList);
  };

  // Effects
  useEffect(() => {
    console.log("Component Loaded");
    retrieveList();
  });

  // Render
  return (
    <div className="grocery-list">
      <h1>Inventory</h1>
      <h6>Here's what you got</h6>

      <table className="centered">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {items.map((prod) => (
            <GroceryListItem key={prod._id} data={prod} send={selectedItems} />
          ))}
        </tbody>
      </table>
      <button onClick={btn}>Show Selected</button>
      <button onClick={removeMultItems}>Remove</button>
    </div>
  );
};

export default GroceryList;
