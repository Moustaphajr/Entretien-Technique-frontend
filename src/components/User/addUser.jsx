import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [adress, setAdress] = useState("");

  const navigate = useNavigate();

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/user", {
        method: "POST",
        body: JSON.stringify({
          firstname: firstname,
          lastname: lastname,
          adress: adress,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      if (data.message.includes("user created successfully")) {
        navigate("/users");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="flex space-x-10">
        <Link to={"/"}>
          <span className="text-xl"> {`<<<`} </span>
        </Link>
        <div className="w-96 h-auto   border-2 border-transparent bg-white shadow-lg  rounded-md ">
          <h1 className="text-center text-2xl">Ajouter un utilisateur</h1>
          <form className="mt-10" onSubmit={handleAdd}>
            <div className="mb-3">
              <label for="" className="form-label ml-5">
                firstname
              </label>
              <input
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className="form-control"
                id=""
                aria-describedby=""
              />
            </div>
            <div className="mb-3">
              <label for="" className="form-label ml-5">
                lastname
              </label>
              <input
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                className="form-control"
                id=""
                aria-describedby=""
              />
            </div>
            <div className="mb-3">
              <label for="" className="form-label ml-5">
                address
              </label>
              <input
                type="text"
                value={adress}
                onChange={(e) => setAdress(e.target.value)}
                className="form-control"
                id=""
                aria-describedby=""
              />
            </div>

            <button className="btn btn-primary ml-5 mb-3">Enregister</button>
          </form>
        </div>
      </div>
    </div>
  );
}
