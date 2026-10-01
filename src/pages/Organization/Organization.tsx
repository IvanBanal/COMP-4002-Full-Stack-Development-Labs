import type { Role } from "../../types/Role";

interface OrganizationProps {
    roles: Role[];
}

export function Organization({ roles }: OrganizationProps) {
    return (
        <section>
            <h1>Organization</h1>

            {roles.map((person) => (
                <div key={person.name}>
                    <span>{person.name}</span>
                    <span>{person.role}</span>
                </div>
            ))}
        </section>
    );
}