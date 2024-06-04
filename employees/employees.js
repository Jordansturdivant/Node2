const express = require('express');
const employees = require('./employees.json');

const app = express();
const PORT = 4000;

// GET all employees
app.get('/employees', (req, res) => {
  res.json(employees);
});

// GET employee by ID
app.get('/employees/:employeeID', (req, res) => {
  const employeeID = parseInt(req.params.employeeID);
  const employee = employees.find(emp => emp.employeeID === employeeID);
  //this is the 404 error in case wrong Id is given
  if (!employee) {
    return res.status(404).json({ error: 'Employee not found' });
  }

  res.json(employee);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});