const express = require("express");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/user.routes");

const app = express();
module.exports = app;

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/users", userRouter);





