import { useState } from "react";
import { useFormInput } from "./useFormInput";
import type { CreatePersonInput, CreatePersonResult } from "../services/organizationService";

interface UseAddRoleFormProps {
    onAddRole: (input: CreatePersonInput) => Promise<CreatePersonResult>;
}

export function useAddRoleForm({ onAddRole }: UseAddRoleFormProps) {
    const firstName = useFormInput();
    const lastName = useFormInput();
    const role = useFormInput();
    const [error, setError] = useState("");

    async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        setError("");

        const validFirstName = firstName.validate((value) => 
            value.trim().length < 3 ? "First name must be at least 3 characters." : null
        );

        const validRole = role.validate((value) => 
            value.trim() === "" ? "Please enter a role." : null  
        );

        if (!validFirstName || !validRole) {
            return;
        }
    }
}