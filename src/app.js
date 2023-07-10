const express = require("express");
const morgan = require("morgan");
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoutes = require("./routes/auth.routes.js");
const taxonomoRoutes = require("./routes/taxonomo.routes.js");
const adminRoutes = require("./routes/admin.routes.js");
const app = express();

// settings
app.set('port',process.env.PORT || 4000);
app.set('url', `http://localhost:${app.get('port')}`);


// middlewares
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/access", authRoutes);   // las rutas empezan con el prefijo establaecido
app.use("/access/tax", taxonomoRoutes); // las rutas empezan con el prefijado access
app.use("/access/adm", adminRoutes);

// manejo de rutas no encontradas (404) 
// app.use((req, res, next) => {
    // res.status(404).json({ message: 'Página no encontrada' });
// });



module.exports = app;