import express from 'express'
import bookRoutes from "./src/routes/book.routes.js"
import { initDB } from './src/config/database.js';
import sequelize from './src/config/database.js';
import dotenv from 'dotenv'; 

dotenv.config();
const app = express();
app.use(express.json());
app.use("/api/book", bookRoutes);
const PORT = process.env.PORT || 3000;

initDB().then(()=>{
app.listen(PORT,()=> {
    console.log ('Servidor corriendo en http:localhost:${PORT}');
    });
});