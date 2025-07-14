//Importing css
import "./index.css";
import { useState } from "react";
import { Arrayobj } from "./components/Arrayobj";
import { ChildrenProp } from "./components/ChildrenProp";
import { ConditionalRender } from "./components/ConditionalRender";
import { EventHandler } from "./components/EventHandler";
import { Greetings } from "./components/Greetings";
import JSXRules from "./components/JSXRules";
import { List } from "./components/List";
import { ProductInfo } from "./components/ProductInfo";
import { PropsChild } from "./components/PropsChild";
import { StatesHooks } from "./components/StatesHooks";
import { Styling } from "./components/Styling";
import { Comp1 } from "./components/Comp1";
import { Comp2 } from "./components/Comp2";
import { ArrowUseState } from "./components/ArrowUseState";
import { CntExUseState } from "./UseStates/CntExUseState";
import { TodoListUseState } from "./components/TodoListUseState";
import { Profile } from "./UseStates/profile";
import ShoppingList from "./UseStates/ShoppingList";
import StateEffect from "./UseStates/StateEffect";
import Modal from "./Portals/Modal";

//Components inside a component
const App = () => {
  const [count, setCount] = useState(0);
  // For Protal modal useState
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <JSXRules />
      <Greetings />
      <ProductInfo />
      <List />
      <Arrayobj />

      {/* Passing Props to child components */}
      <PropsChild name="Sayoun" gmail="0xSYN.dev@gmail.com" />

      {/* Opening and closing JSX tags */}
      <ChildrenProp>
        <h1>Hello from App JSX</h1>
        <p>Passing arguments as props from app.jsx to ChildrenProps</p>
      </ChildrenProp>

      {/* Passing prop for Conditional rendering */}
      <ConditionalRender isvalid={true} />

      <Styling />
      <EventHandler />
      <StatesHooks />

      <Comp1 count={count} onClickHandler={() => setCount(count + 1)} />
      <Comp2 count={count} onClickHandler={() => setCount(count + 1)} />

      <ArrowUseState />

      {/* Usestate exercises */}
      <CntExUseState />
      <TodoListUseState />
      <Profile />
      <ShoppingList />

      {/* UseState and UseEffect perfect example */}
      <StateEffect />

      {/* For Modal portal */}
      <button onClick={() => setShowModal(true)}>Open modal</button>
      {showModal && (
        <Modal>
          <div>
            <h2 style={{ color: "black" }}>I am a Portal Modal</h2>
            <button onClick={() => setShowModal(false)}>Close Modal</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default App;
