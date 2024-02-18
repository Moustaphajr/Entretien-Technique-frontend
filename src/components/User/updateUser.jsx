import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function UpdateUser() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [adress, setAdress] = useState("");

  const [user, setUser] = useState({});

  const id = useParams();

  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3000/user/" + Object.values(id).join(""),
        {
          method: "PUT",
          body: JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            adress: adress,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
      if (data.message.includes("user updated successfully")) {
        navigate("/users");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getOneUser = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/user/" + Object.values(id).join(""),
        {
          method: "GET",
        }
      );
      const data = await response.json();
      console.log(data);

      if (data.message.includes("user fetched successfully")) {
        setUser(data.user);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getOneUser();
  }, []);

  return (
    <div className="flex justify-center mt-10">
      <div className="flex space-x-10">
        <Link to={"/"}>
          <span className="text-xl"> {`<<<`} </span>
        </Link>
        <div className="w-96 h-auto   border-2 border-transparent bg-white shadow-lg  rounded-md ">
          <h1 className="text-center text-2xl">Modifier un utilisateur</h1>
          <form className="mt-10" onSubmit={handleUpdate}>
            <div className="mb-3">
              <label for="" className="form-label ml-5">
                firstname
              </label>
              <input
                placeholder={user.firstname}
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
                placeholder={user.lastname}
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
                placeholder={user.adress}
                type="text"
                value={adress}
                onChange={(e) => setAdress(e.target.value)}
                className="form-control"
                id=""
                aria-describedby=""
              />
            </div>

            <button className="btn btn-primary ml-5 mb-3">Modifier</button>
          </form>
        </div>
      </div>
    </div>
  );
}
