import React, {useState} from "react";
import {Link} from "react-router-dom";

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-screen bg-black text-white p-4 shadow-md">
            <div className="mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">
                    Waishuangxi Watershed Area
                </Link>
                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-4">
                    <li>
                        <Link to="/" className="hover:text-gray-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-gray-300">
                            About
                        </Link>
                    </li>
                    <li>
                        <a href="#services" className="hover:text-gray-300">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-gray-300">
                            Contact
                        </a>
                    </li>
                </ul>
                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    aria-label="Open Menu"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                        />
                    </svg>
                </button>
            </div>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <ul className="md:hidden flex flex-col gap-2 mt-2 bg-blue-700 p-4 rounded shadow-md">
                    <li>
                        <Link to="/" className="block hover:text-gray-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="block hover:text-gray-300">
                            About
                        </Link>
                    </li>
                    <li>
                        <a href="#services" className="block hover:text-gray-300">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="block hover:text-gray-300">
                            Contact
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;