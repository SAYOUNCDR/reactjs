import { useState, useEffect } from "react";

const StateEffect = () => {
  const [users, setUsers] = useState([]);
  const [loding, setLoding] = useState(true);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();
        setUsers(data);
        setLoding(false);
      } catch (err) {
        console.log("Error caught");
      }
    };
    fetchUsers();
  }, []);
  return (
    <div>
      <h2>Users List from api</h2>
      {loding ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StateEffect;
