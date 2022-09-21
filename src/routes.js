const express = require('express');

const routes = express.Router();

const Usuario = require('./controllers/usuarios.controllers')
const Produto = require('./controllers/produtos.controllers')

routes.get('/',Usuario.index);

//Rotas de Usuários
routes.post('/api/usuarios', Usuario.create);
routes.get('/api/usuarios',  Usuario.index);
routes.get('/api/usuarios.detalhes/:_id',  Usuario.detalhes)
routes.delete('/api/usuarios/:_id',  Usuario.deletar)
routes.put('/api/usuarios',  Usuario.update)

//Rotas de Produtos
routes.post('/api/produtos',  Produto.create);
routes.get('/api/produtos',  Produto.index);
routes.get('/api/produtos.detalhes/:_id',  Produto.detalhes)
routes.delete('/api/produtos/:_id',  Produto.deletar)
routes.put('/api/produtos',  Produto.update)

module.exports = routes;