import type { Role } from "../types/Role";
import { roles } from "../data/roles";

// Temporary in-memory orgnaization data.
let organizationData: Role[] = roles.map((person) => ({
    ...person
}));

