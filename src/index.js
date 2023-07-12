import app from "./app.js";
import pkg from './cleaner.cjs';
const { cleanup } = pkg;


setInterval(cleanup,(60 * 60 * 1000));



app.listen(app.get('port'));
console.log(`Servidor en el puerto ${app.get('port')} || url: ${app.get('url')}`);