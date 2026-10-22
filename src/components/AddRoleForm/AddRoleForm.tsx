import { useAddRoleForm } from "../../hooks/useAddRoleForm";
import type { CreatePersonInput, CreatePersonResult } from "../../services/organizationService";

interface AddRoleFormProps {
    onAddRole: (input: CreatePersonInput) => Promise<CreatePersonResult>;
}

export function AddRoleForm({ onAddRole }: AddRoleFormProps) {
    const {
        firstName,
        lastName,
        role,
        error,
        setError,
        handleSubmit 
    } = useAddRoleForm({ onAddRole });

    return (
        <section>
            <h2>Add Person</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="personFirstName">First Name:</label>
                    <input
                        id="personFirstName"
                        type="text"
                        value={firstName.value}
                        onChange={(event) => {
                            firstName.setValue(event.target.value);
                            firstName.setMessage("");
                            setError("");
                        }}
                    />
                </div>

                <div>
                    <label htmlFor="personLastName">Last Name:</label>
                    <input 
                        id="personLastName"
                        type="text"
                        value={lastName.value}
                        onChange={(event) => {
                            lastName.setValue(event.target.value);
                            lastName.setMessage("");
                            setError("");
                        }}
                    />
                </div>
                
                <div>
                    <label htmlFor="personRole">Role:</label>
                    <input 
                        id="personRole"
                        type="text"
                        value={role.value}
                        onChange={(event) => {
                            role.setValue(event.target.value);
                            role.setMessage("");
                            setError("");
                        }}
                    />
                    {role.message && (<p role="alert">{role.message}</p>)} 
                </div>

                {error && <p role="alert">{error}</p>}

                <button type="submit">Add Person</button>
            </form>
        </section>
    );
}