// basic server api

import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import hostRoutes from "./routes/hostRoutes.js";


dotenv.config();

const app = express();
connectDB();

app.use(express.json());

app.get('/home', (req, res) => {
    res.status(201).send("Hello, world!");
});

app.use("/api/users", userRoutes);
app.use("/api/hosts", hostRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));