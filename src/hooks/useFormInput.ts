import { useState } from "react";


export function useFormInput(initialValue: string = "") {
    const [value, setValue] = useState(initialValue);
    const [message, setMessage] = useState("");

    function validate(validationCallback: (value: string) => string | null): boolean {
        const validationMessage = validationCallback(value);

        // Will use validationMessage if it exists and if not then use an empty string.
        setMessage(validationMessage ?? "");

        return validationMessage === null;
    }
    
    function reset() {
        setValue("");
        setMessage("");
    }

    return {
        value, 
        setValue,
        message,
        setMessage,
        validate,
        reset
    };
}