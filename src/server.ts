import express from "express";
import cors from "cors";
import routes from "./routes";
import path from "path";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));
console.clear();
console.log(`Server API\nInicializado em:\n${new Date()}`);

app.listen(3000);
