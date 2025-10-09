import express from "express";
import connectDB from "./config/db.js";
import { router as usersRouter } from "./routes/users.js";
import { router as authRouter } from "./routes/auth.js";
import { router as locationsRouter } from "./routes/locations.js";

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the Quetzal Consulting App..." }),
);

// Define Routes
app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);
app.use("/api/locations", locationsRouter);

const PORT = 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
