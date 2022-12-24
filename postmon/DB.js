const mongoose = require("mongoose");

const uri =
  "mongodb+srv://khaliuna:khaliun123@cluster0.bvfwd9e.mongodb.net/?retryWrites=true&w=majority";
const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
};
mongoose.set('strictQuery', true);
module.exports = connect;