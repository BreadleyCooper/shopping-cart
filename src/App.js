import Home from "./components/Home"


function App() {


  return (
    <div className="App">
      <Home /> 
    </div>
  );
}

export default App;

// TODO: Cart item amount is not persisting on the Home component because it's state is only in the Products component, Set up shopping cart in state (or props?), Set up cart component and routing link to cart button