import express from "express";
import bodyParser from "body-parser";
import authRoutes from "./routes/auth.js";
import anggotaRoutes from "./routes/anggota.js";

const app = express();

app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/anggota", anggotaRoutes);

app.listen(8800, () => {
    console.log("Connected!");
})