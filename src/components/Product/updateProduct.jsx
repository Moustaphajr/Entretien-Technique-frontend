import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function UpdateProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");

  const [product, setProduct] = useState({});

  const navigate = useNavigate();

  const id = useParams();

  const formData = new FormData();

  formData.append("name", name);
  formData.append("price", price);
  formData.append("quantity", quantity);
  formData.append("image", image);

  const updateProduct = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/product/${id.id}`, {
        method: "PUT",
        body: formData,
      });
      const data = await response.json();
      console.log(data);
      if (data.message.includes("product updated successfully")) {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getOneProduct = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/product/" + Object.values(id).join(""),
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
  return (
    <div className="flex justify-center mt-10">
      <div className="flex space-x-10">
        <Link to={"/"}>
          <span className="text-xl"> {`<<<`} </span>
        </Link>

        <div className="w-96 h-auto   border-2 border-transparent bg-white shadow-lg  rounded-md ">
          <h1 className="text-center text-2xl">Modifier un produit</h1>
          <form
            className="mt-10"
            onSubmit={updateProduct}
            encType="multipart/form-data"
          >
            <div className="mb-3">
              <label for="" className="form-label ml-5">
                Nom
              </label>

              <input
                type="text"
                placeholder={product.name}
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
                placeholder={product.price}
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
                placeholder={product.quantity}
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
              <img
                className="w-24 h-24"
                src={`http://localhost:3000/Images/${product.image}`}
                alt=""
              />

              <input
                type="file"
                className="form-control mt-3"
                id=""
                aria-describedby=""
                defaultvalue={image}
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>

            <button className="btn btn-primary ml-5 mb-3">Modifier</button>
          </form>
        </div>
      </div>
    </div>
  );
}
