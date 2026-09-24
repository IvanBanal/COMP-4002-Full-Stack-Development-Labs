import "./AddEmployeeForm.css";
import { useState } from "react";
import type { Department, Employee } from "../../types/Employee";

interface AddEmployeeFormProps {
    departments: Department[],
    // This function returns nothing.
    onAddEmployee: (
        departmentName: string,
        employee: Employee
    ) => void
}
 
export function AddEmployeeForm({ departments, onAddEmployee }: AddEmployeeFormProps) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [error, setError] = useState("");
    const [department, setDepartment] = useState("");

    function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        // This will prevent the browser's default behavior for this event.
        event.preventDefault();

        // Clear any previous validation message.
        setError("");

        // Validate First Name.
        if (firstName.trim().length < 3) {
            setError("First name must be at least 3 characters.");
            return;
        }

        // Validate department.
        // Checks if department exists.
        if (!department) {
            setError("Please select a department.");
            return;
        }

        // Creates a new  employee.
        const newEmployee: Employee = {
            // first and last name properties with the actual firstName and lastName values trimmed of whitespaces.
            firstName: firstName.trim(),
            // Putting undefined here since lastName?: string means that lastName is optional.
            lastName: lastName.trim() || undefined
        };

        // Send the new employee to App.
        onAddEmployee(department, newEmployee);

        // Clear the form after a successful submission.
        setFirstName("");
        setLastName("");
        setDepartment("");
    }
 
    return (
        <section>
             <h2>Add Employee</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        First Name:
                    </label>
                        <input 
                            type="text"
                            value={firstName}
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
                            onChange={(event) => setFirstName(event.target.value)}
                        />
                </div>

                <div>
                    <label>
                        Last Name:
                    </label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                        />
                </div>

                <div>
                    <label htmlFor="department">
                        Department:
                    </label>

                    <select
                        id="department"
                        value={department}
                        onChange={(event) => setDepartment(event.target.value)}
                    >
                        <option value="">
                            Select a department
                        </option>

                        {departments.map((department) => (
                            <option 
                                key={department.name}
                                value={department.name}
                            >
                                {   department.name}
                            </option>
                        ))}
                    </select>
                </div>  
                
                {/* Conditional rendering: if an error exists, show <p>{error}</p> */}
                {error && <p>{error}</p>}

                <button type="submit">
                    Add Employee
                </button>
            </form> 
        </section>
    );
}