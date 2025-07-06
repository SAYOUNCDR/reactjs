import { useState } from "react";
export const StatesHooks = () => {
  const [count, setcount] = useState(0);
  const increment = () => setcount(count + 1);
  const decrement = () => setcount(count - 1);

  const [friends, setFriends] = useState(["Sayoun", "Alex", "John", "Michel"]);
  const addNewFriend = () => setFriends([...friends, "New Friend"]);
  const removeFriend = () => setFriends(friends.filter((f) => f != "John"));
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

      {friends.map((f) => (
        <li key={Math.random()}>{f}</li>
      ))}

      <button onClick={addNewFriend}>Add new friend</button>
      <button onClick={removeFriend}>Remove friend</button>
    </div>
  );
};
