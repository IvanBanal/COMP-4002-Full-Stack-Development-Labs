import type { Department, Employee } from "../types/Employee";
import { departments } from "../data/departments";

// The temporary in-memory data storage. 
let departmentData: Department[] = departments.map((department) => ({
    ...department,
    employees: department.employees.map((employee) => ({
        ...employee,
    })),
}));

export const employeeRepo = {
    // Will return a copy of all departments and their employees.
    async getDepartments(): Promise<Department[]> {
        return departmentData.map((department) => ({
            ...department,
            employees: department.employees.map((employee) => ({
                ...employee,
            })),
        }));
    },

    // Will create an employee in the specified department.
    async createEmployee(departmentName: string, employee: Employee): Promise<Employee> {
        const department = departmentData.find((department) => department.name === departmentName);
        
        if (!department) {
            throw new Error("Department does not exist.");
        }

        // Creating a copy of the employee object here using spread operator. 
        department.employees.push({ ...employee });

        return { ...employee };
    }
};