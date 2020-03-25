const express = require('express')

const OngController = require('./controllers/OngController')
const IncidentControler = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

//Método para buscar informações no banco
routes.post('/session', SessionController.create)

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentControler.index);
routes.post('/incidents', IncidentControler.create);
routes.delete('/incidents/:id', IncidentControler.delete);



module.exports = routes;

/**
 * Rotas = Recursos
 * recurso de usuarios "/users"
 */

/**
 * Métodos HTTP:
 *  
 * GET: Busca/listar uma informação do backend
 * POST: criar uma informação no backend
 * PUT: Alterar uma informação no backned
 * DELETE: deletar uma informação no backend
 * */ 

 /**
  * Tipos de parâmetros
  * 
  * Query Params: Parâmetros nomeados enviados na rota apos o "?" (filtros, paginação)
  ***** ex: http://localhost:3333/users?page=2&nome=Fernando
  * Route Params: Parâmetros utilizados para identificar recuros "/:id"
  ***** ex: http://localhost:3333/users/1
  * Request Body: corpo da requisição, utilizado para criar ou alterar recursos
  ***** ex: http://localhost:3333/users/1
  */
//execultando a primeira rota e precisa de dois parametros (requisição, resposta)
/**
 * request: guarda todos os dados que vem atraves da riquisição
 * response: retorna a resposta pro usuario
 */
/*
 routes.post( '/users', (request, response) => {
  
  //const params = request.query // acessa os querys
  //const params = resquest.params //acessa as rotas
  const body = request.body;

  console.log(body)

  return response.json({
    evento: 'Semana OmniStack',
    aluno: 'Fernando Melo'
  })
});

module.exports = routes;
*/