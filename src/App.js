import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home";
import Nav from "./Components/Pages/Nav";
import Footer from "./Components/Pages/Footer";
import AllProduct from "./Components/Pages/AllProduct";
import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register";
import Dashboard from "./Components/Dashboard/Dashboard";
import Add from "./Components/Dashboard/Add";
import Edit from "./Components/Dashboard/Edit";
import Update from "./Components/Pages/Update";
import RequireAdmin from "./Components/Require/RequireAdmin";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/all" element={<AllProduct/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/dashboard" element={<RequireAdmin><Dashboard/></RequireAdmin>}></Route>
        <Route path="/dashboard/add" element={<Add/>}></Route>
        <Route path="dashboard/all/update/:id" element={<Update/>}></Route>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
