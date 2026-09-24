import { Header } from "./components/Header/Header";
import { EmployeeDirectory } from "./components/EmployeeDirectory/EmployeeDirectory";
import { Footer } from "./components/Footer/Footer";
import { departments } from "./data/departments";
import "./App.css";
import { useState } from "react";
import type { Employee } from "./types/Employee";
import { AddEmployeeForm } from "./components/AddEmployeeForm/AddEmployeeForm";

function App() {
    /**
     * For reference: 
     * deparmentList is the state variable. 
     * setDepartmentList is the function used to update the current departments array with a new one.
     * Department[] is the state type annotation for departmentList. 
     * Department[] means an array containing Department objects. 
     * departments is the initial value of the array containing Department objects.
     */
    const [departmentList, setDepartmentList] = useState(departments);

    function addEmployee(departmentName: string, employee: Employee) {
        // Using setDepartmentList to update the state and then giving it an arrow function. 
        // Goes through every department with map.
        setDepartmentList((currentDepartments) => 
            currentDepartments.map((department) => {
                // Checks whether the department selected by the user matches the current department. 
                // Without this check, the new employee would be added to every department.
                if (department.name === departmentName) {
                    return {
                        // Using spread operator to copy everything from the existing department. 
                        ...department,

                        /**
                         * Creates a new employees array by copying the existing employees and adding the new employee.
                         */
                        employees: [
                            ...department.employees,
                            employee
                        ]
                    };  
                }

                // Return department if nothing changes. 
                return department;
            })
        );
    }

    return (
        <>
            <Header />

            <EmployeeDirectory departments={departmentList} />

            <AddEmployeeForm 
                departments={departmentList}
                onAddEmployee={addEmployee}
            />

            <Footer />
        </>    
    );
}

export default App;