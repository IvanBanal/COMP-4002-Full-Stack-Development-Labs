import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { EmployeeDirectory } from "./pages/EmployeeDirectory/EmployeeDirectory";
import { AddEmployeeForm } from "./components/AddEmployeeForm/AddEmployeeForm";
import { Layout } from "./components/Layout/Layout";
import { Organization } from "./pages/Organization/Organization";
import { roles } from "./data/roles";
import { employeeService } from "./services/employeeService";
import type { Department, Employee } from "./types/Employee";
import "./App.css";

function App() {
    const [departmentList, setDepartmentList] = useState<Department[]>([]);
    const [error, setError] = useState("");

    // Load departments. 
    useEffect(() => {
        async function loadDepartments() {
            try {
                const departments = await employeeService.getDepartments();
                setDepartmentList(departments);
            } catch {
                setError("Unable to load departments.")
            }
        }

        loadDepartments();
    }, []);

    // Ask the service to create an employee.
    async function addEmployee(departmentName: string, employee: Employee) {
        const result = await employeeService.createEmployee(departmentName, employee);

        // Refresh department data after successful creation.
        if (result.success) {
            const departments = await employeeService.getDepartments();
            setDepartmentList(departments);
        }

        return result;
    }

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route 
                    path="employees"
                    element={
                        <>
                            {error && <p role="alert">{error}</p>}

                            <EmployeeDirectory 
                                departments={departmentList} 
                            />

                            <AddEmployeeForm
                                departments={departmentList}
                                onAddEmployee={addEmployee}
                            />
                        </>
                    }
                />

                <Route 
                    path="organization"
                    element={<Organization roles={roles} />}
                />
            </Route>
        </Routes>
    );
}

export default App;