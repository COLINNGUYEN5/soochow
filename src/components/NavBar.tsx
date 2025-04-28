import React, {useState} from "react";
import {Link} from "react-router-dom";
import Collab from "./Collab.tsx";

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
        <nav className="w-screen sm:h-16 bg-nav text-white px-4 py-1 shadow-md overflow-hidden z-40">
            <div className="mx-auto flex justify-between items-center h-full">
                <div className="flex items-center gap-x-3">
                    <Link to="/" className="text-2xl font-radley">
                        explore waishuangxi
                    </Link>
                    <div className="hidden md:flex">
                        <Collab/>
                    </div>
                </div>
                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-4">
                    <li>
                        <Link to="/about" className="text-xl hover:text-gray-300 font-radley">
                            about
                        </Link>
                    </li>
                    <li>
                        <Link to="/sites" className="text-xl hover:text-gray-300 font-radley">
                            sites
                        </Link>
                    </li>
                    <li>
                        <Link to="/collection" className="text-xl hover:text-gray-300 font-radley">
                            collection
                        </Link>
                    </li>
                </ul>
                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-navwords focus:outline-none"
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
        </nav>
            {isMenuOpen && (
                <div className="md:hidden flex flex-col gap-2 bg-nav p-4 rounded-b shadow-md border-t-1 border-gray-500">
                    <ul>
                        <li>
                            <Link to="/about" className="block hover:text-gray-300 font-radley text-white">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/sites" className="block hover:text-gray-300 font-radley text-white">
                                Sites
                            </Link>
                        </li>
                        <li>
                            <Link to="/collection" className="hover:text-gray-300 font-radley text-white">
                                Collection
                            </Link>
                        </li>
                    </ul>
                    <div className="mt-4 flex">
                        <Collab />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;