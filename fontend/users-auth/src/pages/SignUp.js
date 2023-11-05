import React, { useState } from "react";
import { Axios } from "../api/axioslnstance";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();
  const [fromData, setFromData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const HandleLogin = async (e) => {
    try {
      console.log("kkoi");
      e.preventDefault();
      const response = await Axios.post(`signup`, {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
      });
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-[50%] h-[100%] bg-black text-white flex justify-center items-center">
        <form
          onSubmit={HandleLogin}
          className="text-center border rounded-lg w-[600px] h-[400px] p-9"
        >
          <label>Email</label>
          <br />
          <input
            type="text"
            name="email"
            value={fromData.email}
            onChange={(e) => {
              setFromData({ ...fromData, email: e.target.value });
            }}
            className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2"
          />
          <br />
          <br />
          <label>Username</label>
          <br />
          <input
            type="text"
            name="name"
            value={fromData.name}
            onChange={(e) => {
              setFromData({ ...fromData, name: e.target.value });
            }}
            className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2"
          />
          <br />
          <br />
          <label>password</label>
          <br />
          <input
            type="text"
            name="password"
            value={fromData.password}
            onChange={(e) => {
              setFromData({ ...fromData, password: e.target.value });
            }}
            className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2"
          />
          <br />
          <br />
          <button
            type="submit"
            className="w-[200px] h-[50px] rounded-xl bg-zinc-300 p-2"
          >
            Sign Up
          </button>
        </form>
      </div>
      <div className="w-[50%] h-[100%] flex justify-center items-center bg-slate-600 ">
        <h2 className="text-3xl text-white"> Sign Up</h2>
      </div>
    </div>
  );
};

export default SignUp;
