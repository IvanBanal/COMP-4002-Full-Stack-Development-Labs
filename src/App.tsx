import { Header } from "./components/Header/Header";
import { EmployeeDirectory } from "./components/EmployeeDirectory/EmployeeDirectory";
import { Footer } from "./components/Footer/Footer";
import { departments } from "./data/departments";
import "./App.css";

function App() {
    return (
        <>
            <Header />

            <EmployeeDirectory departments={departments} />

            <Footer />
        </>    
    );
}

export default App;