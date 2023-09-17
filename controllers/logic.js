const employees = require('../models/emsmodel')

//  all logics file

employeeRegister = async (req, res) => {

    const file = req.file.filename
    const { fname, lname, email, mobile, gender, status, location } = req.body

    if (!fname || !lname || !email || !file || !mobile || !gender || !status || !location) {
        res.status(404).json("all inputs are required")
    }
    try {
        const preEmployee = await employees.findOne({ email })
        if (preEmployee) {
            res.status(403).json("employee already present")
        }
        else {
            // create object for new employee 
            const newemployee = new employees({ fname, lname, email, mobile, gender, status, profile: file, location })
            await newemployee.save()
            res.status(200).json(newemployee)

        }
    }
    catch {
        res.status(400).json("logic error")
    }
}
// get all employees

getallemployee = async (req, res) => {
    // access the search data from request query
    const { search } = req.query

    // regular expression query
    query = {
        fname: { $regex: search, $options: "i" }
    }

    try {
        const allemployees = await employees.find(query)
        res.status(200).json(allemployees)
    }
    catch (err) {
        res.status(400).json(err)
    }
}

// get single employee

getemployee = async (req, res) => {
    const { id } = req.params
    try {
        const employee = await employees.findOne({ _id: id })
        res.status(200).json(employee)
    }
    catch (err) {
        res.status(400).json(err)
    }
}
// remove employee
removeemployee = async (req, res) => {
    const { id } = req.params
    try {
        const removeemp = await employees.findByIdAndDelete({ _id: id })
        res.status(200).json(removeemp)
    }
    catch (err) {
        res.status(400).json(err)

    }
}

// logic to edit employee
editemployee = async (req, res) => {
    const { id } = req.params



    const { fname, lname, email, mobile, gender, status, location, user_profile } = req.body

    const file = req.file ? req.file.filename : user_profile

    if (!fname || !lname || !email || !mobile || !gender || !status || !location) {
        res.status(404).json("all inputs are required")
    }
    try {
        const user = await employees.findOne({ _id:id })
        if (user) {
            

            // update all values with new data
            user.fname = fname
            user.lname = lname
            user.email = email
            user.mobile = mobile
            user.gender = gender
            user.status = status
            user.location = location
            user.profile = file

            // save
            user.save()
            console.log(user);
            res.status(200).json(user)



        }

    }
   
    catch (err) {
        res.status(400).json(err)
    }
    


}

module.exports = { employeeRegister, getallemployee, getemployee, removeemployee, editemployee }
