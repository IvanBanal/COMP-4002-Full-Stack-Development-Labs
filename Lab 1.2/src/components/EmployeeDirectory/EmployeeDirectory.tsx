import type { Department } from "../../types/Employee";

interface EmployeeDirectoryProps {
    departments: Department[];
}

export function EmployeeDirectory({ departments }: EmployeeDirectoryProps) {
    return (
        <main>
            {/* For every department, create a <section>. */}
            {departments.map((department) => (
                // Using key so that React uses it to identify items when rendering lists.
                <section key={department.name}>
                    <h2>{department.name}</h2>

                    <ul>
                        {/* For every employee in this department, create an <li>. */}
                        {department.employees.map((employee) => (
                            <li key={`${employee.firstName}-${employee.lastName}`}>
                                {employee.firstName} {employee.lastName}
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </main>
    )
}

