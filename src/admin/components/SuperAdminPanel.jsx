import React, { useState } from 'react';
import Header from './Header';
import SuperAdminNavbar from './SuperAdminComponents/SuperAdminNavbar';

const SuperAdminPanel = () => {
  const [activeTab, setActiveTab] = useState('team');

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <SuperAdminNavbar 
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </div>
  );
};

export default SuperAdminPanel;
