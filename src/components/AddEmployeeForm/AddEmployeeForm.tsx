import "./AddEmployeeForm.css";
import { useState } from "react";
import type { Department, Employee } from "../../types/Employee";
import { useFormInput } from "../../hooks/useFormInput";

interface AddEmployeeFormProps {
    departments: Department[],
    onAddEmployee: (
        departmentName: string,
        employee: Employee
    ) => Promise<{
        success: boolean;
        message?: string,
        employee?: Employee;
    }>;
}
 
export function AddEmployeeForm({ departments, onAddEmployee }: AddEmployeeFormProps) {
    const firstName = useFormInput();
    const lastName = useFormInput();
    const department = useFormInput();
    const [error, setError] = useState("");

    async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        // This will prevent the browser's default behavior for this event.
        event.preventDefault();

        // Clear any previous validation message.
        setError("");

        // Validate First Name using the custom hook.
        const validFirstName = firstName.validate((value) => 
            value.trim().length < 3 ? "First name must be at least 3 characters." : null
        );

        // Validate that a department was selected.
        const validDepartment = department.validate((value) =>
            value === "" ? "Please select a department." : null
        );

        if (!validFirstName || !validDepartment) {
            return;
        }

        // Creates a new  employee.
        const newEmployee: Employee = {
            // first and last name properties with the actual firstName and lastName values trimmed of whitespaces.
            firstName: firstName.value.trim(),
            // Putting undefined here since lastName?: string means that lastName is optional.
            lastName: lastName.value.trim() || undefined
        };

        try {
            const result = await onAddEmployee(department.value, newEmployee);

            if (!result.success) {
                setError(result.message ?? "Unable to create employee.");
                return;
            }

            // Clear all inputs after successful creation.
            firstName.reset();
            lastName.reset();
            department.reset();
        } catch {
            setError("An error occurred while creating the employee.");
        }
    }
 
    return (
        <section>
             <h2>Add Employee</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input 
                        id="firstName"
                        type="text"
                        value={firstName.value}
                        /**
                         * For reference:
                         * onChange is a React event handler. Runs when the value in this input changes. 
                         * (event) => is an arrow function. 
                         * setFirstname is taking whatever the user currently typed and save it as firstnName.
                         * event contains infomration about what happened.
                         * target is the HTML element that caused the event, in this case the <input />
                         * value is the current text inside the input HTML element. 
                         * TLDR: setFirstName(event.target.value) gets the user's current input text and updates
                         * the firstName state with that value. 
                         */
                        onChange={(event) =>{
                            firstName.setValue(event.target.value);
                            firstName.setMessage("");
                        }}
                    />
                    {firstName.message && (
                        <p role="alert">{firstName.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        id="lastName"
                        type="text"
                        value={lastName.value}
                        onChange={(event) => {
                            lastName.setValue(event.target.value);
                            lastName.setMessage("");
                        }}
                    />
                    {lastName.message && (
                        <p role="alert">{lastName.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="department">Department:</label>
                    <select
                        id="department"
                        value={department.value}
                        onChange={(event) => {
                            department.setValue(event.target.value);
                            department.setMessage("");
                        }}
                    >
                        <option value="">Select a department</option>

                        {departments.map((item) => (
                            <option key={item.name} value={item.name}>
                                {item.name}
                            </option>
                        ))}
                    </select>

                    {department.message && (
                        <p role="alert">{department.message}</p>
                    )}
                </div>  
                
                {/* Conditional rendering: if an error exists, show <p>{error}</p> */}
                {error && <p role="alert">{error}</p>}

                <button type="submit">Add Employee</button>
            </form> 
        </section>
    );
}