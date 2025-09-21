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

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const [[result]] = await talkerDB.findById(Number(id));
        if (result) {
            res.status(200).json(result);
        } else {
            return res.status(404).json({ message: 'Talker not found' });
        } 
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.sqlMessage });
    }
});



module.exports = router;

