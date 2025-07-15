import { createContext } from "react";
import { Child } from "./Child";

export const DataContext = createContext();
export const Parent = () => {
  const user = {
    name: "Sayoun",
    age: 21,
    email: "sayoun@example.com",
  };
  return (
    //   Value passed from here i.e name
    <DataContext.Provider value={user}>
      <Child />
    </DataContext.Provider>
  );
};
