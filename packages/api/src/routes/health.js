/* eslint-disable consistent-return */
const express = require('express');


const router = express.Router();

router.get('/app-version', async (req, res, next) => {
   res.json({ version: process.env.APP_VERSION || '3.0.0' });
});



module.exports = router;
