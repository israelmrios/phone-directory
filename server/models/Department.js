const { Schema, model } = require('mongoose');

const employeeSchema = require('./Employee');

const departmentSchema = new Schema({
    departmentName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    employees: [employeeSchema],
}, {
    timestamps: true,
});

const Department = model('Department', departmentSchema);

module.exports = Department;
