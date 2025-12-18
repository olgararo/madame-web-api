//(1.) Archivo principal cuyo trabajo es arrancar y mantenerse a la espera de peticiones

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import predictionRoutes from "./routes/predictionRoutes.js";

dotenv.config();

export const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta raíz
app.get("/", (req, res) => {
  res.send("Hola, soy la API de Madame Web. Estoy viiiiiiva.... viiiiiiva!");
});

//Rutas de la API
app.use("/api", predictionRoutes);

export const server = app.listen(PORT, () => {
  console.log(
    `🚀 Servidor de Madame Web escuchando en http://localhost:${PORT}`
  );
});
