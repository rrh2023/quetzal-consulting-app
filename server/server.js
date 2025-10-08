import express from "express";
import { connectDB } from "./config/db.js";
import { router as usersRouter } from "./routes/users.js";
import { router as locationsRouter } from "./routes/locations.js";
import { router as authRouter } from "./routes/auth.js";

const app = express();

// Connect Database
connectDB();

app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the Quetzal Consulting App..." }),
);

// Define Routes
app.use("/api/users", usersRouter);
app.use("/api/auth", locationsRouter);
app.use("/api/locations", authRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
