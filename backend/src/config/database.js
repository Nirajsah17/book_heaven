const mongoose = require('mongoose');

const dbURI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,       // Parses MongoDB connection string properly
      useUnifiedTopology: true,    // Uses the new Server Discover and Monitoring engine
    });
    console.log('MongoDB connected successfully.');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
