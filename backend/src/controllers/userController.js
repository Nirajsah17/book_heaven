const User = require("../models/User");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  
  try {
    let user = await User.findOne({ email });
    console.log(user);
    if (user) return res.status(400).send("User already exists");
    user = new User({ name, email, password });
    await user.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const verificationLink = `http://localhost:3000/api/user/verify-email?token=${token}`;
    res
      .status(201)
      .send({msg:"User registered. Please check your email to verify your account.", 
        verificationLink
      });
  } catch (error) {
    res.status(500).send({msg: "Server error", err: error});
  }
};

const verifyEmail = async (req, res) => {
  const token = req.query.token;
  if (!token) return res.status(400).send("Invalid token");

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    await User.findByIdAndUpdate(verified.id, { verified: true });
    res.send("Email verified successfully");
  } catch (error) {
    res.status(400).send("Invalid or expired token");
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send("Invalid credentials");
    
    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).send("Invalid credentials");

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.cookie("token", token, { httpOnly: true });
    res.send("Logged in successfully");
  } catch (error) {
    res.status(500).send("Server error");
  }
};

const logout = (req, res) => {
  res.clearCookie("token");
  res.send("Logged out successfully");
};

module.exports = {
  registerUser,
  verifyEmail,
  login,
  logout
};
