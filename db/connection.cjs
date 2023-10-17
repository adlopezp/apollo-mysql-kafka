const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'mariadb',
      port : 3306,
      user : 'root',
      password : 'adminadmin',
      database : 'preguntas'
    }
  });
  module.exports = {knex}