import React from "react";
import { Link } from "react-router-dom";
import { items } from "../shared/Element";
export default function Sidebar() {
  return (
    <div className="mt-0 w-80 border-2 border-transparent bg-blue-500 h-screen ">
      <h1 className="text-center text-white text-2xl py-3">Dashboard</h1>
      <div>
        {items.map((item) => (
          <ul>
            <li className="mt-10">
              <Link
                className=" flex items-center ml-2 space-x-3 text-white  "
                to={item.url}
              >
                {item.icons}
                {item.name}
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
