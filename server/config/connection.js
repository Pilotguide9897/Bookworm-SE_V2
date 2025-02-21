const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Pilotguide9897:JaRyGn97@cluster0.es2k8ab.mongodb.net/BookwormSE?retryWrites=true&w=majority&appName=Cluster0" ||
      "mongodb://127.0.0.1:27017/googlebooks"
  )
  .then(() => {
    console.info("Connected to the DB");
  })
  .catch((e) => {
    console.log("Error:", e);
  });

module.exports = mongoose.connection;
