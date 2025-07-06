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

//Importing css
import "./index.css";
//Components inside a component
const App = () => {
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
    </div>
  );
};

export default App;
