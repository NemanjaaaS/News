import UserCard from "../components/UserCard";
import axios from "axios";
import { useState, useEffect } from "react";
import NavbarGlavniUrednik from "../components/navbars/NavbarGlavniUrednik";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const result = await axios.get("http://localhost:8080/api/user/all");
      setUsers(result.data);
    } catch (error) {
      console.error("Error loading users:", error);
    }
  };
  console.log(JSON.stringify(users));

  return (
    <div>
      <NavbarGlavniUrednik />
      {Array.isArray(users) &&
        users.map((user) => <UserCard key={user.id} {...user} />)}
    </div>
  );
};

export default AllUsers;
