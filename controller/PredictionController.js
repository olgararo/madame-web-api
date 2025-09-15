/* (2.)Para hacer peticiones, hay 3 partes implicadas: El controlador, las rutas y la conexión con app.js.

- Creo el objeto predictionController, que contendrá todas las funciones del controlador, con un método (getRandomReading) que es el que se encargará de gestionar la petición
*/

const predictionController = {
  getRandomReading: (req, res) => {
    res.status(200).json;
  },
};

export default predictionController;
