import { Arrayobj } from "./components/Arrayobj";
import { Greetings } from "./components/Greetings";
import JSXRules from "./components/JSXRules";
import { List } from "./components/List";
import { ProductInfo } from "./components/ProductInfo";

//Components inside a component
const App = () => {
  return (
    <div>
      <JSXRules />
      <Greetings />
      <ProductInfo />
      <List />
      <Arrayobj />
    </div>
  );
};

export default App;
