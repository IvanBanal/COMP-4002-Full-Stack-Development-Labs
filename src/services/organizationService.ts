import type { Role } from "../types/Role";
import { organizationRepo } from "../apis/organizationRepo";

export interface CreatePersonInput {
    firstName: string;
    lastName: string;
    role: string;
}

export interface CreatePersonResult {
    success: boolean;
    message?: string;
    person?: Role;
}

export const orgnaizationService = {
    async getRoles(): Promise<Role[]> {
        return organizationRepo.getRoles();
    },

    async createPerson(input: CreatePersonInput): Promise<CreatePersonResult> {
        const firstName = input.firstName.trim();
        const lastName = input.lastName.trim();
        const role = input.role.trim();

        // First name must contain at least 3 characters.
        if (firstName.length < 3) {
            return {
                success: false,
                message: "First name must be at least 3 characters."
            };
        }

        if (!role) {
            return {
                success: false,
                message: "Please enter a role."
            };
        }

        const existingRoles = await organizationRepo.getRoles();

        // A role can only be assigned to one person.
        const roleOccupied = existingRoles.some((person) => 
            person.role.trim().toLowerCase() === role.toLowerCase());

        if (roleOccupied) {
            return {
                success: false,
                message: "This role is already occupied."
            };
        }

        const person: Role = {
            name: [firstName, lastName].filter(Boolean).join(" "),
            role
        };

        const createdPerson = await organizationRepo.createPerson(person);

        return {
            success: true,
            person: createdPerson
        };
    }
};
