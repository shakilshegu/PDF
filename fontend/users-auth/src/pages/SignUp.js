import React,{useState,useEffect} from "react";
import axios from 'axios'
import { Axios } from "../api/axioslnstance";

const SignUp = () => {
 const [fromData,setFromData] = useState({
  email:"",
  password:"",
  name:"",
 })

 const HandleLogin = async (e) => {
  try {
    e.preventDefault();
    const {name,email,password} = fromData;
    const response = await Axios.post(`signup`,{

    })

  } catch (error) {
    
  }
 }


  return (
    <div className="w-full h-screen flex">
      <div className="w-[50%] h-[100%] bg-black text-white flex justify-center items-center">
        <form className="text-center border rounded-lg w-[600px] h-[400px] p-9">
          <label>Email</label>
          <br />
          <input type="text" name="email" value={fromData.email}  onChange={(e) =>{
            setFromData({...fromData,email:e.target.value})
          }} className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2" />
          <br />
          <br />
          <label>Username</label>
          <br />
          <input type="text" name="name" value={fromData.name} onChange={(e) => {
            setFromData({...fromData,name:e.target.value})
          }} className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2" />
          <br />
          <br />
          <label>password</label>
          <br />
          <input type="text" name="password" value={fromData.password} onChange={(e) =>{setFromData({...fromData,password:e.target.value})
          }} className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2" />
          <br />
          <br />
          <button className="w-[200px] h-[50px] rounded-xl bg-zinc-300 p-2">Sign Up</button>
        </form>
      </div>
      <div className="w-[50%] h-[100%] flex justify-center items-center bg-slate-600 ">
       <h2 className="text-3xl text-white"> Sign  Up</h2>
      </div>
    </div> 
  );
};

export default SignUp;
