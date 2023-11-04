import React from 'react'

const Login = () => {
  return (
    <div>
         <div className="w-full h-screen flex">
      <div className="w-[50%] h-[100%] bg-black text-white flex justify-center items-center">
        <form className="text-center border rounded-lg w-[600px] h-[400px] p-9">
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
       <h2 className="text-3xl text-white"> Login In </h2>
      </div>
    </div>  
    </div>
  )
}

export default Login
