import express from "express";
import {signup,login} from "../Controllers/AuthController.js";
const router = express.Router(); // Create an instance of the router
import {signupValidation,loginValidation} from "../Middlewares/AuthValidation.js";

// router.post("/login", (req, res) => {
//   res.send("login success");
// });
router.post('/login',loginValidation,login);
//If validate is true it will call "signup"
router.post("/signup", signupValidation, signup);

export default router;
