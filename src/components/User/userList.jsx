import React from "react";
import { Link } from "react-router-dom";

export default function UserList({ users }) {
  return (
    <div className=" w-full flex justify-center">
      <div>
        <h1 className="text-center text-2xl mt-8">Liste des utilisateurs</h1>
        <div className="grid grid-cols-3 gap-10 mt-10">
          {Object.values(users)?.map((user) => (
            <div className="w-80 h-56   border-2 border-transparent bg-white shadow-lg  rounded-md">
              <div className="ml-10 ">
                <h1 className="mt-2">firstname : {user.firstname}</h1>
                <h1 className="mt-2"> lastname: {user.lastname}</h1>
                <h1 className="mt-2">adress : {user.adress}</h1>
              </div>
              <div className=" flex justify-between mt-8">
                <Link to={`/getOneUser/${user._id}`} className="mr-10">
                  <button className="btn btn-primary ml-10 w-24">Voir</button>
                </Link>

                <Link to={`/updateUser/${user._id}`}>
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
