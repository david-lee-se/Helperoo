const router = require('express').Router();
const employeeController = require('../controllers/employeesController');

router.route('/').get(employeeController.index);
          
router.route('/').post(employeeController.addEmployee);


module.exports = router;