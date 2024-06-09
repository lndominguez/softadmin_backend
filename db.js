
import mongoose from "mongoose";
import dotenv from 'dotenv';

// Cargar variables de entorno desde el archivo .env
dotenv.config();

export const connectDB = async () => {

    try {

        // Conexión a la base de datos
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("mongoDB is connected")

    } catch (error) {

        console.log("!! Error connecting to MongoDB !!")
    }

}

