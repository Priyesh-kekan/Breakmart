import React from "react";

function WellnessNavbar() {
  const currentMonth = new Date().toLocaleString("default", { month: "long" });
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex justify-between items-center bg-[#C1C1C1] text-[#3B3F70] p-4">
      {/* Wellness on the Left */}
      <h1 className="text-xl font-bold">Wellness</h1>

      {/* Month and Year on the Right */}
      {/* Date Picker */}
      <input
        type="date"
        className="px-3 py-2 bg-white border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default WellnessNavbar;
