import dotenv from "dotenv";

//config dotenv to use env file
dotenv.config();
import express from "express";
import cookierParser from "cookie-parser";

import postRoute from "./routes/post.routh.js";

import authRoute from "./routes/auth.routh.js";

const app = express();

app.use("/api/test", (req, res) => {
  res.send("it works");
});
app.use(express.json());
app.use(cookierParser());
app.use("/api/posts", postRoute);

app.use("/api/auth", authRoute);

// app.use("/api/auth/register", (req, res) => {
//   res.send("it works");
// });
// app.use("/api/auth/login", (req, res) => {
//   res.send("it works");
// });

// app.use("/api/auth/logout", (req, res) => {
//   res.send("it works");
// });

// app.use("/api/posts/", (req, res) => {
//   res.send("it works");
// });

// app.use("/api/posts/", (req, res) => {
//   res.send("it works");
// });

// app.use("/api/posts/124", (req, res) => {
//   res.send("it works");
// });

app.listen(8000, () => {
  console.log("App is running");
});
