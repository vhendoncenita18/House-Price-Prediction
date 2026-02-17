require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const houseRoutes = require("./routes/houseRoutes");

const app = express();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

app.use(cors());
app.use(express.json());
app.use("/api/houses", houseRoutes);

app.get("/", (req, res) => {
    res.send("API working");
});

app.listen(5000, () => console.log("Server running on port 5000"));
