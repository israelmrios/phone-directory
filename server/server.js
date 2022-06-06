const express = require('express');
const db = require('./config/connection');
const departmentRouter = require('./routes/department');
const employeeRouter = require('./routes/employee');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/department', departmentRouter);
app.use('/employee', employeeRouter);

db.once('open', () => {
    app.listen(PORT, () => console.log(`Now listening on localhost:${PORT}`));
});
