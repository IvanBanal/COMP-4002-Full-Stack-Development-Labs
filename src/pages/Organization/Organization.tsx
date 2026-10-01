import type { Role } from "../../types/Role";
import "./Organization.css";

interface OrganizationProps {
    roles: Role[];
}

export function Organization({ roles }: OrganizationProps) {
    return (
        <section>
            <h1>Organization</h1>

            {roles.map((person) => (
                <div className="organization-person" key={person.name}>
                    <span>{person.name}</span>
                    <span>{person.role}</span>
                </div>
            ))}
        </section>
    );
}