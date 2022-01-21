import { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "@reach/router";
import Modal from "../components/modal";

const Main = (props) => {
  const [groceries, setGroceries] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:8000/api/groceries")
      .then((res) => setGroceries(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return groceries ? (
    <>
      <div className="grocery-list">
        <h1>Inventory</h1>
        <h6>Here's what you got</h6>

        <table className="centered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Unit</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {groceries.map((g, i) => {
              return (
                <tr key={i}>
                  <td>{g.name}</td>
                  <td>{g.amount}</td>
                  <td>{g.unit}</td>
                  <td>{g.category}</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <Link to={`/edit/${g._id}`} className="btn btn-primary">
                        Edit
                      </Link>
                      <span className="p-1" />
                      <button className="btn btn-danger">Delete</button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Modal></Modal>
    </>
  ) : (
    <>
      <h2>Loading...</h2>
    </>
  );
};

export default Main;
