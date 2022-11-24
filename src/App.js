import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutDefault from './Layouts/LayoutDefault';
import Login from './Pages/Login/Login';
import Product from './Pages/Product/Product';
import SignUp from './Pages/SignUp/SignUp';

export default function App() {
  return (
    <BrowserRouter>
      <LayoutDefault>
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/produto/:productId" element={<Product />} />
          <Route path="/produtos/:type" element={<></>} />
        </Routes>
      </LayoutDefault>
    </BrowserRouter>
  );
}
