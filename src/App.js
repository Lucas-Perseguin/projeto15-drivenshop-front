import { BrowserRouter, Route, Routes } from "react-router-dom";
import IsLoggedInProvider from "./Context/isLoggedInContext";
import LayoutDefault from "./Layouts/LayoutDefault";
import Cart from "./Pages/Cart/Cart";
import Login from "./Pages/Login/Login";
import Product from "./Pages/Product/Product";
import ProductBySale from "./Pages/ProductBySale/ProductBySale";
import ProductByType from "./Pages/ProductByType/ProductByType";
import SignUp from "./Pages/SignUp/SignUp";

export default function App() {
  return (
    <IsLoggedInProvider>
      <BrowserRouter>
        <LayoutDefault>
          <Routes>
            <Route path="/login" exact element={<Login />} />
            <Route path="/cadastro" element={<SignUp />} />
            <Route path="/produto/:productId" element={<Product />} />
            <Route path="/produtos/:type" element={<ProductByType />} />
            <Route path="/produtos/:type/sale" element={<ProductBySale />} />
            <Route path="/carrinho" element={<Cart />} />
          </Routes>
        </LayoutDefault>
      </BrowserRouter>
    </IsLoggedInProvider>
  );
}
