import { Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/login' element={<Login/>}> </Route>
        <Route path='/signup' element={<SignUp/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
