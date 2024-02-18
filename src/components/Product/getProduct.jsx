import React, { useEffect, useState } from "react";
import Sidebar from "../ui/Sidebar";
import ProductList from "./productList";

export default function GetProduct() {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "GET",
      });
      const data = await response.json();
      console.log(data);
      setProducts(data.product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className="flex gap-10">
        <Sidebar />
        <ProductList Products={Products} />
      </div>
    </div>
  );
}
