import { Header } from "./components/Header/Header";
import { EmployeeDirectory } from "./components/EmployeeDirectory/EmployeeDirectory";
import { Footer } from "./components/Footer/Footer";
import { departments } from "./data/departments";
import "./App.css";
import { useState } from "react";
import type { Department } from "./types/Employee";
import { AddEmployeeForm } from "./components/AddEmployeeForm/AddEmployeeForm";

function App() {
    /**
     * For reference: 
     * deparmentList is the state variable. 
     * setDepartmentList is the function used to update the current departments array with a new one.
     * Department[] is the state type annotation for departmentList. 
     * Department[] means an array containing Department objects. 
     * departments is the initial value of the array containing Department objects.
     */
    const [departmentList, setDepartmentList] = useState<Department[]>(departments)

    return (
        <>
            <Header />

            <EmployeeDirectory departments={departments} />

            <AddEmployeeForm />

            <Footer />
        </>    
    );
}

export default App;