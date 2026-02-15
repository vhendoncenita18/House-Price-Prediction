import { Link } from 'react-router-dom';
import SlideUp from './SlideUp';

export default function NavBar() {
    return (
       
            <nav className="bg-gray-100 fixed shadow-md z-50 top-0 left-0 w-full h-16 flex items-center justify-between px-16">
            
                <div className="text-2xl font-bold text-gray-800">
                    House
                </div>

                <ul className="flex space-x-9 text-gray-600"> 
                    <li><a href="#" className="hover:text-blue-600 transition">Home</a></li>
                    <li><a href="#" className="hover:text-blue-600 transition">About</a></li>
                    <li><a href="#" className="hover:text-blue-600 transition">Contact</a></li>
                </ul>

                <button className="md:hidden">
                    ☰
                </button>

                <div>
                    <Link to="/login">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                            Login
                        </button>
                    </Link>
                </div>
            </nav>
        
    );
}