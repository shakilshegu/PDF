import React,{useState,useEffect} from "react";
import axios from 'axios'

const SignUp = () => {
 const [user,setUsers]= useState([])
 const [email,setEmail] = useState('')
 const [name,setName] = useState('')
 const [password,setPassword] = useState('')



  return (
    <div className="w-full h-screen flex">
      <div className="w-[50%] h-[100%] bg-black text-white flex justify-center items-center">
        <form className="text-center border rounded-lg w-[600px] h-[400px] p-9">
          <label>Email</label>
          <br />
          <input className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2" />
          <br />
          <br />
          <label>Username</label>
          <br />
          <input className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2" />
          <br />
          <br />
          <label>password</label>
          <br />
          <input className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2" />
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
