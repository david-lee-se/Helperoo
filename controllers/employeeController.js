const knex=require('knex')(require('../knexfile'));

exports.index = (_req, res) => {
    knex('employees')
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(400).send(`request not fulfilled: ${err}`)
        })
}