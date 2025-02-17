import React, { useState } from 'react';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';

const AddUserForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    department: '',
    username: '',
    password: '',
    confirmPassword: '',
    role: '',
    lineManager: '',
    captureScreenshot: false,
    desktopMode: 'Standard',
    notifyUser: false
  });

  const [errors, setErrors] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = [];
    
    if (!formData.firstName) newErrors.push('First Name is required');
    if (!formData.lastName) newErrors.push('Last Name is required');
    if (!formData.email) newErrors.push('Email is required');
    if (!formData.department) newErrors.push('Department is required');
    if (!formData.role) newErrors.push('Role is required');
    if (!formData.confirmPassword) newErrors.push('Confirm Password is required');
    if (formData.password !== formData.confirmPassword) {
      newErrors.push('Passwords do not match');
    }

    setErrors(newErrors);
    if (newErrors.length === 0) {
      // Handle form submission
      console.log('Form submitted:', formData);
      onClose(); // Close the dialog after successful submission
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white rounded-lg max-w-[800px] w-full mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Add User</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ✕
          </button>
        </div>


          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-medium text-gray-700 mb-4">Basic Information</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full p-2 border rounded-md"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full p-2 border rounded-md"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border rounded-md"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <div className="flex">
                    <select className="border rounded-l-md px-2 bg-white">
                      <option value="+91">🇮🇳 +91</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full p-2 border border-l-0 rounded-r-md"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date of Birth
                  </label>
                  <input
                    type="text"
                    placeholder="Select Date..."
                    className="w-full p-2 border rounded-md"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Department <span className="text-red-500">*</span>
                  </label>
                  <select 
                    className="w-full p-2 border rounded-md bg-white"
                    value={formData.department}
                    onChange={(e) => setFormData({...formData, department: e.target.value})}
                  >
                    <option value="">Select...</option>
                    <option value="MARKETING">MARKETING</option>
                    <option value="SALES">SALES</option>
                    <option value="ENGINEERING">ENGINEERING</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Login Information */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-medium text-gray-700 mb-4">Login Information</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Username <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-2 top-2.5">🔍</span>
                    <input
                      type="text"
                      placeholder="Username"
                      className="w-full p-2 pl-8 border rounded-md"
                      value={formData.username}
                      onChange={(e) => setFormData({...formData, username: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-2 top-2.5">🔍</span>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="w-full p-2 pl-8 border rounded-md"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                    />
                    <button
                      type="button"
                      className="absolute right-2 top-2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-2 top-2.5">🔍</span>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      className="w-full p-2 pl-8 border rounded-md"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    />
                    <button
                      type="button"
                      className="absolute right-2 top-2"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Role <span className="text-red-500">*</span>
                  </label>
                  <select 
                    className="w-full p-2 border rounded-md bg-white"
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                  >
                    <option value="">Select...</option>
                    <option value="ADMIN">Admin</option>
                    <option value="MANAGER">Manager</option>
                    <option value="EMPLOYEE">Employee</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Line Manager
                  </label>
                  <select 
                    className="w-full p-2 border rounded-md bg-white"
                    value={formData.lineManager}
                    onChange={(e) => setFormData({...formData, lineManager: e.target.value})}
                  >
                    <option value="">Select...</option>
                    <option value="John Doe">John Doe</option>
                    <option value="Jane Smith">Jane Smith</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Tracking */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-medium text-gray-700 mb-4">Tracking</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Capture Screenshot</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={formData.captureScreenshot}
                      onChange={(e) => setFormData({...formData, captureScreenshot: e.target.checked})}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <div>
                  <span className="block text-sm font-medium text-gray-700 mb-2">Desktop App Mode</span>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="desktopMode"
                        value="Standard"
                        checked={formData.desktopMode === 'Standard'}
                        onChange={(e) => setFormData({...formData, desktopMode: e.target.value})}
                        className="text-blue-600"
                      />
                      <span className="text-sm text-gray-700">Standard</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="desktopMode"
                        value="Mini"
                        checked={formData.desktopMode === 'Mini'}
                        onChange={(e) => setFormData({...formData, desktopMode: e.target.value})}
                        className="text-blue-600"
                      />
                      <span className="text-sm text-gray-700">Mini</span>
                    </label>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    In standard mode user will be require to punch in to start the tracking activities
                    and have access to manage tasks & see their productivity.
                  </p>
                </div>
              </div>
            </div>

            {/* Notify User */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-medium text-gray-700 mb-4">Notify User</h2>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.notifyUser}
                  onChange={(e) => setFormData({...formData, notifyUser: e.target.checked})}
                  className="rounded text-blue-600"
                />
                <span className="text-sm text-gray-700">Send the new user an email about their account</span>
              </label>
            </div>

            {/* Error Messages */}
            {errors.length > 0 && (
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                {errors.map((error, index) => (
                  <p key={index} className="text-red-600 text-sm">• {error}</p>
                ))}
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUserForm;