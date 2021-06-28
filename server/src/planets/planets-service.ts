import { promises as fs } from "fs";

interface Planet{
    name: string,
    imagePath: string,
    age: string,
    mass: string
}

export const getPlanets = async() => {
    const data = await fs.readFile("data.json", "utf-8");
    const planets: Planet[] = JSON.parse(data).map((p: Planet) => {
        const path = `http://localhost:3001/static/images/` + p.imagePath;
            p.imagePath = path;
            return p; 
    });

    return planets;
}