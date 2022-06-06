const { Schema, model } = require('mongoose');

const departmentSchema = new Schema({
    departmentName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
}, {
    timestamps: true,
});

const Department = model('Department', departmentSchema);

module.exports = Department;
