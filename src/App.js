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

// TODO: Find a way to manage quantity. Can it be an extra value in the product object? 
// Need to find a way to select the correct item in the cartItems and increase it's objects quantity - this function can go on the + button.
// TODO: map over cartItems to create cards inside the cart component for everything in the cart
