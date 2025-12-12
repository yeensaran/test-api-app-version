const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');

const { notFound, errorHandler } = require('./middlewares');

const app = express();

require('dotenv').config();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());

console.log("process.env.APP_VERSION: ",process.env.APP_VERSION || "");

const health = require('./routes/health');

app.use('/api/health', health);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
