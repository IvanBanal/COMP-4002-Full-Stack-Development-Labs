import "./AddEmployeeForm.css"
import { useState } from "react";

export function AddEmployeeForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    return (
        <form>
            <h2>Add Employee</h2>

            <label>
                First Name:
                <input 
                    type="text"
                    value={firstName}
                    /**
                     * For reference:
                     * onChange is a React event handler. Runs when the value in this input changes. 
                     * (event) => is an arrow function. 
                     * setFirstname is taking whatever the user currently typed and save it as firstnName.
                     * event contains infomration about what happened.
                     * target is the HTML element that caused the event, in this case the <input />
                     * value is the current text inside the input HTML element. 
                     * TLDR: setFirstName(event.target.value) gets the user's current input text and updates
                     * the firstName state with that value. 
                     */
                    onChange={(event) => setFirstName(event.target.value)}
                />
            </label>
            <label>
                Last Name:
                <input
                    type="text"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                />
            </label>
        </form>
    );
}