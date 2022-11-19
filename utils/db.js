const mongoose = require("mongoose");

const DB_URL =
    "mongodb+srv://tanwarAalok:kyloapps@cluster0.8kuaxur.mongodb.net/?retryWrites=true&w=majority";
  
const connectDatabase = () => {
  mongoose
    .connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`>>>>>>> Mongodb connected with server ${data.connection.host} <<<<<<<<<<<`);
    });
};

module.exports = connectDatabase;