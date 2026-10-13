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

}