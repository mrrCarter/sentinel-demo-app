import express from "express";
import dotenv from "dotenv";
import { healthRouter } from "./routes/health.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/health", healthRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`sentinel-demo-app listening on port ${PORT}`);
});

export default app;
