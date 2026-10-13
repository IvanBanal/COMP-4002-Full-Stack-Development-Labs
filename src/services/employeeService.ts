import type { Department, Employee } from "../types/Employee";
import { employeeRepo } from "../apis/employeeRepo";

export interface CreateEmployeeResult {
    success: boolean;
    message?: string;
    employee?: Employee;
}

