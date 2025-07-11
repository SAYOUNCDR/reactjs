import { useState } from "react";
export const TodoListUseState = () => {
  const [todos, SetTodos] = useState([]);
  const addFriends = () => SetTodos([...todos, "test"]);
  return (
    <div>
      <h3>Names in The list</h3>
      <p>{todos}</p>
        <label htmlFor="">Name</label>
        <input type="text" placeholder="Enter you name" />
        <button onClick={addFriends}>Add Name in the list</button>
    </div>
  );
};
