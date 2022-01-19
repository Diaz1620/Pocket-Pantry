import "./groceryListItem.css";
import { useState } from "react";

const GroceryListItem = (props) => {
  const selectChange = (event) => {
    let selected = event.target.checked;
    let id = props.data._id;
    let status = {
      _id: id,
      selected: selected,
    };

    props.send(status);
  };

  const firstLetterCap = (word) => {
    let cap = word.charAt(0).toUpperCase() + word.slice(1);
    return cap;
  };

  return (
    <tr>
      <p>
        <label>
          <input onClick={selectChange} for={props.data._id} type="checkbox" />
          <span></span>
        </label>
      </p>
      <td>{firstLetterCap(props.data.name)}</td>
      <td>
        {props.data.amount} {props.data.unit}
      </td>
      <td>
        <div className="chip">{firstLetterCap(props.data.category)}</div>
      </td>
    </tr>
  );
};

export default GroceryListItem;
