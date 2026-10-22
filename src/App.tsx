import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { EmployeeDirectory } from "./pages/EmployeeDirectory/EmployeeDirectory";
import { AddEmployeeForm } from "./components/AddEmployeeForm/AddEmployeeForm";
import { Layout } from "./components/Layout/Layout";
import { Organization } from "./pages/Organization/Organization";
import { employeeService } from "./services/employeeService";
import { orgnaizationService } from "./services/organizationService";
import type { Department, Employee } from "./types/Employee";
import type { Role } from "./types/Role";
import "./App.css";

function App() {
    const [departmentList, setDepartmentList] = useState<Department[]>([]);
    const [error, setError] = useState("");
    const [organizationRoles, setOrganizationRoles] = useState<Role[]>([]);
    const [organizationError, setOrganizationError] = useState("");

    // Load departments for the Employee Directory. 
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

    // Load organization records.
    useEffect(() => {
        async function loadRoles() {
            try {
                const roles = await orgnaizationService.getRoles();
                setOrganizationRoles(roles);
            } catch {
                setOrganizationError("Unable to load organization records.");
            }
        }

        loadRoles();
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

    // Ask the service to create a person.
    async function addRole(input: {firstName: string; lastName: string; role: string;}) {
        const result = await orgnaizationService.createPerson(input);

        if (result.success) {
            try {
                const roles = await orgnaizationService.getRoles();
                setOrganizationRoles(roles);
                setOrganizationError("");
            } catch {
               setOrganizationError("Person created, but unable to refresh orgnaization records."); 
            }
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
                    element={
                        <Organization 
                            roles={organizationRoles}
                            onAddRole={addRole}
                            error={organizationError}
                        />
                    }
                />
            </Route>
        </Routes>
    );
}

export default App;