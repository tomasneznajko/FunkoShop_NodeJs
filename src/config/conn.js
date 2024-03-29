const mysql = require('mysql2');


/*
 * Creamos un pool de conexiones
 */

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.DBPASS,
  database: process.env.DB,
  port: process.env.PORT_BD,
  waitForConnections: true,
  connectionLimit: 0,
  queueLimit: 0,
});

/**
 * Testeamos que la conexión sea exitosa
 */

pool.getConnection((error, connection) => {
  if (error) {
    console.error('Error al obtener una conexión:', error);
    console.log(process.env.USER);
    console.log(process.env.HOST);

  } else {
    console.log('Conexión exitosa a la base de datos');
    connection.release();
  }
});

module.exports = {
  conn: pool.promise()
};
