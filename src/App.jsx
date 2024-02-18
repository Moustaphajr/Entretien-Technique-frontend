import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./components/Product/ProductDetail";
import AddProduct from "./components/Product/addProduct";
import GetProduct from "./components/Product/getProduct";
import UpdateProduct from "./components/Product/updateProduct";
import AddUser from "./components/User/addUser";
import GetUser from "./components/User/getUser";
import UpdateUser from "./components/User/updateUser";
import UserDetail from "./components/User/userDetail";
import Navbar from "./components/ui/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<GetProduct />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        <Route path="/updateProduct/:id" element={<UpdateProduct />} />
        <Route path="/users" element={<GetUser />} />
        <Route path="/getOneUser/:id" element={<UserDetail />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/updateUser/:id" element={<UpdateUser />} />
      </Routes>
    </div>
  );
}
