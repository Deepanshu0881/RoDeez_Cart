const jwt = require("jsonwebtoken");
const User = require("../models/User");

const login = async (req, res) => {
  console.log("Login");
  let success = false;
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    const passCompare = req.body.password === user.password;
    if (passCompare) {
      const data = { user: { id: user.id } };
      success = true;
      const token = jwt.sign(data, 'secret_ecom');
      return res.json({ success, token });
    } else {
      return res.status(400).json({ success, errors: "Please try with correct email/password" });
    }
  } else {
    return res.status(400).json({ success, errors: "Please try with correct email/password" });
  }
};

const signup = async (req, res) => {
  console.log("Sign Up");
  let success = false;
  let check = await User.findOne({ email: req.body.email });
  if (check) {
    return res.status(400).json({ success, errors: "Existing user found with this email" });
  }
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  const user = new User({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });
  await user.save();
  const data = { user: { id: user.id } };
  const token = jwt.sign(data, 'secret_ecom');
  success = true;
  res.json({ success, token });
};

module.exports = { login, signup };
