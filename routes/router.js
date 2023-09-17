// set path for each request


const express=require('express')

const uploads = require('../multerconfig/storageconfig')
const { employeeRegister, getallemployee, getemployee, removeemployee, editemployee } = require('../controllers/logic')


getemployee
// create  an object for router class in express
const router=new express.Router()

// register employee - post
router.post('/empolyees/register',uploads.single('user_profile'),employeeRegister)
// get all employees
router.get('/empolyees/getEmployees',getallemployee)

// get single employee details
router.get('/employees/getemployee/:id',getemployee)


// delete employee
router.delete('/employees/removeemployee/:id',removeemployee)

// edit employee
router.put('/employees/updateemployee/:id',uploads.single('userprofile'),editemployee)


module.exports=router