import React from "react";
import { Link } from "react-router-dom";
export default function ProductList({ Products }) {
  return (
    <div className=" w-full flex justify-center">
      <div>
        <h1 className="text-center text-2xl mt-8">Liste des produits</h1>
        <div className="grid grid-cols-3 gap-10 mt-10">
          {Object.values(Products).map((product) => (
            <div className="w-80 h-64   border-2 border-transparent bg-white shadow-lg  rounded-md">
              <div className=" mt-2 ml-6 flex items-center space-x-2">
                <img
                  className="w-24 h-24 rounded-full "
                  src={`http://localhost:3000/Images/${product.image}`}
                  alt=""
                />
                <h1 className="mt-2">nom du produit : {product.name}</h1>
              </div>
              <div className="ml-10 ">
                <h1 className="mt-2">prix du produit : {product.price}</h1>
                <h1 className="mt-2">
                  quantite du produit : {product.quantity}
                </h1>
              </div>
              <div className=" flex justify-between mt-8">
                <Link to={`/productDetail/${product._id}`} className="mr-10">
                  <button className="btn btn-primary ml-10 w-24">Voir</button>
                </Link>

                <Link to={`/updateProduct/${product._id}`}>
                  <button className="btn btn-success mr-10 w-24">
                    Modifier
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
