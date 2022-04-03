const mongoose = require("mongoose");

const connectionString = "mongodb://localhost:27017/johnSmilga_03-TASK-MANAGER";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("CONNECTED TO THE DB..."))
  .catch((err) => console.log(err));
