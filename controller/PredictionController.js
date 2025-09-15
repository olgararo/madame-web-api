/* (2.)Para hacer peticiones, hay 3 partes implicadas: El controlador, las rutas y la conexión con app.js.

- Creo el objeto predictionController, que contendrá todas las funciones del controlador, con un método (getRandomReading) que es el que se encargará de gestionar la petición

(3.2) Actualizar el código para que utilice la predictionData:
-- Usamos try catch para manejo de errores
-- en cards usamos "spread operator" (...) para crear una copia del array
-- con pickRandomCard creamos una función para elegir un índice al azar del array que le pasemos. Splice extrae y devuelve el elemento de esa posición y no permita que se elija la misma carta.
-- Definimos la constantes de las 3 cartas a elegir para la predicción
-- Se define la construcción de la frase final que formará la predicción. Usamos "template literals" (las comillas invertidas ``) para construir
*/

import predictions from "../data/predictionsData.js";

const predictionController = {
  getRandomReading: (req, res) => {
    try {
      const cards = [...predictions];
      const pickRandomCard = (cardArray) => {
        const randomIndex = Math.floor(Math.random() * cardArray.length);
        return cardArray.splice(randomIndex, 1)[0];
      };

      const pastCard = pickRandomCard(cards);
      const presentCard = pickRandomCard(cards);
      const futureCard = pickRandomCard(cards);

      const finalPrediction = `${pastCard.past}, ${presentCard.present}, ${futureCard.future}`;

      res.status(200).json({ prediction: finalPrediction });
    } catch (error) {
      console.error("Error al generar la predicción:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  },
};

export default predictionController;
