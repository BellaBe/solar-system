import express from "express";
import { json } from "body-parser";
import cors from "cors";
import { planetsRouter } from "./planets/planets-controller";

const app = express();

app.use(json())
app.use(cors());
app.use("/static", express.static("public"));
app.use(planetsRouter);

app.all("*", (req, res) => {
    res.status(404).send("Not found")
});

export { app };