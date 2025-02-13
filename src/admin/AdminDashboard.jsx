import React, { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
import AdminRoutes from "./AdminRoutes.jsx";

const AdminDashboard = () => {
  const [currentPage, setCurrentPage] = useState("/admin/");
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const renderPage = () => {
    const route = AdminRoutes.find((r) => r.path === currentPage);
    return route ? route.component : <Dashboard />;
  };

  const HeaderSelector = () => {
    if (currentPage.startsWith("/admin/attendance") || currentPage === "/admin/WellnessPanel") {
      return null;
    }
    return <Header isSidebarVisible={isSidebarVisible} />;
  };

  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} navigate={setCurrentPage} />

      <div className="flex flex-col flex-1">
        <div className="h-14">
          <HeaderSelector />
        </div>
        <div className={`flex-1 overflow-y-auto ${isSidebarVisible ? "ml-64" : "ml-20"}`}>
          {renderPage()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
