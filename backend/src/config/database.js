const mongoose = require('mongoose');

// Connection URL (replace <dbname> with your database name)
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
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
