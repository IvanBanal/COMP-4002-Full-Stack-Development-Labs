import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";

export function Layout() {
    return (
        <>
        <Header />
        <Navbar />
        <Outlet />
        <Footer />
        </>  
    );
}