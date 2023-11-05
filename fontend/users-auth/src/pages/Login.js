import React, { useState } from 'react'
import toast from "react-hot-toast"
import {Axios} from "../api/axioslnstance"
import {useNavigate } from "react-router-dom";



const Login = () => {
  const navigate = useNavigate();
   const [fromData,setFormData] = useState({
       email:"",
       password:"",
   })
   const handleLogin = async (e) => {
    try {
    e.preventDefault();
    const response = await Axios.post(`login`,{
      email: e.target.email.value,
        password: e.target.password.value,
    })
    if(response.data.success){
      toast.success(response.data.message)
      localStorage.setItem("token",response.data.token)
      navigate("/")
    }else{
      toast.error(response.data.message);
    }
    } catch (error) {
      toast.error("Something went wrong");
    }
   }

  return (
    <div>
         <div className="w-full h-screen flex">
      <div className="w-[50%] h-[100%] bg-black text-white flex justify-center items-center">
        <form onSubmit={handleLogin} action='' className="text-center border rounded-lg w-[600px] h-[400px] p-9">
          <label>Email</label>
          <br />
          <input type="email" name='email' value={fromData.email} onChange={(e) =>{
            setFormData({...fromData,email:e.target.value})
          }} className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2" />
          <br />
          <br />
          <label>password</label>
          <br />
          <input type='text' name='password' value={fromData.password} onChange={(e)=>{
            setFormData({...fromData,password:e.target.value})
          }} className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2" />
          <br />
          <br />
          <button type='submit' className="w-[200px] h-[50px] rounded-xl bg-zinc-300 p-2">Sign Up</button>
        </form>
      </div>
      <div className="w-[50%] h-[100%] flex justify-center items-center bg-slate-600 ">
       <h2 className="text-3xl text-white"> Login In </h2>
      </div>
    </div>  
    </div>
  )
}

export default Login
