import express from "express";
import morgan from "morgan";
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoutes from "./routes/auth.routes.js";
import taxonomoRoutes from "./routes/taxonomo.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import userallRoutes from "./routes/userall.routes.js";
import fileUpload from'express-fileupload';

const app = express();

// settings
app.set('port',process.env.PORT || 4000);
app.set('url', `http://localhost:${app.get('port')}`);


// middlewares
app.use(cors({
    origin: 'http://localhost:8080',
    // origin: 'https://plantz-five.vercel.app',
    credentials: true,
    sameSite: "none"
}));

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads'
}));
// routes
app.use( authRoutes);   // las rutas empezan con el prefijo establaecido
app.use("/tax", taxonomoRoutes); // las rutas empezan con el prefijado access
app.use("/adm", adminRoutes);
app.use("/all", userallRoutes);

// manejo de rutas no encontradas (404) 
// app.use((req, res, next) => {
    // res.status(404).json({ message: 'Página no encontrada' });
// });



export default app;