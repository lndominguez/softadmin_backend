import express from "express";
import routes from "./routes/router.js";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./db.js";
import multer from "multer";
// Cargar variables de entorno desde el archivo .env
dotenv.config();
const app = express();
const port = process.env.PORT || 4000; // Usa el puerto especificado en .env o 4000 por defecto

// ------------------------------------------------------------------------------------------------
// Configuración de middleware, rutas, etc.
const corsOption = {
  origin: process.env.CLIENT_HOST,
  methods: "GET,POST,PUT,DELETE",
  // credentials: true,
};
var corsMiddleware = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", process.env.CLIENT_HOST); //replace localhost with actual host
  res.header(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, PUT, PATCH, POST, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, X-Requested-With, Authorization"
  );
  res.header("Access-Control-Allow-Credentials", true);
  next();
};
app.use(corsMiddleware);

const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}` );
  },
});

const upload = multer({storage});

// ------------------------------------------------------------------------------------------------
// RUTAS
app.post("/api/upload/image", upload.single('file') ,(req, res) => {
  return res.status(200).json(req.file);
})
app.use("/api", routes);


app.use(express.static('./public'));
// Conectar a la base de datos
// ------------------------------------------------------------------------------------------------
connectDB();

// Iniciar el servidor en el puerto configurado
// ------------------------------------------------------------------------------------------------
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
