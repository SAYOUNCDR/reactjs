import { useRef } from "react";
export const Refuse = () => {
  const inputElement = useRef(null);
  const focusInput = () => {
    inputElement.current.focus(); //Whenever button is clicked input area will be focused
    inputElement.current.value = "Sayoun"; //On clicking automatically writes Sayoun into input box
  };
  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={() => focusInput()}>Fous $ write Sayoun</button>
    </div>
  );
};
