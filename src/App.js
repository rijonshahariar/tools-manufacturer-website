import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register'
import NavBar from './Components/Shared/Navbar/Navbar';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} >


        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
