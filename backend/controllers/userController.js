import User from "../model/userModel.js";
import bcrypt from 'bcrypt'
import Jwt  from "jsonwebtoken";

const register = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const userExist = await User.findOne({ email });
      if (userExist) {
        return res.status(400).json({ message: "User already exists", success: false });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({
        name,
        email,
        password: hashedPassword,
      });
      console.log(user,"koooi");
      await user.save();
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error signing up' });
    }
  };

  const getUsers = async (req, res) =>{
    try {
      const users = await User.find()
      res
      .status(201)
      .json(users)
    } catch (error) {
      res
      .status(500)
      .json({error:"Unable to get users"})
    }
  }

  const login = async (req,res) =>{
    try {
      const {name,password} = req.body
      const user = await User.findOne({name})
      if(!user){
        return res.status(401).json({error:"Invalid credential"})
      }
      const isPasswordValid = await bcrypt.compare(password,user.password)
      if(!isPasswordValid){
        return res.status(401).json({error:"Invalid credentials"})
      }
      const token = Jwt.sign({userId:user._id},process.env.SECRET_KEY,{expiresIn:"1hr"})
      res.json({message:'Login Successful'})
    } catch (error) {
      res.status(500).json({error:"Error logging in"})
    }
  }
  
export  {
    register,
    getUsers,
    login
}