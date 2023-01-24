import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

// TODO: Add functions to Add to Cart button, Set up shopping cart in state (or props?), CSS - grid for products.