const router = require('express').Router();
const employeeController = require('../controllers/employeesController');

router
    .route('/')
    .get(employeeController.index)
    .post(employeeController.addEmployee);
          
router
    .route('/browse')
    .get(employeeController.getEmployees)
router  
    .route('/:id')
    .get(employeeController.singleEmployee)
    .delete(employeeController.deleteEmployee);


module.exports = router;