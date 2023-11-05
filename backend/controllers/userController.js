import User from "../model/userModel.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res
        .status(400)
        .json({ message: "User already exists", success: false });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    console.log(user, "koooi");
    await user.save();
    res
      .status(201)
      .send({ message: "User created successfully", success: true });
  } catch (error) {
    res.status(500).send({ message: "Error signing up", success: false });
  }
};

const getUsers = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      res.status(201).send({ message: "User not found", success: false });
    } else {
      res.status(200).send({
        success: true,
        data: {
          name: user.name,
          email: user.email,
        },
      });
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error getting user info", success: false, error });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(200).send({ message: "Invalid user", success: false });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(200)
        .send({ message: "password not match", success: false });
    }
    const token = Jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1hr",
    });
    res.send({
      message: "Login Successful",
      token,
      userId: user._id,
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", success: false });
  }
};

export { register, getUsers, login };
