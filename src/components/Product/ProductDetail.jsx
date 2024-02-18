import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function ProductDetail() {
  const [product, setProduct] = useState({});
  const _id = useParams();

  const navigate = useNavigate();

  const getOneProduct = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/product/" + Object.values(_id).join(""),
        {
          method: "GET",
        }
      );
      const data = await response.json();
      console.log(data);

      if (data.product) {
        setProduct(data.product);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getOneProduct();
  }, []);

  const deleteProducts = async (id) => {
    try {
      const response = await fetch("http://localhost:3000/product/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.message.includes("Product deleted successfully")) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="w-96 h-64   border-2 border-transparent bg-white shadow-lg  rounded-md">
        <div className=" mt-2 ml-6 flex items-center space-x-2">
          <img
            className="w-24 h-24 rounded-full "
            src={`http://localhost:3000/Images/${product.image}`}
            alt=""
          />
          <h1 className="mt-2">nom du produit : {product.name}</h1>
        </div>
        <div className="ml-10 flex flex-col items-center">
          <h1 className="mt-2">prix du produit : {product.price}</h1>
          <h1 className="mt-2">quantite du produit : {product.quantity}</h1>
        </div>
        <div className=" flex justify-center mt-8">
          <Link className="mr-10">
            <button
              className="btn btn-danger"
              onClick={() => deleteProducts(product._id)}
            >
              Supprimer
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
