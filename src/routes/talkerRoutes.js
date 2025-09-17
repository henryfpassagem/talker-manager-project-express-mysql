const express = require('express');
const talkerDB = require('../db/talkerDB');
// const { route } = require('../app');

const router = express.Router();

router.get('/', async (_req, res) => {
    try {
        const [result] = await talkerDB.findAll();
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.sqlMessage });
    }
});

module.exports = router;

