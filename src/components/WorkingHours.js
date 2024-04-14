import React, { useState, useEffect } from 'react';
// import './App.css';
import employeeData from './employeeData';
import styles from './WorkingHours.module.scss';

function App() {
  const [displayOption, setDisplayOption] = useState('project'); // Default display option
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    // Load data from employeeData.js when the component mounts
    setDisplayData(employeeData.employees);
  }, []);

  // Function to handle display option change
  const handleDisplayOptionChange = (option) => {
    setDisplayOption(option);
    if (option === 'project') {
      setDisplayData(employeeData.employees); // Display data by project
    } else {
      setDisplayData(getEmployeeWiseData()); // Display data by employee
    }
  };

  // Function to get employee-wise data
  const getEmployeeWiseData = () => {
    const employeeWiseData = [];
    employeeData.employees.forEach(employee => {
      employee.projects.forEach(project => {
        const existingEmployee = employeeWiseData.find(item => item.name === employee.name);
        if (existingEmployee) {
          existingEmployee.projects.push({
            project_name: project.project_name,
            hours_worked: project.hours_worked
          });
        } else {
          employeeWiseData.push({
            name: employee.name,
            projects: [{ project_name: project.project_name, hours_worked: project.hours_worked }]
          });
        }
      });
    });
    return employeeWiseData;
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.ha}>Data Display Options</h1>
      <div className={styles.options}>
        <button className={styles.button1} onClick={() => handleDisplayOptionChange('project')}>View-1</button>
        <button className={styles.button1} onClick={() => handleDisplayOptionChange('employee')}>View-2</button>
      </div>
      <div className={styles.datacontainer}>
        {displayOption === 'project' ? (
          displayData.map(employee => (
            <div className={styles.projectcontainer} key={employee.name}>
              <h3>{employee.name}</h3>
              <ul>
                {employee.projects.map(project => (
                  <li key={project.project_name}>
                    {project.project_name}: {project.hours_worked} hours
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          displayData.map(employee => (
            <div className={styles.employeecontainer} key={employee.name}>
              <h3>{employee.name}</h3>
              <ul className={styles.ulu}>
                {employee.projects.map(project => (
                  <li className={styles.lis} key={project.project_name}>
                    {project.project_name}: {project.hours_worked} hours
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
