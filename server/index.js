const { configDotenv } = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
configDotenv()

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to DB");
}).catch(err=>console.log(err))

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} LoL`);
});
