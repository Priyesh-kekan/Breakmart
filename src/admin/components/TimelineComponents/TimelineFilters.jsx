import React, { useState } from "react";

const TimelineFilters = () => {
  const [selectedDate, setSelectedDate] = useState("2022-12-19");

  return (
    <div className="flex items-center gap-3 p-2">
      <select className="w-40 px-3 py-1.5 rounded border bg-white text-gray-600 text-sm focus:outline-none focus:border-blue-500">
        <option value="">Select shift...</option>
        <option value="morning">Morning</option>
        <option value="afternoon">Afternoon</option>
        <option value="night">Night</option>
      </select>

      <select className="w-40 px-3 py-1.5 rounded border bg-white text-gray-600 text-sm focus:outline-none focus:border-blue-500">
        <option value="">Select Department...</option>
        <option value="engineering">Engineering</option>
        <option value="design">Design</option>
        <option value="product">Product</option>
      </select>

      <select className="w-40 px-3 py-1.5 rounded border bg-white text-gray-600 text-sm focus:outline-none focus:border-blue-500">
        <option value="">Select User...</option>
        <option value="user1">John Doe</option>
        <option value="user2">Jane Smith</option>
      </select>

      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        className="px-3 py-1.5 rounded border bg-white text-gray-600 text-sm focus:outline-none focus:border-blue-500"
      />

    </div>
  );
};

export default TimelineFilters;