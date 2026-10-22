import type { Role } from "../../types/Role";
import { AddRoleForm } from "../../components/AddRoleForm/AddRoleForm";
import type { CreatePersonInput, CreatePersonResult } from "../../services/organizationService";
import "./Organization.css";

interface OrganizationProps {
    roles: Role[];
    onAddRole: (input: CreatePersonInput) => Promise<CreatePersonResult>;
    error?: string;
}

export function Organization({ roles, onAddRole, error }: OrganizationProps) {
    return (
        <section>
            <h1>Organization</h1>

            {error && <p role="alert">{error}</p>}

            {roles.map((person) => (
                <div className="organization-person" key={person.role}>
                    <span>{person.name}</span>
                    <span>{person.role}</span>
                </div>
            ))}

            <AddRoleForm onAddRole={onAddRole} />
        </section>
    );
}