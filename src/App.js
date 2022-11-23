import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutDefault from "./Layouts/LayoutDefault";
import Login from "./Pages/Login/Login";

export default function App() {
  return (
    <BrowserRouter>
      <LayoutDefault>
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/cadastro" element={<SignUp />} />
        </Routes>
      </LayoutDefault>
    </BrowserRouter>
  );
}

export default App;
