// const mongoose = require('mongoose');

// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://localhost:27017/phone-directory',
// {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// },
// );

// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log('MongoDB database connection established successfully')
// });

// module.exports = mongoose.connection;

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
