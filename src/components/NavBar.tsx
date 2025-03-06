import React, {useState} from "react";
import {Link} from "react-router-dom";
import Collab from "./Collab.tsx";

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-screen bg-black text-white px-4 py-1 shadow-md">
            <div className="mx-auto flex justify-between items-center">
                <div className="flex items-center gap-x-3">
                    <Link to="/" className="text-xl font-bold">
                        Waishuangxi Watershed Area
                    </Link>
                    <div className="hidden md:flex">
                        <Collab/>
                    </div>
                </div>
                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-4">
                    <li>
                        <Link to="/about" className="hover:text-gray-300">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/location" className="hover:text-gray-300">
                            Locations
                        </Link>
                    </li>
                    <li>
                        <Link to="/vlogs" className="hover:text-gray-300">
                            Vlogs
                        </Link>
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
                <div className="md:hidden flex flex-col gap-2 mt-2 bg-black p-4 rounded shadow-md">
                    <ul>
                        <li>
                            <Link to="/about" className="block hover:text-gray-300">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/location" className="block hover:text-gray-300">
                                Location
                            </Link>
                        </li>
                        <li>
                            <Link to="/vlogs" className="hover:text-gray-300">
                                Vlogs
                            </Link>
                        </li>
                    </ul>
                    <div className="mt-4 flex justify-center">
                        <Collab />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;