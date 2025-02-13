import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AdminRoutes from "../AdminRoutes";

const Sidebar = ({ isSidebarVisible, toggleSidebar, navigate }) => {
  const [activePanel, setActivePanel] = useState(""); // Track current active panel
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleNavigation = (path) => {
    // Navigate to the panel even if it's already active
    setActivePanel(path);
    navigate(path);
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Sidebar */}
      <div
        className={`absolute left-0 mt-14 bg-gray-300 transition-all duration-300 z-40 h-full 
          ${isSidebarVisible ? "w-64" : "w-20"} 
          ${isMobileMenuOpen ? "translate-x-0" : ""} 
          md:h-[calc(100vh-3.5rem)] md:flex md:flex-col md:fixed`}
      >
        {/* Sidebar Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-1/2 -right-3 transform -translate-y-1/2 bg-gray-700 text-white p-1.5 
          rounded-full shadow-md hover:bg-gray-900 transition-all duration-300"
        >
          {isSidebarVisible ? <FaChevronLeft size={16} /> : <FaChevronRight size={16} />}
        </button>

        {/* Sidebar Menu */}
        <nav className="flex flex-col flex-1 overflow-y-auto">
          {AdminRoutes.map((route, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(route.path)}
              className={`flex items-center gap-3 px-4 py-2 text-md font-bold 
                 transition-all duration-200 text-[#3B3F70]
                ${activePanel === route.path ? "bg-[#3B3F70] text-white" : ""}
                ${!isSidebarVisible && "justify-center"}`}
            >
              {route.icon && <span>{route.icon}</span>}
              {isSidebarVisible && <span>{route.label}</span>}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
