import { promises as fs } from "fs";
import { dirname } from "path/posix";

interface Planet{
    name: string,
    imagePath: string,
    age: string,
    mass: string
}

export const getPlanets = async() => {
    try {
        const data = await fs.readFile(__dirname +"/data.json", "utf-8");
        const planets: Planet[] = JSON.parse(data).map((p: Planet) => {
        const path = `http://localhost:3001/static/images/` + p.imagePath;
            p.imagePath = path;
            return p; 
    });

        return planets;
    } catch (error) {
        console.log(error)
    }
    
}