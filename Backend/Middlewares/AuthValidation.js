import Joi from "joi";

//Signup Validation
const signupValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(100).required(),
  });

  //To validate req.body
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "Bad request", error });
  }
  //if there is no error it will call next function
  next();
};

//Login Validation
const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(100).required(),
  });

  //To validate req.body
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "Bad request", error });
  }

  //if there is no error it will call next function
  next();
};

export { signupValidation, loginValidation };
