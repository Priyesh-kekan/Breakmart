import React, { useState, useEffect, useRef } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import ReactCountryFlag from "react-country-flag";

// Country codes data
const countryCodes = [
  { code: "+91", country: "India", shortName: "IN" },
  { code: "+1", country: "United States", shortName: "US" },
  { code: "+1", country: "Canada", shortName: "CA" },
  { code: "+44", country: "United Kingdom", shortName: "GB" },
  { code: "+61", country: "Australia", shortName: "AU" },
  { code: "+86", country: "China", shortName: "CN" },
  { code: "+49", country: "Germany", shortName: "DE" },
  { code: "+33", country: "France", shortName: "FR" },
  { code: "+81", country: "Japan", shortName: "JP" },
  { code: "+82", country: "South Korea", shortName: "KR" },
];

const AccountBilling = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [screenshotFrequency, setScreenshotFrequency] = useState(12);
  const [userLoginTime, setUserLoginTime] = useState(9);
  const [idleAlert, setIdleAlert] = useState("1 Hour");
  const [idlePunchOut, setIdlePunchOut] = useState(5);
  const [idleThreshold, setIdleThreshold] = useState("120 Seconds");
  const [autoPunchOut, setAutoPunchOut] = useState(9);
  const [isAutoPunchEnabled, setIsAutoPunchEnabled] = useState(true);
  const [wellnessValue, setWellnessValue] = useState(7);
  const [lowerBound, setLowerBound] = useState(6);
  const [upperBound, setUpperBound] = useState(9);

  const dropdownRef = useRef(null);
  const sliderRef = useRef(null);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCountries = countryCodes.filter(
    country =>
      country.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.code.includes(searchQuery)
  );

  const screenshotOptions = [
    { value: 12, label: "12 Screenshots Per Hour", subtitle: "Screenshot will be captured every 5 Minutes" },
    { value: 6, label: "6 Screenshots Per Hour", subtitle: "Screenshot will be captured every 10 Minutes" },
    { value: 4, label: "4 Screenshots Per Hour", subtitle: "Screenshot will be captured every 15 Minutes" },
    { value: 3, label: "3 Screenshots Per Hour", subtitle: "Screenshot will be captured every 20 Minutes" }
  ];

  const getWellnessColor = (value) => {
    if (value <= 4) return "#ef4444";
    if (value <= 7) return "#22c55e";
    return "#f97316";
  };

  const handleSliderChange = (e, type) => {
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.round((x / rect.width) * 10);
    const value = Math.max(0, Math.min(10, percentage));

    if (type === 'lower' && value < upperBound) {
      setLowerBound(value);
    } else if (type === 'upper' && value > lowerBound) {
      setUpperBound(value);
    }
  };

  const renderWellness360 = () => {
    const getBackgroundGradient = () => {
      return `linear-gradient(to right, 
        #E5E7EB 0%, #E5E7EB ${lowerBound * 10}%, 
        #22c55e ${lowerBound * 10}%, #22c55e ${upperBound * 10}%, 
        #f97316 ${upperBound * 10}%, #f97316 100%)`;
    };

    return (
      <div>
        <h3 className="text-lg font-medium mb-4">Wellness360</h3>
        <div className="space-y-6">
          <div className="relative pt-1" ref={sliderRef}>
            {/* Track background */}
            <div 
              className="absolute w-full h-2 rounded-full"
              style={{ background: getBackgroundGradient() }}
            />
            
            {/* Lower bound slider */}
            <div 
              className="absolute w-5 h-5 bg-black rounded-full border-2 border-white cursor-pointer transform -translate-y-1/2 hover:scale-110 transition-transform"
              style={{
                left: `${lowerBound * 10}%`,
                top: '50%',
                marginLeft: '-10px',
                zIndex: 30,
              }}
              onMouseDown={(e) => {
                const handleMouseMove = (moveEvent) => handleSliderChange(moveEvent, 'lower');
                const handleMouseUp = () => {
                  document.removeEventListener('mousemove', handleMouseMove);
                  document.removeEventListener('mouseup', handleMouseUp);
                };
                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleMouseUp);
              }}
            />

            {/* Upper bound slider */}
            <div 
              className="absolute w-5 h-5 bg-black rounded-full border-2 border-white cursor-pointer transform -translate-y-1/2 hover:scale-110 transition-transform"
              style={{
                left: `${upperBound * 10}%`,
                top: '50%',
                marginLeft: '-10px',
                zIndex: 30,
              }}
              onMouseDown={(e) => {
                const handleMouseMove = (moveEvent) => handleSliderChange(moveEvent, 'upper');
                const handleMouseUp = () => {
                  document.removeEventListener('mousemove', handleMouseMove);
                  document.removeEventListener('mouseup', handleMouseUp);
                };
                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleMouseUp);
              }}
            />

            {/* Empty div for height */}
            <div className="w-full h-2" />
          </div>

          {/* Scale markers */}
          <div className="flex justify-between px-2">
            {[...Array(11)].map((_, i) => (
              <span key={i} className="text-sm text-gray-600">{i}</span>
            ))}
          </div>

          {/* Status text */}
          <div className="flex justify-between text-sm font-medium">
            <span className="text-gray-500">Lower wellness levels</span>
            <span className="text-green-600">Healthy</span>
            <span className="text-orange-500">Optimal</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form className="space-y-8">
        {/* Primary Contact */}
        <div>
          <h3 className="text-lg font-medium mb-4">Primary Contact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter first name"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter last name"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter email"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Mobile</label>
              <div className="flex relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center px-3 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100"
                >
                  <ReactCountryFlag
                    countryCode={selectedCountry.shortName}
                    svg
                    className="w-5 h-4 mr-2"
                  />
                  <span className="text-sm text-gray-600">{selectedCountry.code}</span>
                  <FiChevronDown className="ml-2 text-gray-400" />
                </button>
                <input
                  type="text"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="flex-1 p-2 border border-gray-300 rounded-r-md"
                  placeholder="Enter mobile number"
                />
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-72 bg-white border border-gray-300 rounded-md shadow-lg z-50">
                    <div className="p-2 border-b">
                      <div className="relative">
                        <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search country or code"
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="max-h-60 overflow-y-auto">
                      {filteredCountries.map((country, index) => (
                        <div
                          key={index}
                          className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            setSelectedCountry(country);
                            setIsDropdownOpen(false);
                            setSearchQuery("");
                          }}
                        >
                          <ReactCountryFlag
                            countryCode={country.shortName}
                            svg
                            className="w-5 h-4 mr-3"
                          />
                          <span className="flex-1">{country.country}</span>
                          <span className="text-gray-500">{country.code}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Screenshot Frequency */}
        <div>
          <h3 className="text-lg font-medium mb-4">Screenshot Frequency</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {screenshotOptions.map((option) => (
              <div
                key={option.value}
                onClick={() => setScreenshotFrequency(option.value)}
                className={`cursor-pointer p-4 rounded-lg border ${
                  screenshotFrequency === option.value
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                <div className="flex items-center mb-2">
                  <div
                    className={`w-4 h-4 rounded-full border ${
                      screenshotFrequency === option.value
                        ? "border-blue-500 bg-white"
                        : "border-gray-300"
                    }`}
                  >
                    {screenshotFrequency === option.value && (
                      <div className="w-2 h-2 m-0.5 rounded-full bg-blue-500" />
                    )}
                  </div>
                  <span className="ml-2 font-medium">{option.label}</span>
                </div>
                <p className="text-sm text-gray-500">{option.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* User Login Time */}
        <div>
          <h3 className="text-lg font-medium mb-4">
            User login time <span className="text-red-500">*</span>
          </h3>
          <select
            value={userLoginTime}
            onChange={(e) => setUserLoginTime(e.target.value)}
            className="w-full md:w-64 p-2 border border-gray-300 rounded-md"
          >
            {[8, 9, 10].map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        {/* Threshold */}
        <div>
          <h3 className="text-lg font-medium mb-4">Threshold</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center text-sm text-gray-600 mb-1">
                Idle alert threshold (in mins) <span className="text-red-500">*</span>
                <span className="ml-1 text-gray-400">ⓘ</span>
              </label>
              <select
                value={idleAlert}
                onChange={(e) => setIdleAlert(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option>1 Hour</option>
              </select>
            </div>
            <div>
              <label className="flex items-center text-sm text-gray-600 mb-1">
                Idle threshold punch out (in mins) <span className="text-red-500">*</span>
                <span className="ml-1 text-gray-400">ⓘ</span>
              </label>
              <input
                type="number"
                value={idlePunchOut}
                onChange={(e) => setIdlePunchOut(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="md:col-span-2">
              <label className="flex items-center text-sm text-gray-600 mb-1">
                Idle threshold (in seconds) <span className="text-red-500">*</span>
                <span className="ml-1 text-gray-400">ⓘ</span>
              </label>
              <select
                value={idleThreshold}
                onChange={(e) => setIdleThreshold(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option>120 Seconds</option>
              </select>
            </div>
          </div>
        </div>

        {/* Auto Punch Out */}
        <div>
          <h3 className="text-lg font-medium mb-4">Auto Punch Out (In hours)</h3>
          <div className="flex items-center gap-6">
            <input
              type="number"
              value={autoPunchOut}
              onChange={(e) => setAutoPunchOut(e.target.value)}
              className="w-32 p-2 border border-gray-300 rounded-md"
            />
            <label className="flex items-center gap-2">
              <div className="relative inline-block w-10 h-6">
                <input
                  type="checkbox"
                  checked={isAutoPunchEnabled}
                  onChange={() => setIsAutoPunchEnabled(!isAutoPunchEnabled)}
                  className="hidden"
                />
                <div
                  className={`w-10 h-6 rounded-full transition-colors ${
                    isAutoPunchEnabled ? "bg-green-500" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`absolute w-4 h-4 bg-white rounded-full top-1 transition-transform ${
                      isAutoPunchEnabled ? "left-5" : "left-1"
                    }`}
                  />
                </div>
              </div>
              <span>Applicable</span>
            </label>
          </div>
        </div>

        {renderWellness360()}

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountBilling;
