import React, { useState, useEffect } from 'react';
import { FaSearch, FaBell, FaUserCircle, FaMoon, FaSun } from 'react-icons/fa';
import logo from '../../assets/logo1.png';


const Header = () => {
    // Theme State & Toggle
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [searchActive, setSearchActive] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    // Toggle Theme Mode
    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    // Scroll Behavior (Show on Scroll Up, Hide on Scroll Down)
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    // Dummy Search Data (Replace with API calls)
    const allData = [
        { id: 1, type: 'Customer', name: 'John Doe' },
        { id: 2, type: 'Order', name: 'Order #2451' },
        { id: 3, type: 'Reservation', name: 'Table 5 - Jane Smith' },
        { id: 4, type: 'Customer', name: 'Alice Johnson' },
        { id: 5, type: 'Order', name: 'Order #2783' },
    ];

    // Search Functionality
    useEffect(() => {
        if (searchQuery.length > 0) {
            const filteredResults = allData.filter((item) =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSearchResults(filteredResults);
        } else {
            setSearchResults([]);
        }
    }, [searchQuery]);

    return (
        <header
            className={`fixed top-0 left-0 w-full flex justify-between items-center py-4 px-6 shadow-md dark:bg-[#1a1a1a] bg-gray-100 transition-transform duration-300 ${
                visible ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            {/* LOGO */}
            <div className="flex items-center gap-3">
                <img src={logo} alt="Restro Logo" className="h-10 w-10" />
                <h1 className="text-xl font-bold text-gray-900 dark:text-white tracking-wide font-['Noto Sans']">
                    Forkly POS
                </h1>
            </div>

            {/* SEARCH BAR */}
            <div className="relative">
                <div
                    className={`flex items-center gap-3 transition-all duration-300 bg-gray-200 dark:bg-[#2a2a2a] hover:bg-gray-300 dark:hover:bg-[#333] rounded-full px-6 py-2 shadow-md ${
                        searchActive ? 'w-[500px]' : 'w-[250px]'
                    }`}
                >
                    <FaSearch className="text-gray-700 dark:text-white" />
                    <input
                        type="text"
                        placeholder="🔍 Search..."
                        className="bg-transparent outline-none text-gray-900 dark:text-white w-full"
                        onFocus={() => setSearchActive(true)}
                        onBlur={() => setTimeout(() => setSearchActive(false), 200)}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        value={searchQuery}
                    />
                </div>

                {/* SEARCH RESULTS DROPDOWN */}
                {searchActive && searchResults.length > 0 && (
                    <div className="absolute top-12 left-0 w-full bg-white dark:bg-[#1a1a1a] shadow-lg rounded-lg p-3 z-10 max-h-[200px] overflow-auto">
                        {searchResults.map((item) => (
                            <div
                                key={item.id}
                                className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all cursor-pointer rounded-lg"
                            >
                                <span className="text-gray-800 dark:text-gray-200">{item.name}</span>
                                <span className="text-xs text-gray-500 dark:text-gray-400">{item.type}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* ACTIONS */}
            <div className="flex items-center gap-5">
                {/* Theme Toggle Button */}
                <button
                    onClick={toggleTheme}
                    className="bg-gray-300 dark:bg-[#2a2a2a] hover:bg-gray-400 dark:hover:bg-[#333] p-3 rounded-lg cursor-pointer transition-all shadow-md"
                >
                    {theme === 'dark' ? (
                        <FaSun className="text-yellow-400 text-xl" />
                    ) : (
                        <FaMoon className="text-blue-400 text-xl" />
                    )}
                </button>

                {/* Notifications */}
                <div className="relative bg-gray-300 dark:bg-[#2a2a2a] hover:bg-gray-400 dark:hover:bg-[#333] p-3 rounded-lg cursor-pointer transition-all shadow-md">
                    <FaBell className="text-gray-900 dark:text-white text-2xl" />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                        3
                    </span>
                </div>

                {/* User Profile */}
                <div className="flex items-center gap-3 cursor-pointer">
                    <FaUserCircle className="text-gray-900 dark:text-white text-4xl" />
                    <div className="flex flex-col items-start">
                        <h1 className="text-md text-gray-900 dark:text-white font-semibold">
                            Felix Njuguna
                        </h1>
                        <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Admin</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
