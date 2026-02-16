import NavBar  from "../components/NavBar";
import { Outlet } from "react-router-dom";  

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-gray-100">

            <NavBar />

            <main className="pt-[64px]">
                <Outlet />
            </main>
        </div>


    );
}