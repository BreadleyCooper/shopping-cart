import Home from "./components/Home"
import Products from "./components/Products"



function App() {



  return (
    <div className="App">
      <Home /> 
    </div>
  );
}

export default App;

// TODO: Figure out why the splice removeItem is not actually removing the item from state cartItems
// TODO: Maybe remove header from cart? 