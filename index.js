import express from 'express';
import db from './config/Database.js';
import cors from "cors";
import route from './routes/index.js';

const app = express();
const PORT = 5050;

app.listen(PORT, ()=> {
    console.log(`Server is running at ${PORT}`)
});


try {
    await db.authenticate();
    console.log('Database has connected');
} catch (error) {
    console.log('Unable to connect database', error);
}

app.use(express.json());
app.use(cors());
app.use(route);