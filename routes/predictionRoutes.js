/* (2.2) Las rutas actúan como un mapa que conecta una URL específica (/prediccion) con una función específica del controlador (getRandomReading).

- Importo el controlador  predictionCOntroller
- Creo un router (mini servidor para agrupar routas)
- Definimos la primera ruta: "Cuando llegue una petición GET a la URL '/prediccion'...ejecuta la función 'getRandomReading' de nuestro controlador".
 */

import express from "express";
import predictionController from "../controller/PredictionController.js";

const router = express.Router();

//router.get("/prediction", predictionController.getRandomReading);
router.get("/prediction", (req, res) => {
  // 1. Aquí va tu lógica para generar la predicción...
  const miPrediccion = {
    prediccion: "Hoy será un gran día para aprender sobre APIs.",
  };

  // 2. ¡MUY IMPORTANTE! Enviar la respuesta al cliente.
  res.json(miPrediccion); 
});

export default router;
