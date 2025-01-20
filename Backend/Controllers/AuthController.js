import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserModel } from "../Models/User.js";
import { EnvironmentVariables } from "../config/config.js";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.body);
    const user = await UserModel.findOne({ email });
    // console.log(user)
    if (user) {
      return res.status(409).json({
        message: "User is already exits,You can login",
        success: false,
      });
    }
    //Encryption of the password using 'bcrypt'
    //10 is the salt
    const Encryptedpsw = await bcrypt.hash(password, 10);
    //this model will save the details of user when they will register
    // console.log(Encryptedpsw)
    await UserModel.create({ name, email, password: Encryptedpsw });

    res.status(201).json({ message: "Signup successfully", success: true });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: err.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    const errorMsg = "Auth failed email or password is wrong";
    if (!user) {
      return res.status(403).json({ message: errorMsg, success: false });
    }
    const ipPassEqual = await bcrypt.compare(password, user.password);
    if (!ipPassEqual) {
      return res.status(403).json({ message: errorMsg, success: false });
    }
    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      EnvironmentVariables.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.status(200).json({
      message: "Login successfully",
      success: true,
      jwtToken,
      email,
      name: user.name,
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};
