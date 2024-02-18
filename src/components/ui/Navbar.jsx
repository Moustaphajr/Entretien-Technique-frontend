import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand text-white fw-bold " to="/">
            <img src="./logo.png" alt="" />
          </Link>
        </div>
      </nav>
    </div>
  );
}
