import dotenv from "dotenv";

//config dotenv to use env file
dotenv.config();

import cors from "cors";
import express from "express";
import cookierParser from "cookie-parser";

import postRoute from "./routes/post.route.js";

import authRoute from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";

const app = express();
//check the origin
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

app.use("/api/test", (req, res) => {
  res.send("it works");
});
app.use(express.json());
app.use(cookierParser());
app.use("/api/posts", postRoute);

app.use("/api/auth", authRoute);
app.use("/api/test", testRoute);
app.use("/api/users", userRoute);

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
