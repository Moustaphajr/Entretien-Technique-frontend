import React, { useEffect, useState } from "react";
import Sidebar from "../ui/Sidebar";
import UserList from "./userList";

export default function GetUser() {
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "GET",
      });
      const data = await response.json();
      console.log(data.user);

      if (data.message.includes("user fetched successfully")) {
        setUsers(data.user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <div className="flex gap-10">
        <Sidebar />
        <UserList users={users} />
      </div>
    </div>
  );
}
