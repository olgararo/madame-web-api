# madame-web-api


Cómo lo instalo

Cómo lo lanzo

Cómo lo uso

En Postman se pueden hacer peticiones GET a la URL http://localhost:8000/predictions?past=1&present=2&future=3

{
  "prediction":  "Te convenciste de que 'salir de tu zona de confort' era una magnífica idea lo que ha provocado que ahora tengas la misma vida social que un cactus de plástico de modo que tu destino es acabar defendiendo a capa y espada el sabor de la cerveza sin alcohol."
}




------------------------- NOTAS ----------------------------------
{
  "past":  "Te convenciste de que 'salir de tu zona de confort' era una magnífica idea",
  "present": "lo que ha provocado que ahora tengas la misma vida social que un cactus de plástico",
  "future": "de modo que tu destino es acabar defendiendo a capa y espada el sabor de la cerveza sin alcohol."
}

debe ser :
{
  "prediction":  "Te convenciste de que 'salir de tu zona de confort' era una magnífica idea lo que ha provocado que ahora tengas la misma vida social que un cactus de plástico de modo que tu destino es acabar defendiendo a capa y espada el sabor de la cerveza sin alcohol."
}


1. levantar el servicio aunque no haya nada 
2. que la petición de postman funcione aunque devuelva un json vacío
3. arreglar el json