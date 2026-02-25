import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SlideUp from "../../components/SlideUp";
import LoginImage from "../../assets/login-bg.jpg";

export default function SignupPage() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (res.ok) {
        alert("Signup successful!");
        navigate("/login");
      } else {
        alert(data.message || "Signup failed");
      }

    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <section className="relative bg-gray-200 min-h-screen flex items-center overflow-hidden py-8 ">

      <img src={LoginImage} alt="Signup Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-md mx-auto bg-gray-300 p-6 rounded-2xl shadow-2xl">

        <SlideUp delay={200}>
          <h2 className="text-2xl text-center font-bold mb-6">
            Create Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-3">
    
            <input name="firstName" placeholder="First Name" onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2" />

            <input name="middleName" placeholder="Middle Name" onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2" />

            <input name="lastName" placeholder="Last Name" onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2" />
            
            <input type="date" name="dateOfBirth" onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2" />

            <select name="gender" onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2">
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>

            <input type="email" name="email" placeholder="Email"
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2" />

            <input name="username" placeholder="Username"
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2" />

            <input type="password" name="password" placeholder="Password"
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2" />

            <input type="password" name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2" />

            <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
              Sign Up
            </button>

          </form>
        </SlideUp>

      </div>
    </section>
  );
}