import NavBar from "../../components/NavBar";
import LoginImage from '../../assets/login-bg.jpg';
import SlideUp from "../../components/SlideUp";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

    

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async () => {
    try {
        const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
        });

        const data = await res.json();

        if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        alert("Login successful!");
        navigate("/dashboard");
        } else {
        alert(data.message);
        }

    } catch (err) {
        alert("Login failed");
    }
    };

    return (

        <section className="relative bg-gray-200 min-h-screen flex items-center overflow-hidden">
    
            <img src={LoginImage} alt="Login Background" 
            className="absolute inset-0 w-full h-full object-cover "
            />
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    < SlideUp delay={100} duration={700} distance={24} className="transform">

                        <div className="text-white">
                            <h1 className="text-5xl font-bold leading-tight">
                                Welcome Back!
                            </h1>
                            <p className="mt-4 text-2xl text-gray-300">
                                Predict house prices using AI powered machine learning.
                                Fast. Accurate. Smart.
                            </p>
                        </div>
                    </SlideUp>
                    
                    <SlideUp delay={200} duration={700} distance={24} className="transform">
                        <div className="bg-gray-300 w-full p-6 rounded-2xl shadow-2xl max-w-md mx-auto mr-1">
                            <h2 className="text-2xl text-center text-gray-800 mb-6 font-bold">
                                Login to your account
                            </h2>

                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            {/*Need alisdan og button or a*/}
                             <div className="text-right text-sm text-blue-600 mb-4 cursor-pointer">
                                Forgot password?
                            </div>
                            
                            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition" button onClick={handleSubmit}>
                                Login
                            </button>

                            <div className="flex items-center my-6">
                                <div className="flex-1 h-px bg-white"></div>
                                <span className="px-3 text-gray-700 text-sm">OR</span>
                                <div className="flex-1 h-px bg-white"></div>
                            </div>
                            
                            <button className="w-full border py-2 rounded-lg mb-3 hover:bg-gray-50 transition bg-white ">
                                Continue with Google
                            </button>

                            <button className="w-full border py-2 rounded-lg hover:bg-gray-50 transition bg-white">
                                Continue with Facebook
                            </button>

                            <p className="text-center text-sm mt-6">
                                Don’t have an account?
                                <Link to="/signup" className="text-blue-600 ml-1">
                                    Sign up
                                </Link>
                            </p>

                        </div>
                    </SlideUp>
                </div>
            </div>
        </section>
    );
}