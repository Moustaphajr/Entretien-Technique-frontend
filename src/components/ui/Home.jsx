import React from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";

export default function Home() {
  return (
    <div>
      <div className="flex justify-between">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}
