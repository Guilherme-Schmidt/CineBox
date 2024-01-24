const express = require('express');

const routes = require('./routes.js');

require('../config/database.js');

const app = express();

app.use(express.json());


app.use(routes);


app.listen(3333);