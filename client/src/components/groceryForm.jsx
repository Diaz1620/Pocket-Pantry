import React from "react";
import { useState, useContext } from "react";
import inventoryContext from "../context/inventoryContext";
import "./groceryForm.css";
// import $ from "jquery";

const GroceryForm = (props) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const {
    inputs,
    handleInputChange,
    handleSubmit,
    title,
    submitValue,
    handleDisabled,
    errors,
  } = props;

  return (
    <form className="container col-6 mx-auto" onSubmit={handleSubmit}>
      <h2 className="text-center">{title}</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          className="form-control"
          onChange={handleInputChange}
          value={inputs.name}
        />
        <span className="red-text text-accent-3">
          {errors.name ? errors.name.message : ""}
        </span>
      </div>
      <div className="form-group">
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          name="amount"
          className="form-control"
          onChange={handleInputChange}
          value={inputs.amount}
        />
        <span className="red-text text-accent-3">
          {errors.amount ? errors.amount.message : ""}
        </span>
      </div>
      <div className="form-group">
        <label htmlFor="unit">Unit:</label>
        <input
          type="text"
          name="unit"
          className="form-control"
          onChange={handleInputChange}
          value={inputs.unit}
        />
        <span className="red-text text-accent-3">
          {errors.unit ? errors.unit.message : ""}
        </span>
      </div>
      <div className="form-group">
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          name="category"
          className="form-control"
          onChange={handleInputChange}
          value={inputs.category}
        />
        <span className="text-danger"></span>
      </div>
      <input
        type="submit"
        value={submitValue}
        className="btn waves-effect modal-close"
        disabled={handleDisabled}
      />
      <button className="btn waves-effect red accent-3 modal-close">
        Cancel
      </button>
    </form>
  );

  // // State Variables
  // const [product, setProduct] = useState({});
  // const inventory = useContext(inventoryContext).inventory;
  // const addProductToInventory =
  //   useContext(inventoryContext).addProductToInventory;

  // // Logic (fns)
  // const inputChange = (event) => {
  //   let prod = { ...product };
  //   let name = event.target.name;
  //   let value = event.target.value;

  //   prod[name] = value;

  //   setProduct(prod);
  //   console.log(prod);
  // };

  // const btnSubmit = () => {
  //   let copy = { ...product };
  //   copy.amount = parseFloat(copy.amount);
  //   copy.name = copy.name.toLowerCase();
  //   copy.category = copy.category.toLowerCase();

  //   addProductToInventory(copy);
  //   console.log(copy);
  // };

  // const test = () => {
  //   console.log(inventory);
  // };

  // return (
  //   <div className="container groceryForm-page">
  //     {/* <h3 className="blue-text text-darken-4">Grocery Tracker</h3> */}
  //     <br />
  //     <h6>Add items to category</h6>

  //     <div className="form">
  //       <div className="row input-field">
  //         <label htmlFor="name">Name</label>
  //         <input onChange={inputChange} name="name" id="name" type="text" />
  //       </div>
  //       <div className="row">
  //         <div className="col s3 input-field">
  //           <label htmlFor="amount">Amount</label>
  //           <input
  //             onChange={inputChange}
  //             name="amount"
  //             id="amount "
  //             type="number"
  //           />
  //         </div>
  //         <div className="col s7 input-field">
  //           <label htmlFor="unit">Unit</label>
  //           <input onChange={inputChange} name="unit" id="unit" type="text" />
  //         </div>
  //       </div>
  //       <div className="category row input-field">
  //         <label htmlFor="category">Category</label>
  //         <input
  //           onChange={inputChange}
  //           name="category"
  //           id="category"
  //           type="text"
  //         />
  //       </div>
  //       <button
  //         onClick={btnSubmit}
  //         className="btn waves-effect waves-purple"
  //         type="submit"
  //       >
  //         Save and add more
  //       </button>
  //       <button
  //         onClick={test}
  //         className="red btn waves-effect waves-purple"
  //         type="submit"
  //       >
  //         Save and continue
  //       </button>
  //     </div>
  //   </div>
  // );
};

export default GroceryForm;
