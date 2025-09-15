/*Archivo principal cuyo trabajo es arrancar y mantenerse a la espera de peticiones

- Utilizo la library express para poder crear el servidor
- Creo una instancia de la aplocación express
- Creo una primera ruta de prueba
- Defino el puerto en el que el servidor va a escuchar peticiones
-Arranco el servidor para que empiece a escuchar el puerto definido
*/

import express from "express";

export const app = express();

app.get("/", (req, res) => {
  res.send("Hola, API de Madame Web. Estoy viiiiiiva.... viiiiiiva!");
});

const PORT = 3001;

export const server = app.listen(PORT, () => {
  console.log(
    `🚀 Servidor de Madame Web escuchando en http://localhost:${PORT}`
  );
});
