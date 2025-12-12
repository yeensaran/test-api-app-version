const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const { notFound, errorHandler } = require('./middlewares');

const app = express();

require('dotenv').config();

app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());

const health = require('./routes/health');

app.use('/api/health', health);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
