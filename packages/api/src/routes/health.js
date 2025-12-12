/* eslint-disable consistent-return */
const express = require('express');


const router = express.Router();

router.get('/app-version', async (req, res, next) => {
   res.json({ version: process.env.APP_VERSION__ || '3.0.2' });
});



module.exports = router;
