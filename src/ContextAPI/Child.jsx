import { useContext } from "react";
import { DataContext } from "./Parent";

export const Child = () => {
  const { name, age, email } = useContext(DataContext);

  return (
    <div>
      <h2>Data received from Parent via Context:</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};
