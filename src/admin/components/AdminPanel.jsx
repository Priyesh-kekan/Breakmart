import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import SettingsPanel from './SettingsPanel';

const AdminPanel = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar isSidebarVisible={isSidebarVisible} toggleSidebar={() => setIsSidebarVisible(!isSidebarVisible)} />
      <div className={`transition-all duration-300 ${isSidebarVisible ? 'ml-64' : 'ml-20'}`}>
        <Routes>
          <Route path="/settings/*" element={<SettingsPanel isSidebarVisible={isSidebarVisible} />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminPanel;
