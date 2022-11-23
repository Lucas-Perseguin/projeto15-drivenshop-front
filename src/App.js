import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './Pages/SignUp.js';
import './Assets/Global.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastro" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
