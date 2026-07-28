import React from 'react';
import EmployeeCard from './EmployeeCard';

const EmployeesList = ({ employees }) => {
  return (
    <div>
      <h3>Team Directory</h3>
      {employees.map(emp => (
        <EmployeeCard key={emp.id} employee={emp} />
      ))}
    </div>
  );
};
export default EmployeesList;
