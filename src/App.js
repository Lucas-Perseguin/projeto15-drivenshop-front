import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutDefault from './Layouts/LayoutDefault';
import Cart from './Pages/Cart/Cart';
import Login from './Pages/Login/Login';
import Product from './Pages/Product/Product';
import SignUp from './Pages/SignUp/SignUp';
import MainPage from './Pages/Main/MainPage';
import SearchPage from './Pages/Search/SearchPage';

export default function App() {
  return (
    <BrowserRouter>
      <LayoutDefault>
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/search" element={<SearchPage />}/>
          <Route path="/login" exact element={<Login />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/produto/:productId" element={<Product />} />
          <Route path="/produtos/:type" element={<></>} />
          <Route path="/carrinho" element={<Cart />} />
        </Routes>
      </LayoutDefault>
    </BrowserRouter>
  );
}
