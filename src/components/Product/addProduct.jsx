import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const formData = new FormData();

  formData.append("name", name);
  formData.append("price", price);
  formData.append("quantity", quantity);
  formData.append("image", image);

  const addProduct = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/product", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.message.includes("product created successfully")) {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex justify-center mt-10">
      <div className="flex space-x-10">
        <Link to={"/"}>
          <span className="text-xl"> {`<<<`} </span>
        </Link>
        <div className="w-96 h-auto   border-2 border-transparent bg-white shadow-lg  rounded-md ">
          <h1 className="text-center text-2xl">Ajouter un produit</h1>
          <form
            className="mt-10"
            onSubmit={addProduct}
            encType="multipart/form-data"
          >
            <div className="mb-3">
              <label for="" className="form-label ml-5">
                Nom
              </label>
              <input
                type="text"
                className="form-control"
                id=""
                aria-describedby=""
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label for="" className="form-label ml-5">
                price
              </label>
              <input
                type="Number"
                className="form-control"
                id=""
                aria-describedby=""
                value={price}
                name="price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label for="" className="form-label ml-5">
                quantity
              </label>
              <input
                type="Number"
                className="form-control"
                id=""
                aria-describedby=""
                value={quantity}
                name="quantity"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label for="" className="form-label ml-5">
                image
              </label>
              <input
                type="file"
                className="form-control"
                id=""
                aria-describedby=""
                defaultValuevalue={image}
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>

            <button className="btn btn-primary ml-5 mb-3">Enregistrer</button>
          </form>
        </div>
      </div>
    </div>
  );
}
