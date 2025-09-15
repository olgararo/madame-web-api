/*(1.) Archivo principal cuyo trabajo es arrancar y mantenerse a la espera de peticiones

- Utilizo la library express para poder crear el servidor
- Creo una instancia de la aplocación express
- Creo una primera ruta de prueba
- Defino el puerto en el que el servidor va a escuchar peticiones
-Arranco el servidor para que empiece a escuchar el puerto definido

(2.3) Decirle a la aplicación principal que use el nuevo routes
*/

import express from "express";
import predictionRoutes from "./routes/predictionRoutes.js";

export const app = express();

// Ruta raíz
app.get("/", (req, res) => {
  res.send("Hola, API de Madame Web. Estoy viiiiiiva.... viiiiiiva!");
});

//Rutas de la API
app.use("/api", predictionRoutes);

const PORT = 3001;

export const server = app.listen(PORT, () => {
  console.log(
    `🚀 Servidor de Madame Web escuchando en http://localhost:${PORT}`
  );
});
