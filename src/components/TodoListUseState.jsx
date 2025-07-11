import { useState } from "react";
export const TodoListUseState = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };
  const handleChanage = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChanage}
          placeholder="Enter todo"
        />
        <button type="submit">Add Todo</button>
      </form>

      <ul>
        {todos.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ul>
    </div>
  );
};
