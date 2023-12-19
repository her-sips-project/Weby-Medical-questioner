import express from "express";
const mongoose = require("mongoose");

const dotenv = require("dotenv");
const { mongo_URI } = process.env;
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

import emailRoutes from "./API/emailRoutes";
app.use("/api/v1/email", emailRoutes);

mongoose.connect(`${mongo_URI}`).then(() => {
  console.log("Connected to MongoDB!!!");
}).catch(err => console.error(err));

const server = app.listen(PORT, () => {
  console.log(`server is listening in port:${PORT} :)`);
});
