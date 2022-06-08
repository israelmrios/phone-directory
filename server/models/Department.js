const mongoose = require('mongoose');

const departmentSchema = mongoose.Schema({
    departmentName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
}, {
    timestamps: true,
});

// const Department = model('Department', departmentSchema);

module.exports = mongoose.model('Department', departmentSchema);
