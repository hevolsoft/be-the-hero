const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(3333);
/* Metodos HTTP
GET: Buscar/listar iformação no backend
POST: criar uma informação no backend
PUT: alterar uma informação no backend
DELETE: deletar informação no backend
*/
/*
Tipos de parametros
Query: Parametros nomeados na rota apos o "?"(Filtros,Paginação)
Route: Parametros utilizados para identificar rescursos
Request bory:
*/
/* 
SQL: MySql, SQlite, postgreSQL, oracle
NoSQL: MongoDB, CouchDB, etc
*/
/*
Driver: SELECT * FROM users
Query Builder: table('users).select('*).where()
*/
