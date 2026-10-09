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


}