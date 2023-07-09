const jwt = require('jsonwebtoken');
const { TOKEN_SECRET, TOKEN_EXPIRATION_TIME } = require('../config.js');
async function crearTokendeAcceso(payload) {
    // generacion de token (pase para saber si tiene autorizacion)
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            TOKEN_SECRET,
            {
                expiresIn: TOKEN_EXPIRATION_TIME,
            },
            (err, token) => {
                // if (err) console.log(err);
                if (err) reject(err);
                resolve(token);
            }

        );
    })
}

module.exports={
    crearTokendeAcceso
}