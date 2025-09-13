

const predictions = [
  {
    "id": 1,
    "nombre": "El Loco",
    "pasado": "Te convenciste de que 'salir de tu zona de confort' era una magnífica idea",
    "presente": "y como resultado ahora tu principal habilidad social es hablar del tiempo con una convicción aplastante",
    "futuro": "lo que te llevará en el futuro a aceptar que tu alma gemela es, probablemente, la persona que te empaqueta los pedidos de Amazon."
  },
  {
    "id": 2,
    "nombre": "El Mago",
    "pasado": "Intentaste aplicar el 'fake it till you make it' en una importante reunión de trabajo",
    "presente": "lo que ha provocado que ahora tengas la misma vida social que un cactus de plástico",
    "futuro": "así que en el futuro tu mayor dilema será decidir si ver otra vez una serie que ya has visto o asumir tu derrota vital."
  },
  {
    "id": 3,
    "nombre": "La Sacerdotisa",
    "pasado": "Te propusiste leer más para convertirte en una persona culta e interesante",
    "presente": "y por eso ahora tu principal aportación a la sociedad es reenviar memes que ya ha visto todo el mundo",
    "futuro": "de modo que tu destino es acabar defendiendo a capa y espada el sabor de la cerveza sin alcohol."
  },
  {
    "id": 4,
    "nombre": "La Emperatriz",
    "pasado": "Decidiste empezar un proyecto de 'Do It Yourself' que viste en Pinterest para dar rienda suelta a tu creatividad",
    "presente": "y ahora te pasas el día evitando las llamadas de tu banco como si fuera un deporte olímpico",
    "futuro": "lo que te obligará en el futuro a fingir que sabes de vinos para parecer interesante en las cenas."
  },
  {
    "id": 5,
    "nombre": "El Emperador",
    "pasado": "Decidiste que ibas a tomar el control de tu vida y a poner un poco de orden",
    "presente": "y ahora tu nivel de energía es comparable al de un móvil al 3% de batería en modo de bajo consumo",
    "futuro": "pero no te preocupes, en el futuro seguirás igual, solo que con más achaques y menos pelo."
  },
  {
    "id": 6,
    "nombre": "El Sumo Sacerdote",
    "pasado": "Te aferraste a las tradiciones y decidiste seguir las cosas 'como se han hecho siempre'",
    "presente": "lo que explica que ahora tu mayor logro de la semana sea acordarte de sacar la basura el día que toca",
    "futuro": "y el siguiente paso será dominar el complejo arte de parecer ocupado mientras miras por la ventana."
  },
  {
    "id": 7,
    "nombre": "Los Amantes",
    "pasado": "Te enfrentaste a una decisión vital que prometía cambiarlo todo para siempre",
    "presente": "así que lógicamente ahora tu opinión más sólida es sobre qué plataforma de streaming tiene el peor catálogo",
    "futuro": "y la vida te recompensará con la habilidad de dormirte en los 5 primeros minutos de cualquier película."
  },
  {
    "id": 8,
    "nombre": "El Carro",
    "pasado": "En un arrebato de optimismo, te apuntaste a una 'newsletter' de productividad",
    "presente": "y como era de esperar, ahora tu mecanismo de defensa principal es comprar cosas inútiles por internet a las 3 de la mañana",
    "futuro": "así que no te sorprendas si en el futuro tu legado a la humanidad es una colección impresionante de contraseñas olvidadas."
  },
  {
    "id": 9,
    "nombre": "La Fuerza",
    "pasado": "Hiciste un curso de 'mindfulness' para gestionar mejor el estrés y vivir el presente",
    "presente": "lo que ha desembocado en que ahora tu tema de conversación más recurrente sea quejarte de lo cansado que estás",
    "futuro": "pero no te ilusiones, en el futuro lo único que conseguirás acumular son puntos de la tarjeta del supermercado."
  },
  {
    "id": 10,
    "nombre": "El Ermitaño",
    "pasado": "Decidiste tomarte un tiempo para ti, para hacer un viaje de introspección",
    "presente": "por eso ahora tu personalidad se basa en dos o tres frases que repites constantemente",
    "futuro": "lo que te garantiza un futuro en el que tu mayor emoción será encontrar un sitio para aparcar a la primera."
  },
  {
    "id": 11,
    "nombre": "La Rueda de la Fortuna",
    "pasado": "Creíste que un golpe de suerte inesperado iba a solucionar todos tus problemas",
    "presente": "y por alguna razón ahora guardas en un cajón más cables de cargadores obsoletos que ganas de vivir",
    "futuro": "así que tu gran aventura del futuro será intentar cancelar una suscripción sin tener que llamar por teléfono."
  },
  {
    "id": 12,
    "nombre": "La Justicia",
    "pasado": "Te convenciste de que comprar una agenda carísima iba a solucionar todos tus problemas de organización",
    "presente": "y como consecuencia ahora sientes un profundo respeto por la gente que pliega bien las sábanas bajeras",
    "futuro": "lo que te condena a un futuro donde fingirás entender la factura de la luz para no sentirte un completo inútil."
  },
  {
    "id": 13,
    "nombre": "El Colgado",
    "pasado": "Decidiste ver las cosas desde otra perspectiva para encontrar una solución creativa",
    "presente": "y por eso ahora tienes el superpoder de mantener una planta viva durante más de dos semanas seguidas",
    "futuro": "y tu destino final será convertirte en esa persona que reenvía audios de más de un minuto."
  },
  {
    "id": 14,
    "nombre": "La Muerte",
    "pasado": "Decidiste hacer limpieza de armario para 'dejar ir lo que ya no te sirve'",
    "presente": "lo que ha hecho que ahora tu momento de máxima adrenalina sea cuando el datáfono tarda en procesar el pago",
    "futuro": "y todo apunta a que en el futuro tu gran revelación será que 'encontrarse a uno mismo' es carísimo y, sobre todo, no cotiza para la jubilación."
  },
  {
    "id": 15,
    "nombre": "La Templanza",
    "pasado": "Buscaste el equilibrio en tu vida, intentando compensar tus excesos con un poco de moderación",
    "presente": "y por eso ahora tu idea de 'darte un capricho' es comprar el aguacate que está un poco más caro pero que parece bueno",
    "futuro": "lo que te llevará inevitablemente a ser esa persona que aplaude cuando el avión aterriza."
  },
  {
    "id": 16,
    "nombre": "El Diablo",
    "pasado": "Le diste una oportunidad a esa receta que viste en TikTok y que parecía tan fácil",
    "presente": "lo que provoca que ahora uses anglicismos en tus reuniones para que nadie se dé cuenta de que no tienes ni idea de qué estás hablando",
    "futuro": "y por lo visto el universo ha decidido que en el futuro pases más tiempo eligiendo qué ver que viendo algo. Ahí te darás cuenta de que Netflix es el único al que le interesa si 'sigues ahí'."
  },
  {
    "id": 17,
    "nombre": "La Torre",
    "pasado": "Un amigo te recomendó un podcast y fingiste que te interesaba muchísimo para no hacerle el feo",
    "presente": "lo que explica que ahora tu nevera tenga más botes empezados que conversaciones interesantes en el último mes",
    "futuro": "y todo indica que el clímax de tu vida social futura será convertirte en el administrador de un grupo de WhatsApp."
  },
  {
    "id": 18,
    "nombre": "La Estrella",
    "pasado": "Tuviste un momento de inspiración y te prometiste a ti mismo que empezarías a ahorrar",
    "presente": "y ahora tu principal fuente de esperanza es que la batería del móvil te dure hasta el final del día",
    "futuro": "lo que te depara un futuro en el que buscarás tus síntomas en Google para autodiagnosticarte una muerte inminente."
  },
  {
    "id": 19,
    "nombre": "La Luna",
    "pasado": "Te dejaste llevar por tu intuición y tomaste una decisión basada en una corazonada",
    "presente": "y como resultado ahora mantienes conversaciones enteras con tu mascota porque sabes que no te va a juzgar",
    "futuro": "lo que significa que el universo te reserva un sitio preferente en la cola del supermercado, pero siempre en la que va más lenta."
  },
  {
    "id": 20,
    "nombre": "El Sol",
    "pasado": "Tuviste un momento de claridad y por fin entendiste la trama de esa película que todo el mundo adora",
    "presente": "y ahora tu mayor alegría es encontrar un producto en el supermercado que no haya subido de precio",
    "futuro": "lo que te asegura un porvenir en el que tu posesión más preciada será una compleja red de mentiras para justificar por qué no puedes encender la cámara en las reuniones."
  },
  {
    "id": 21,
    "nombre": "El Juicio",
    "pasado": "Hiciste balance de tu vida y te diste cuenta de que era hora de un cambio radical",
    "presente": "y por eso ahora tu única llamada pendiente es la de la operadora de telefonía para ofrecerte una oferta que no te interesa",
    "futuro": "lo que te conducirá a un futuro donde te sentirás ofendido a nivel personal cuando una web no recuerde tu contraseña."
  },
  {
    "id": 22,
    "nombre": "El Mundo",
    "pasado": "Sentiste que habías completado un ciclo al terminar por fin esa serie que tenías a medias",
    "presente": "lo que ha causado que ahora tu mayor sentimiento de realización sea meter toda la compra en una sola bolsa",
    "futuro": "y tu gran recompensa final será descubrir que la vida, al igual que Hacienda, siempre se acaba dando cuenta de tus pequeñas trampas."
  }
];