import "./App.css";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

function App() {
  const user = true;
  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={ user ? <Navigate to="/"/> : <Login />}/>
        <Route path="/register" element={user ? <Navigate to="/"/> : <Register />} />
      </Routes>
  ); 
}
 
export default App;
