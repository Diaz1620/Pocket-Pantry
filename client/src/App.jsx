import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.js";
import "material-icons/iconfont/material-icons.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Link } from "@reach/router";
import NavBar from "./components/navBar";
import GroceryForm from "./components/groceryForm";
import GlobalState from "./context/globalState";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GroceryList from "./components/groceryList";
import Main from "./views/Main";
import Create from "./views/Create";
import Edit from "./views/Edit";
import UserLoginPage from "./components/userLoginPage";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      {/* <div className="d-flex col-6 mx-auto justify-content-around flex-wrap">
        <Link to="/">List</Link>
        <Link to="/new">Add Item</Link>
      </div> */}
      <Router>
        <Main path="/list" />
        <Create path="/new" />
        <Edit path="/edit/:id" />
        <UserLoginPage path="/" />
      </Router>
    </div>
  );
}

export default App;

// <GlobalState>
//   <BrowserRouter>
//     <div className="App">
//       <NavBar></NavBar>

//       <div className="container">
//         <Routes>
//           <Route path="/" exact element={<GroceryForm />} />
//           <Route path="/list" exact element={<GroceryList />} />
//         </Routes>
//       </div>
//     </div>
//   </BrowserRouter>
// </GlobalState>
