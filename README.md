# 🔮 Madame Web API

> *"El destino te espera... pero primero, consulta la documentación."*

Una API REST que sirve predicciones de tarot con un toque de sarcasmo existencial. Combina los 22 Arcanos Mayores con fragmentos de texto dinámicos para generar lecturas personalizadas que son tan brutalmente honestas como las mejores amigas después de dos copas de vino.

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/express-5.1.0-green)](https://expressjs.com/)

**🌐 API en producción:** [https://madame-web-api.onrender.com](https://madame-web-api.onrender.com)  
**💻 Frontend:** [https://madame-web.vercel.app](https://madame-web.vercel.app)

---

## ✨ Características

- 🃏 **22 Arcanos Mayores** con descripciones detalladas e interpretaciones irónicas
- 🎲 **Sistema de predicciones dinámicas** que combina fragmentos según energía, temas y posición
- 🌟 **Lógica de energía dominante** (positiva, negativa, neutra)
- 📝 **Más de 80 fragmentos de texto** para predicciones únicas
- 🚀 **API RESTful** con respuestas en JSON
- ⚡ **Cache-Control** para optimización de rendimiento
- 🎨 **CORS habilitado** para consumo desde cualquier frontend

---

## 🛠️ Tech Stack

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| **Node.js** | ≥18.0.0 | Runtime |
| **Express.js** | 5.1.0 | Framework web |
| **dotenv** | 17.2.3 | Variables de entorno |
| **cors** | 2.8.5 | Cross-Origin Resource Sharing |
| **nodemon** | 3.1.10 | Hot reload en desarrollo |
| **ESLint** | 9.39.2 | Linting |
| **Prettier** | 3.7.4 | Formateo de código |
| **Jest** | 30.1.3 | Testing |

---

## 📦 Instalación

### Prerequisitos

- Node.js ≥18.0.0
- npm o yarn

### Pasos
```bash
# 1. Clonar el repositorio
git clone https://github.com/olgararo/madame-web-api.git
cd madame-web-api

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env
# Editar .env con tu configuración

# 4. Iniciar en modo desarrollo
npm run dev

# 5. ¡Listo! La API estará corriendo en http://localhost:3001
```

---

## 🚀 Uso

### Base URL

**Local:** `http://localhost:3001/api`  
**Producción:** `https://madame-web-api.onrender.com/api`

---

### 📍 Endpoints

#### 1️⃣ Obtener todos los arcanos
```http
GET /api/arcanas
```

**Descripción:** Devuelve la lista completa de los 22 Arcanos Mayores con toda su información.

**Respuesta exitosa (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "El Loco",
      "arcana": "mayor",
      "number": 0,
      "energy": "positiva",
      "themes": ["nuevos comienzos", "riesgo", "espontaneidad", "libertad"],
      "arcanaImage": {
        "imageUrl": "https://res.cloudinary.com/.../El_Loco.png",
        "author": "Generada por OlgaRaRo vía Google AI Studio",
        "licenseUrl": "",
        "altText": "Representación de El Loco: Jack Sparrow"
      },
      "description": "El viaje del Loco hacia el Mundo comienza en el número 0...",
      "ironicInterpretation": "Lanzarse al abismo sin garantías suena muy poético..."
    }
    // ... 21 arcanos más
  ],
  "count": 22
}
```

---

#### 2️⃣ Obtener un arcano específico
```http
GET /api/arcanas/:id
```

**Parámetros:**
- `id` (número): ID del arcano (1-22)

**Ejemplo:**
```bash
GET /api/arcanas/1
```

**Respuesta exitosa (200):**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "El Loco",
    "arcana": "mayor",
    "number": 0,
    "energy": "positiva",
    "themes": ["nuevos comienzos", "riesgo", "espontaneidad", "libertad"],
    "arcanaImage": { /* ... */ },
    "description": "El viaje del Loco hacia el Mundo comienza...",
    "ironicInterpretation": "Lanzarse al abismo sin garantías..."
  }
}
```

**Errores posibles:**
```json
// 404 - Arcano no encontrado
{
  "success": false,
  "message": "Arcana with ID 99 not found"
}

// 400 - ID inválido
{
  "success": false,
  "message": "Invalid arcana ID. Must be a number"
}
```

---

#### 3️⃣ Generar predicción
```http
GET /api/prediction?card1={id}&card2={id}&card3={id}
```

**Descripción:** Genera una predicción de tres cartas (Pasado, Presente, Futuro) combinando fragmentos dinámicos según la energía y temas de los arcanos seleccionados.

**Parámetros de query:**
- `card1` (número): ID del arcano para el pasado
- `card2` (número): ID del arcano para el presente
- `card3` (número): ID del arcano para el futuro

**Restricciones:**
- Los 3 IDs deben ser diferentes
- Los IDs deben existir (1-22)

**Ejemplo:**
```bash
GET /api/prediction?card1=1&card2=5&card3=12
```

**Respuesta exitosa (200):**
```json
{
  "success": true,
  "data": {
    "prediction": "Las estrellas se han alineado para revelarte verdades que preferirías ignorar, aunque parece que el cosmos ha decidido darte un respiro. Tu pasado está lleno de 'nuevos comienzos', tantos como las pestañas que acumulas en el navegador, y la mayoría acabaron igual: olvidados, ralentizándolo todo y sin que te acuerdes para qué los abriste, y para más inri, tu relación con la autoridad ha sido tensa porque solo respetas la voz del GPS, lo que nos lleva inevitablemente a que, el equilibrio en tu presente consiste en compensar cada hora de trabajo con dos horas de procrastinación de calidad. Así que ya sabes, el universo te ha hablado. Ahora puedes seguir ignorándolo como haces con las actualizaciones de software.",
    "cards_used": [
      { "id": 1, "name": "El Loco", "position": "past" },
      { "id": 5, "name": "El Emperador", "position": "present" },
      { "id": 12, "name": "La Justicia", "position": "future" }
    ],
    "dominant_energy": "neutra"
  }
}
```

**Errores posibles:**
```json
// 400 - Parámetros faltantes
{
  "success": false,
  "message": "Missing required parameters. Please provide card1, card2, and card3"
}

// 400 - Cartas duplicadas
{
  "success": false,
  "message": "Cards must be different. You cannot select the same card twice"
}

// 404 - Carta no encontrada
{
  "success": false,
  "message": "One or more cards not found"
}
```

---

## 📂 Estructura del Proyecto
```
madame-web-api/
│
├── controller/
│   └── PredictionController.js    # Lógica de controladores
│
├── data/
│   ├── Arcana.json               # 22 Arcanos Mayores
│   └── Predictions.json          # 80+ fragmentos de texto
│
├── models/
│   └── PredictionModel.js        # Lógica de negocio y algoritmos
│
├── routes/
│   └── predictionRoutes.js       # Definición de endpoints
│
├── .env.example                  # Plantilla de variables de entorno
├── .gitignore                    # Archivos ignorados por Git
├── app.js                        # Punto de entrada de la aplicación
├── eslint.config.js              # Configuración de ESLint
├── package.json                  # Dependencias y scripts
└── README.md                     # Este archivo
```

---

## 🔐 Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:
```env
PORT=3001
```

---

## 📜 Scripts Disponibles
```bash
# Desarrollo (hot reload con nodemon)
npm run dev

# Producción
npm start

# Testing
npm test

# Linting
npx eslint .

# Formateo
npx prettier --write .
```

---

## 🎲 Lógica de Predicciones

### Cálculo de Energía Dominante

La API analiza las 3 cartas seleccionadas y determina cuál energía predomina:
```javascript
Energías: ["positiva", "positiva", "neutra"] → Dominante: "positiva"
Energías: ["negativa", "negativa", "positiva"] → Dominante: "negativa"
```

### Selección de Fragmentos

El algoritmo selecciona fragmentos de texto basándose en:

1. **Tipo de fragmento:** introducción, desarrollo (carta 1, 2, 3), transiciones, cierre
2. **Condiciones:** energía dominante, temas de la carta, posición
3. **Evita repetición:** No usa el mismo fragmento dos veces en una predicción

### Construcción del Texto
```
[Introducción] + [Desarrollo Carta 1] + [Transición] + 
[Desarrollo Carta 2] + [Transición] + [Desarrollo Carta 3] + [Cierre]
```

---

## 🌍 Deploy

### Render (Recomendado)

1. Sube tu código a GitHub
2. Conecta tu repositorio en [Render](https://render.com)
3. Configura:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment Variables:** `PORT=3001`
4. Deploy automático en cada push 🚀


---

## 🤝 Contribuir

¿Quieres añadir más fragmentos sarcásticos o mejorar el algoritmo? ¡Bienvenida sea tu contribución!

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Añade nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request


---


## 👩‍💻 Autora

**Olga Ramos Rodríguez**  
Pitonisa junior y programadora Full Stack

- GitHub: [@olgararo](https://github.com/olgararo)
- LinkedIn: [Olga Ramírez](https://www.linkedin.com/in/olga-ramirez-rodriguez/)

---

## 🙏 Agradecimientos

- A la procrastinación, por ser mi musa constante
- Al café, por existir
- A mis bugs, por enseñarme humildad
- A ti, por leer hasta aquí (en serio, gracias)

---

<div align="center">

**✨ Que el cosmos te acompañe ✨**

*Hecho con sudor, lágrimas y un poco de IA*

</div>
