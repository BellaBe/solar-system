import { app } from "./app";

const port = 3001
const start = () => {
    app.listen(port, () => {
        console.log(`App is running on port ${port}`);
    })
}

start();