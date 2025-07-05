import { Arrayobj } from "./components/Arrayobj";
import { Greetings } from "./components/Greetings";
import JSXRules from "./components/JSXRules";
import { List } from "./components/List";
import { ProductInfo } from "./components/ProductInfo";
import { PropsChild } from "./components/PropsChild";

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
      <PropsChild
        name="Sayoun"
        gmail="0xSYN.dev@gmail.com"
      />
    </div>
  );
};

export default App;
