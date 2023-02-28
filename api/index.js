import express from "express";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";

const app = express();

app.use(express.json());

// using post route
app.use("/api/posts", postRoutes); // http://localhost:8800/api/posts
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.get("/test", (req, res) => {
  res.json("Hello World");
});

app.listen(8800, () => {
  console.log("Server is running on port 8800");
});
