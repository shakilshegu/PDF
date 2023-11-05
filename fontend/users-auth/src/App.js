import { Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Toaster position="top-center" role="status" />
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/login' element={<Login/>}> </Route>
        <Route path='/signup' element={<SignUp/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
