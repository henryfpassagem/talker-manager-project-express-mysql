const connection = require('./connection');

const findAll = () => connection.execute(
    'SELECT * FROM talkers',
);

const findById = (id) => connection.execute(
    `SELECT * FROM talkers WHERE id = ?`,
    [id],
);

module.exports = {
    findAll,
    findById,
};
