require('dotenv').config();
const express = require('express');
const bookRoute = require("./routes/Book");
const ratingRoute = require("./routes/Rating");
const userRoute = require("./routes/User");
const connectDB = require('./config/database');

const app = express();
const port = process.env.PORT || 3000;

// Connect to the database
connectDB();
app.use(express.json());

// Middleware to parse JSON
app.use('/api/user', userRoute);
app.use('/api/ratings', ratingRoute);
app.use('/api/books',bookRoute );

// Simple route
app.get('/', (req, res) => {
  res.send('Welcome to the Node.js app with MongoDB using Mongoose!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
