import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Homepage from "./components/Home/homepage";
import Login from "./components/Login/login";
import ProductDetails from "./components/productDetails/productDetails";
import Register from "./components/Register/register";

function App() {
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/productdetails/:product_id"
            element={<ProductDetails />}
          />
        </Routes>
    </div>
  );
}

export default App;
