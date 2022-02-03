import { useState, useEffect } from "react";
import Axios from "axios";
import GroceryForm from "../components/groceryForm";
import { navigate } from "@reach/router";

const Edit = (props) => {
  const [groceryForm, setGroceryForm] = useState(false);

  useEffect(() => {
    Axios.get(`http://localhost:8000/api/groceries/${props.id}`)
      .then((res) => setGroceryForm(res.data.results[0]))
      .catch((err) => console.log(err));
  }, [props]);

  const [errors, setErrors] = useState({
    name: "",
    amount: 0,
    unit: "",
    category: "",
    user_id: "",
  });

  const handleChange = (e) => {
    setGroceryForm({
      ...groceryForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.put(`http://localhost:8000/api/groceries/${props.id}`, groceryForm)
      .then((res) => navigate("/list"))
      .catch((err) => {
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <>
      {groceryForm ? (
        <GroceryForm
          inputs={groceryForm}
          title="Edit Item"
          submitValue="Update"
          handleInputChange={handleChange}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

export default Edit;
