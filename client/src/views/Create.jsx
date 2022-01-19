
import { useState } from 'react';
import Axios from 'axios';
import GroceryForm from '../components/groceryForm';
import { navigate } from '@reach/router';

const Create = props => {
    const [groceryForm, setGroceryForm] = useState({
        name: "",
        amount: 0,
        unit: "",
        category: "",
        user_id: "",
    })

    const [errors,setErrors] = useState({
        name: "",
        amount: 0,
        unit: "",
        category: "",
        user_id: ""
    }) 

    const handleChange = e => {
        setGroceryForm({
            ...groceryForm,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        Axios.post("http://localhost:8000/api/groceries", groceryForm)
            .then(res => navigate('/'))
            .catch(err => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }

    return(
        <>
            <GroceryForm
                inputs={groceryForm}
                title="Add Item"
                submitValue="Save"
                handleInputChange={handleChange}
                handleSubmit={handleSubmit}
                errors={errors}
            />
        </>
    )
}

export default Create;