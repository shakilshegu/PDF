import React,{useState,useEffect} from "react";
import {Link } from "react-router-dom";
import {Axios} from "../api/axioslnstance"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ name: "", email: "" });
  
  const usertoken = localStorage.getItem("token");
  const headers = { authorization: usertoken };
  
  const getData = async ()=>{
    try {
      const response = await Axios.post(`getUser`,{},{headers})
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getData()
  },[])

  const handleLogout = (e) =>{
    e.preventDefault();
    navigate("/login")
    localStorage.removeItem("token");

  }

  return (
      <nav className="flex justify-around p-3 border-b border-zinc-800 items-center bg-slate-800 text-zinc-200">
        <Link to="/">
          <h1 className="text-red-600 text-3xl">PDF</h1>
        </Link>
        
        <ul className="flex gap-6">
        <p>{data.name}</p>
          <Link to="/login" onClick={handleLogout}> {usertoken ? "Logout" : "Login"}</Link>
          {data.name ? null :<Link to="/signup">SignUp</Link>} 
        </ul>
      </nav>
  );
};

export default Navbar;
