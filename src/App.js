// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { Adminpanel } from './Pages/Adminpanel';
import { Userpanel } from './Pages/Userpanel';
function App() {
  return (
    <>
      <BrowserRouter>
        <>
          <Routes>
            <Route path="/userpanel" element={<Userpanel />} />
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
