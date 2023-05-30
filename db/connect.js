const mongoose = require('mongoose');

// const connectDB = (url) => {
//   return mongoose.connect(url);
// };
// export default connectDB;

// const connectDB = mongoose
//   .connect(url)
//   .then(() => console.log('DB connections successful!'));

// export default connectDB;
const url = process.env.MONGO_URL;
const connectDB = mongoose
  .connect(url)
  .then(() => console.log('DB connections successful!'));

module.exports = connectDB;
