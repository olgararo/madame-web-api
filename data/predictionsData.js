/* PRIMERA VERSIÓN DE API:
Ofrece predicciones aleatorias al hacer una petición GET http://localhost:3001/api/prediction


(3.)Este archivo solo sirve para contener y exportar los datos 
- Se guarda el array de predicciones y se exporta
- Después se va al controlador a implementar la lógica*/

const predictions = [
  {
    "id": 1,
    "name": "El Loco",
    "past": "Te convenciste de que 'salir de tu zona de confort' era una magnífica idea",
    "present": "y como resultado ahora tu principal habilidad social es hablar del tiempo con una convicción aplastante",
    "future": "lo que te llevará en el futuro a aceptar que tu alma gemela es, probablemente, la persona que te empaqueta los pedidos de Amazon."
  },
  {
    "id": 2,
    "name": "El Mago",
    "past": "Intentaste aplicar el 'fake it till you make it' en una importante reunión de trabajo",
    "present": "lo que ha provocado que ahora tengas la misma vida social que un cactus de plástico",
    "future": "así que en el futuro tu mayor dilema será decidir si ver otra vez una serie que ya has visto o asumir tu derrota vital."
  },
  {
    "id": 3,
    "name": "La Sacerdotisa",
    "past": "Te propusiste leer más para convertirte en una persona culta e interesante",
    "present": "y por eso ahora tu principal aportación a la sociedad es reenviar memes que ya ha visto todo el mundo",
    "future": "de modo que tu destino es acabar defendiendo a capa y espada el sabor de la cerveza sin alcohol."
  },
  {
    "id": 4,
    "name": "La Emperatriz",
    "past": "Decidiste empezar un proyecto de 'Do It Yourself' que viste en Pinterest para dar rienda suelta a tu creatividad",
    "present": "y ahora te pasas el día evitando las llamadas de tu banco como si fuera un deporte olímpico",
    "future": "lo que te obligará en el futuro a fingir que sabes de vinos para parecer interesante en las cenas."
  },
  {
    "id": 5,
    "name": "El Emperador",
    "past": "Decidiste que ibas a tomar el control de tu vida y a poner un poco de orden",
    "present": "y ahora tu nivel de energía es comparable al de un móvil al 3% de batería en modo de bajo consumo",
    "future": "pero no te preocupes, en el futuro seguirás igual, solo que con más achaques y menos pelo."
  },
  {
    "id": 6,
    "name": "El Sumo Sacerdote",
    "past": "Te aferraste a las tradiciones y decidiste seguir las cosas 'como se han hecho siempre'",
    "present": "lo que explica que ahora tu mayor logro de la semana sea acordarte de sacar la basura el día que toca",
    "future": "y el siguiente paso será dominar el complejo arte de parecer ocupado mientras miras por la ventana."
  },
  {
    "id": 7,
    "name": "Los Amantes",
    "past": "Te enfrentaste a una decisión vital que prometía cambiarlo todo para siempre",
    "present": "así que lógicamente ahora tu opinión más sólida es sobre qué plataforma de streaming tiene el peor catálogo",
    "future": "y la vida te recompensará con la habilidad de dormirte en los 5 primeros minutos de cualquier película."
  },
  {
    "id": 8,
    "name": "El Carro",
    "past": "En un arrebato de optimismo, te apuntaste a una 'newsletter' de productividad",
    "present": "y como era de esperar, ahora tu mecanismo de defensa principal es comprar cosas inútiles por internet a las 3 de la mañana",
    "future": "así que no te sorprendas si en el futuro tu legado a la humanidad es una colección impresionante de contraseñas olvidadas."
  },
  {
    "id": 9,
    "name": "La Fuerza",
    "past": "Hiciste un curso de 'mindfulness' para gestionar mejor el estrés y vivir el presente",
    "present": "lo que ha desembocado en que ahora tu tema de conversación más recurrente sea quejarte de lo cansado que estás",
    "future": "pero no te ilusiones, en el futuro lo único que conseguirás acumular son puntos de la tarjeta del supermercado."
  },
  {
    "id": 10,
    "name": "El Ermitaño",
    "past": "Decidiste tomarte un tiempo para ti, para hacer un viaje de introspección",
    "present": "por eso ahora tu personalidad se basa en dos o tres frases que repites constantemente",
    "future": "lo que te garantiza un futuro en el que tu mayor emoción será encontrar un sitio para aparcar a la primera."
  },
  {
    "id": 11,
    "name": "La Rueda de la Fortuna",
    "past": "Creíste que un golpe de suerte inesperado iba a solucionar todos tus problemas",
    "present": "y por alguna razón ahora guardas en un cajón más cables de cargadores obsoletos que ganas de vivir",
    "future": "así que tu gran aventura del futuro será intentar cancelar una suscripción sin tener que llamar por teléfono."
  },
  {
    "id": 12,
    "name": "La Justicia",
    "past": "Te convenciste de que comprar una agenda carísima iba a solucionar todos tus problemas de organización",
    "present": "y como consecuencia ahora sientes un profundo respeto por la gente que pliega bien las sábanas bajeras",
    "future": "lo que te condena a un futuro donde fingirás entender la factura de la luz para no sentirte un completo inútil."
  },
  {
    "id": 13,
    "name": "El Colgado",
    "past": "Decidiste ver las cosas desde otra perspectiva para encontrar una solución creativa",
    "present": "y por eso ahora tienes el superpoder de mantener una planta viva durante más de dos semanas seguidas",
    "future": "y tu destino final será convertirte en esa persona que reenvía audios de más de un minuto."
  },
  {
    "id": 14,
    "name": "La Muerte",
    "past": "Decidiste hacer limpieza de armario para 'dejar ir lo que ya no te sirve'",
    "present": "lo que ha hecho que ahora tu momento de máxima adrenalina sea cuando el datáfono tarda en procesar el pago",
    "future": "y todo apunta a que en el futuro tu gran revelación será que 'encontrarse a uno mismo' es carísimo y, sobre todo, no cotiza para la jubilación."
  },
  {
    "id": 15,
    "name": "La Templanza",
    "past": "Buscaste el equilibrio en tu vida, intentando compensar tus excesos con un poco de moderación",
    "present": "y por eso ahora tu idea de 'darte un capricho' es comprar el aguacate que está un poco más caro pero que parece bueno",
    "future": "lo que te llevará inevitablemente a ser esa persona que aplaude cuando el avión aterriza."
  },
  {
    "id": 16,
    "name": "El Diablo",
    "past": "Le diste una oportunidad a esa receta que viste en TikTok y que parecía tan fácil",
    "present": "lo que provoca que ahora uses anglicismos en tus reuniones para que nadie se dé cuenta de que no tienes ni idea de qué estás hablando",
    "future": "y por lo visto el universo ha decidido que en el futuro pases más tiempo eligiendo qué ver que viendo algo. Ahí te darás cuenta de que Netflix es el único al que le interesa si 'sigues ahí'."
  },
  {
    "id": 17,
    "name": "La Torre",
    "past": "Un amigo te recomendó un podcast y fingiste que te interesaba muchísimo para no hacerle el feo",
    "present": "lo que explica que ahora tu nevera tenga más botes empezados que conversaciones interesantes en el último mes",
    "future": "y todo indica que el clímax de tu vida social futura será convertirte en el administrador de un grupo de WhatsApp."
  },
  {
    "id": 18,
    "name": "La Estrella",
    "past": "Tuviste un momento de inspiración y te prometiste a ti mismo que empezarías a ahorrar",
    "present": "y ahora tu principal fuente de esperanza es que la batería del móvil te dure hasta el final del día",
    "future": "lo que te depara un futuro en el que buscarás tus síntomas en Google para autodiagnosticarte una muerte inminente."
  },
  {
    "id": 19,
    "name": "La Luna",
    "past": "Te dejaste llevar por tu intuición y tomaste una decisión basada en una corazonada",
    "present": "y como resultado ahora mantienes conversaciones enteras con tu mascota porque sabes que no te va a juzgar",
    "future": "lo que significa que el universo te reserva un sitio preferente en la cola del supermercado, pero siempre en la que va más lenta."
  },
  {
    "id": 20,
    "name": "El Sol",
    "past": "Tuviste un momento de claridad y por fin entendiste la trama de esa película que todo el mundo adora",
    "present": "y ahora tu mayor alegría es encontrar un producto en el supermercado que no haya subido de precio",
    "future": "lo que te asegura un porvenir en el que tu posesión más preciada será una compleja red de mentiras para justificar por qué no puedes encender la cámara en las reuniones."
  },
  {
    "id": 21,
    "name": "El Juicio",
    "past": "Hiciste balance de tu vida y te diste cuenta de que era hora de un cambio radical",
    "present": "y por eso ahora tu única llamada pendiente es la de la operadora de telefonía para ofrecerte una oferta que no te interesa",
    "future": "lo que te conducirá a un futuro donde te sentirás ofendido a nivel personal cuando una web no recuerde tu contraseña."
  },
  {
    "id": 22,
    "name": "El Mundo",
    "past": "Sentiste que habías completado un ciclo al terminar por fin esa serie que tenías a medias",
    "present": "lo que ha causado que ahora tu mayor sentimiento de realización sea meter toda la compra en una sola bolsa",
    "future": "y tu gran recompensa final será descubrir que la vida, al igual que Hacienda, siempre se acaba dando cuenta de tus pequeñas trampas."
  }
];

export default predictions;

