import { useState } from "react";
import { useFormInput } from "./useFormInput";
import type { CreatePersonInput, CreatePersonResult } from "../services/organizationService";

interface UseAddRoleFormProps {
    onAddRole: (input: CreatePersonInput) => Promise<CreatePersonResult>;
}

