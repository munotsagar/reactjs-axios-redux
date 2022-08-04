import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setUsers(res.data);
    });
  }, []);
  if (!users) return "No user!";

  return (
    <div>
      <h1>Users</h1>
      <div>
        {users &&
          users.map((user) => {
            return <div key={user.id}>{user.title}</div>;
          })}
      </div>
    </div>
  );
};

export default Users;
