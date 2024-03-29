const express = require("express"); 
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const usersRoute = require("./routes/user");

dotenv.config();

// Kết nối cơ sở dữ liệu MongoDB
mongoose.connect("mongodb+srv://chutuan2003:tuantran03@cluster0.t7qine3.mongodb.net/")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });


app.use(cors());
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "50mb" }));

// Sử dụng tuyến đường cho yêu cầu POST đến /v1/user
app.use("/v1/user", usersRoute);

app.listen(5000, () => {
  console.log("Server is running...");
});
