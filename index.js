import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/db.js';
import userRoute from './routes/user.routes.js';
import courseRoute from './routes/couse.routes.js'
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();

// Call database connection
connectDB();

const PORT = process.env.PORT || 3000;

// Default middleware (should be before routes)
app.use(express.json());
app.use(cookieParser());


app.use(cors({ origin: "http://localhost:5173", credentials: true }));


// API routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/course", courseRoute);
app.get("/home", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Hello, I am coming from the backend",
    });
});

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});
