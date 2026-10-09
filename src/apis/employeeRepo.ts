import type { Department, Employee } from "../types/Employee";
import { departments } from "../data/departments";

// The temporary in-memory data storage. 
let departmentData: Department[] = departments.map((department) => ({
    ...department,
    employees: department.employees.map((employee) => ({
        ...employee,
    })),
}));

