const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);
/**  !!!!MINHAS NOTAS!!!!
 * 
 *  -> node index.js abre o 'servidor'
 *  -> ctrl + C Fecha o 'servidor'
 *  -> npm start inicia pelo nodemon(atualiza sozinho o servidor)
 * 
 * Metodo HTTP:
 * 
 * GET : Buscar/Listar uma informação do back-end
 * POST : Criar uma informação no back-end
 * PUT : Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */


 /**
  * Tipos de Parâmetros:
  * 
  * Query Params: Parametros nomeados enviados na rota apos o simbolo "?"(filtros, paginação)
  * Route Params: Parametros utilizados para identificar recursos 
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.    
  */

  /**
   * SQL: mySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc.
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table ('users').select('*').where()
   */


app.listen(3333);

