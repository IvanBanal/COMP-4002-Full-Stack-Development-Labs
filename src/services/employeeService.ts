import type { Department, Employee } from "../types/Employee";
import { employeeRepo } from "../apis/employeeRepo";

export interface CreateEmployeeResult {
    success: boolean;
    message?: string;
    employee?: Employee;
}

export const employeeService = {
    // Will retrieve department data through the repository.
    async getDepartments(): Promise<Department[]> {
        return employeeRepo.getDepartments();
    },

    async createEmployee(departmentName: string, employee: Employee): Promise<CreateEmployeeResult> {
        if (employee.firstName.trim().length < 3) {
            return {
                success: false,
                message: "First name must be at least 3 characters."
            };
        }

        const departments = await employeeRepo.getDepartments();

        // Using some method here to check whether a department with a specific name exists in the departments array.
        const departmentExists = departments.some((department) => department.name === departmentName);

        if (!departmentExists) {
            return {
                success: false,
                message: "Please select a valid department."
            };
        }

        const createdEmployee = await employeeRepo.createEmployee(
            departmentName,
            {
                ...employee,
                firstName: employee.firstName.trim(),
                lastName: employee.lastName?.trim() || undefined
            }
        );

        return {
            success: true,
            employee: createdEmployee
        };
    }
};