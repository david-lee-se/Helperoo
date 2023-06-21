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

exports.addEmployee = (req, res) => {
    if(!req.body.first_name || !req.body.last_name || !req.body.hire_date || !req.body.date_of_birth || !req.body.phone || !req.body.email) {
        return res.status(400).send('All fields are required!')
    }

    knex('employees')
        .insert(req.body)
        .then((response) => {
            const newEmployee = `/employees/${response[0]}`
            res.status(201).location(newEmployee).end(newEmployee);
        })
        .catch((err) => res.status(400).send(`Failed creating employee: ${err}`))
}

exports.deleteEmployee = (req, res) => {
    knex('employees')
        .delete()
        .where({id: req.params.id})
        .then(() => {
            res.status(200).send(`Employee has been deleted.`)
        })
        .catch((err) => {
            res.status(400).send(`Error deleting employee ${err}.`)
        })
}