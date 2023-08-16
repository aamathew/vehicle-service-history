// Import the Mongoose library
const mongoose = require('mongoose');
// Connect to the MongoDB database using the DATABASE_URL environment variable
mongoose.connect(process.env.DATABASE_URL);
// Get a reference to the database connection
const db = mongoose.connection;
// Listen for the 'connected' event and log a message when connected
db.on('connected', function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});
