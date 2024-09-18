const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({

    Email: String,
    Password: String
})

const EmployeeModel = mongoose.model("employee", EmployeeSchema)

module.exports = EmployeeModel