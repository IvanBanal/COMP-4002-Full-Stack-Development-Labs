import type { Role } from "../types/Role";
import { roles } from "../data/roles";

// Temporary in-memory orgnaization data.
let organizationData: Role[] = roles.map((person) => ({
    ...person
}));

export const organizationRepo = {
    // Gets a copy of all organization records.
    async getRoles(): Promise<Role[]> {
        return organizationData.map((person) => ({
            ...person
        }));
    },
}
