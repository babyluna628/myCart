import "./App.css";
import HomePage from "./components/Home/HomePage";
import Navbar from "./components/Navbar/Navbar";
import ProductsPage from "./components/Products/ProductsPage";

function App() {
  return (
    <div className="app">
      <Navbar />
      <HomePage />
      <ProductsPage />
    </div>
  );
}

export default App;
