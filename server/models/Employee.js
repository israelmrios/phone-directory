const { Schema, model } = require('mongoose');

const employeeSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    department: {
        type: String,
        required: true,
        trim: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    phone1: {
        type: Number,
        required: true,
        trim: true,
        minlength: 10,
    },
    phone2: {
        type: Number,
        required: true,
        trim: true,
        minlength: 10,
    },
    ext: {
        type: Number,
        trim: true,
    },
    notes: {
        type: String,
    },
}, {
    timestamps: true,
});

const Employee = model('Employee', employeeSchema);

module.exports = Employee;
