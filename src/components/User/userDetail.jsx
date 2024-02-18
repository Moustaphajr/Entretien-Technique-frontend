import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function UserDetail() {
  const [user, setUser] = useState({});
  const _id = useParams();

  const navigate = useNavigate();

  const getOneUser = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/user/" + Object.values(_id).join(""),
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

  const deleteUser = async (id) => {
    try {
      const response = await fetch("http://localhost:3000/user/" + id, {
        method: "DELETE",
      });
      const data = await response.json();
      if (data.message.includes("user deleted successfully")) {
        navigate("/users");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-center mt-10 text-2xl">Détail sur l'utilisateur</h1>
      <div className="flex justify-center mt-20">
        <div className="w-64 h-40   border-2 border-transparent bg-white shadow-lg  rounded-md">
          <div className="flex flex-col items-center ">
            <h1 className="mt-2">firstname : {user.firstname}</h1>
            <h1 className="mt-2"> lastname:{user.lastname}</h1>
            <h1 className="mt-2"> adress:{user.adress}</h1>
          </div>
          <div className=" flex justify-center mt-4  ">
            <Link className="">
              <button
                className="btn btn-danger "
                onClick={() => deleteUser(user._id)}
              >
                Supprimer
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
