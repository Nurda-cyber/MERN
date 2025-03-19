import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import errorHandler from "./middlewares/errorMiddleware.js";
import routes from "./routes/index.js";
import cors from "cors";
import logger from "./log/logger.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// Лог жүйесін қосу/өшіру
const isLoggingEnabled = process.env.LOGGING_ENABLED === "true";
if (isLoggingEnabled) {
    app.use((req, res, next) => {
        logger.info(`${req.method} ${req.url}`);
        next();
    });
}

app.use("/api", routes);
app.use(errorHandler);

app.get("/", (req, res) => {
    res.send("Backend is running!...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));