import React, { useState } from "react";
import Header from "./Header";
import SettingsNavbar from "./SettingsComponent/SettingsNavbar";
import AccountBilling from "./SettingsComponent/AccountBilling";
import LeaveType from "./SettingsComponent/LeaveType";
import DepartmentPanel from "./SettingsComponent/DepartmentPanel";
import BreaksPanel from "./SettingsComponent/BreaksPanel";
import ProductivityMapping from "./ProductivityComponents/ProductivityMappingpage";
import UserManagementPanel from "./SettingsComponent/UserManagementPanel";
import TeamsManagementPanel from "./SettingsComponent/TeamsManagementPanel";
import ShiftManagementPanel from "./SettingsComponent/ShiftManagementpanel"
import {
  FaMoneyBill,
  FaCoffee,
  FaUser,
  FaClock,
  FaCheckCircle,
  FaBuilding,
  FaTasks,
  FaShieldAlt,
  FaUsers,
  FaFilter,
  FaBolt,
  FaKey,
  FaArrowLeft,
} from "react-icons/fa";

const settingsItems = [
  {
    icon: <FaMoneyBill className="text-green-500 w-8 h-8" />,
    title: "Account & Billing",
    desc: "Manage your account, subscriptions, billing details, and view or download invoices.",
    key: "account-billing",
  },
  {
    icon: <FaCheckCircle className="text-purple-500 w-8 h-8" />,
    title: "Leave Type",
    desc: "Define Custom Leave Types Suitable For Your Organisation.",
    key: "leave-type",
  },
  {
    icon: <FaBuilding className="text-yellow-500 w-8 h-8" />,
    title: "Departments",
    desc: "Define Custom Departments Suitable For Your Organisation.",
    key: "departments",
  },
  {
    icon: <FaCoffee className="text-blue-700 w-8 h-8" />,
    title: "Breaks",
    desc: "Define Custom Breaks Suitable For Your Organisation.",
    key: "breaks",
  },
  {
    icon: <FaTasks className="text-blue-500 w-8 h-8" />,
    title: "Task Priority",
    desc: "Define Custom Task Priorities Suitable For Your Organisation.",
    key: "task-priority",
  },
  {
    icon: <FaFilter className="text-pink-500 w-8 h-8" />,
    title: "Domain Filtering",
    desc: "Add domains to block access for users on specific websites.",
    key: "domain-filtering",
  },
  {
    icon: <FaUser className="text-green-500 w-8 h-8" />,
    title: "User Management",
    desc: "Create & manage users' information.",
    key: "user-management",
  },
  {
    icon: <FaBolt className="text-blue-400 w-8 h-8" />,
    title: "Productivity Mapping",
    desc: "Show productivity, unproductivity to application access for users on specific app or url.",
    key: "productivity-mapping",
  },
  {
    icon: <FaUsers className="text-green-500 w-8 h-8" />,
    title: "Team Management",
    desc: "Define Custom Team Suitable For Your Organisation.",
    key: "team-management",
  },
  {
    icon: <FaClock className="text-blue-500 w-8 h-8" />,
    title: "Shift",
    desc: "Define Shift Suitable For Your Organisation.",
    key: "shift",
  },
  {
    icon: <FaKey className="text-yellow-500 w-8 h-8" />,
    title: "API Token",
    desc: "Generate API Token to access data.",
    key: "api-token",
  },
];

const SettingsPanel = ({ isSidebarVisible }) => {  // Add this prop
  const [selectedSetting, setSelectedSetting] = useState(null);

  const handleBack = () => {
    setSelectedSetting(null);
  };

  const getCurrentSettingTitle = () => {
    const setting = settingsItems.find(item => item.key === selectedSetting);
    return setting ? setting.title : "Settings";
  };

  const renderContent = () => {
    switch(selectedSetting) {
      case "account-billing":
        return <AccountBilling />;
      case "leave-type":
        return <LeaveType />;
      case "departments":
        return <DepartmentPanel />;
      case "breaks":
        return <BreaksPanel />;
      case "productivity-mapping":
        return <ProductivityMapping />;
      case "user-management":
        return <UserManagementPanel isSidebarVisible={isSidebarVisible} />;
      case "team-management":
        return <TeamsManagementPanel />;
        case "shift":
        return <ShiftManagementPanel />;
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            <Header title="Settings" />
            {settingsItems.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4 hover:bg-gray-50 transition cursor-pointer"
                onClick={() => item.key && setSelectedSetting(item.key)}
              >
                {item.icon}
                <div>
                  <h3 className="text-gray-800 font-semibold">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-40 bg-white shadow-md">
        <SettingsNavbar />
        {selectedSetting && (
          <div className="flex items-center p-4 border-b">
            <button
              onClick={handleBack}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <FaArrowLeft className="mr-2" />
              <span className="font-medium">{getCurrentSettingTitle()}</span>
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div>
        {renderContent()}
      </div>
    </div>
  );
};

export default SettingsPanel;