import { useId } from "react";

export const UniqueID = () => {
  const id = useId();
  return (
    <div>
      <label htmlFor={`${id}-email`}>Email</label>
      <input type="text" id={`${id}-email`} />

      <br />
      <label htmlFor={`${id}-password`}>Password</label>
      <input type="password" id={`${id}-password`} />
    </div>
  );
};
