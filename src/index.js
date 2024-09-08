
import express from "express";
import router from "./router/userrouter.js";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });
const port = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use("/api", router);
app.listen(port, () => {
  console.log("app is running on port ", port);
});

