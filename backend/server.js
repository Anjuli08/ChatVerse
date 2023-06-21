const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();
dotenv.config();
connectDB();

app.use(express.json()); //to accept JSON data

app.get("/", (req, res) => {
  res.send("API is running successfully");
});

app.use("/api/user", userRoutes);

//api error handlers
app.use(notFound);
app.use(errorHandler);
//--x--api error handlers---x--

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started on port ${PORT}`.yellow.bold));
