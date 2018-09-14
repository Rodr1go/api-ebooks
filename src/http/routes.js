
const knex = require('../services/knex')
const errors = require('restify-errors');

const routes = (server) => {
  
  server.get('/', (req, res, next) => {
    knex('ebook').then((dados) => {
      res.send(dados);
    }, next)
  });
    
  server.post('/create', (req, res, next) => {
    knex('ebook').insert(req.body).then((dados) => {
      res.send(dados);
    }, next)
  });
    
  server.get('/show/:id', (req, res, next) => {
    const { id } = req.params;    
    knex('ebook').where('id', id).first().then((dados) => {
      if(!dados) return res.send(new errors.BadRequestError('Nada foi encontrado!'))
      res.send(dados);
    }, next)
  });
    
  server.put('/update/:id', (req, res, next) => {
    const { id } = req.params;
    knex('ebook').where('id', id).update(req.body).then((dados) => {
      if(!dados) return res.send(new errors.BadRequestError('Nada foi encontrado!'))
      res.send('Dados atualizados com sucesso!');
    }, next)
  });
    
  server.del('/delete/:id', (req, res, next) => {
    const { id } = req.params;
    knex('ebook').where('id', id).delete().then((dados) => {
      if(!dados) return res.send(new errors.BadRequestError('Nada foi encontrado!'))
      res.send('Dados excluídos com sucesso!');
    }, next)
  });
}

module.exports = routes