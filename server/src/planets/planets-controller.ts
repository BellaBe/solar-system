import express from "express";
import { getPlanets } from "./planets-service";

const router = express.Router();

router.get("/api/planets", async (req, res) => {
    const planets = await getPlanets();
    res.send(planets)
})

export { router as planetsRouter};