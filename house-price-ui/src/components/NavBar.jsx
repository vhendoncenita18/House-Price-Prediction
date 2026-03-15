import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const token = localStorage.getItem("token");
  const storedUser = localStorage.getItem("user");

  let user = null;
  try {
    user = storedUser ? JSON.parse(storedUser) : null;
  } catch {
    user = null;
  }

  const avatarText = (user?.firstName || user?.username || user?.email || "U").charAt(0).toUpperCase();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-gray-100 fixed shadow-md z-50 top-0 left-0 w-full h-16 flex items-center justify-between px-16">
      <div className="text-2xl font-bold text-gray-800">House</div>

      <ul className="flex space-x-9 text-gray-600">
        <li>
          <Link to="/dashboard" className="hover:text-blue-600 transition">
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/predict" className="hover:text-blue-600 transition">
            Predict
          </Link>
        </li>

        <li>
          <Link to="/houses" className="hover:text-blue-600 transition">
            Browse Houses
          </Link>
        </li>
      </ul>

      <div className="relative" ref={dropdownRef}>
        <div
          onClick={() => setOpen(!open)}
          className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center cursor-pointer"
        >
          {avatarText}
        </div>

        {open && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-3 space-y-2">
            {token ? (
              <>
                <Link to="/dashboard" className="block hover:text-blue-600">
                  Dashboard
                </Link>

                <Link to="/history" className="block hover:text-blue-600">
                  History
                </Link>

                <button
                  onClick={handleLogout}
                  className="w-full text-left text-red-600 hover:text-red-800"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="block hover:text-blue-600">
                  Login
                </Link>

                <Link to="/signup" className="block hover:text-blue-600">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
