import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { Adminpanel } from './Pages/Adminpanel';
import { Userpanel } from './Pages/Userpanel';
import { Profile } from './Pages/Profile';
function App() {
  return (
    <>
      <BrowserRouter>
        <>
          <Routes>
            <Route path="/" element={<Userpanel />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/adminpanel" element={<Adminpanel />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
