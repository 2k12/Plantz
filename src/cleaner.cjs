const fs = require('fs');
const path = require('path');

const uploadsFolder = path.join(__dirname, 'uploads'); // Ruta a la carpeta "uploads"
// const maxAge = 24 * 60 * 60 * 1000; // Tiempo de vida máximo de los archivos (en milisegundos) UN DIA
const maxAge = 60 * 60 * 1000; // Tiempo de vida máximo de los archivos (en milisegundos) UNA HORA


const cleanup = () => {

    fs.readdir(uploadsFolder, (err, files) => {
        if (err) {
            console.error('Error al leer la carpeta "uploads"', err);
            return;
        }

        const currentTime = Date.now();

        files.forEach(file => {
            const filePath = path.join(uploadsFolder, file);

            fs.stat(filePath, (err, stat) => {
                if (err) {
                    console.error(`Error al obtener información del archivo "${file}"`, err);
                    return;
                }

                const fileAge = currentTime - stat.ctime.getTime();

                if (fileAge > maxAge) {
                    fs.unlink(filePath, err => {
                        if (err) {
                            console.error(`Error al eliminar el archivo "${file}"`, err);
                            return;
                        }

                        // console.log(`Archivo "${file}" eliminado correctamente`);
                    });
                }
            });
        });
    });

}

module.exports = {cleanup};