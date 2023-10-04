import "./styles.css";
import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";

export default function App() {
  const [cartItems, setCartItems] = [];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item !== product));
  };
  return (
    <div className="App">
      <Navbar />
      <h1>Welcome to daru lele </h1>
      <h2>Jaldi se le</h2>

      <ProductsList addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
}
