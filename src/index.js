import express from "express";
import dotenv from "dotenv";
import { healthRouter } from "./routes/health.js";
import { authRouter } from "./routes/auth.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/health", healthRouter);
app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`sentinel-demo-app listening on port ${PORT}`);
});

export default app;
