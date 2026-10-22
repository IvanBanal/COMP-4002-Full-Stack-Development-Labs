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
}