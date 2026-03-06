import 'dotenv/config';
import express, { Express } from 'express';


const PORT: number = parseInt(process.env.PORT ?? '3000', 10);

const app: Express = express();

app.use(express.json());

app.listen(PORT, () => {
    console.log(`🩷  Pink Pulse API running at http://localhost:${PORT}`);
});