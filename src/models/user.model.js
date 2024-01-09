const { conn } = require('../config/conn');


const createUser = async (params) => {
  try {
    const [rows] = await conn.query('INSERT INTO user (name,lastname,email,password) VALUES ?;', [params]);

    const response = {
      isError: false,
      data: rows
    };

    return response;
  } catch (e) {
    const error = {
      isError: true,
      message: `No pudimos crear los valores seleccionados por: ${e}`
    };
    console.log("Falloooo")
    return error;
  } finally {
    await conn.releaseConnection();
  }
};

const credentials = async (params) => {
    try {
      console.log(params)
      const paramsKeys = Object.keys(params);

      // Construir la parte de la consulta SQL dinámicamente
      const whereClause = paramsKeys.map(key => `${key} = ?`).join(' AND ');

      console.log(whereClause);

      // Obtener los valores correspondientes a las claves del objeto
      const paramsValues = Object.values(params);
      console.log(paramsValues);

      const [rows] = await conn.query(`SELECT user_id FROM user WHERE ${whereClause};`,paramsValues);
      console.log(rows[0])
      const response = {
        isError: false,
        data: rows
      };
  
      return response;
    } catch (e) {
      const error = {
        isError: true,
        message: `No pudimos crear los valores seleccionados por: ${e}`
      };
      console.log(e)
      return error;
    } finally {
      await conn.releaseConnection();
    }
  };


module.exports = {
  createUser,
  credentials
};