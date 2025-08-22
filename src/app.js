import express from "express";
import dotenv from "dotenv";
import db from "./models/index.js";
import routes from "./router/index.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use(errorHandler);

app.use("/api", routes);
db.sequelize.sync().then(() => {
  console.log("✅ Database synced");
});

export default app;
