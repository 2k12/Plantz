import pkg from 'pg';
const { Pool } = pkg;

// Resto del código que utiliza 'Pool'

import  { db } from './config.js'


export const pool = new Pool({
    user:db.user,
    password: db.passsword,
    host: db.host,
    port: db.port,
    database: db.database

});

// export default pool;