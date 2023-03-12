// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { Home } from './Home';
import { Adminpanel } from './Pages/Adminpanel';
function App() {
  return (
    <>
      <BrowserRouter>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/adminpanel" element={<Adminpanel />} />
          </Routes>
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
