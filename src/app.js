
// comando para importar o express no nodejs
const express = require('express')
const { errors } = require('celebrate')
const routes = require('./routes')
const cors = require('cors')

const app = express();

app.use(cors())
//antes das requisições corverter o body de json para um formato conhecido (objeto javascript)
app.use(express.json());

app.use(routes);
app.use(errors())
// esta variavel é usada para acessar localmente minha api
//app.listen(3333);

module.exports = app