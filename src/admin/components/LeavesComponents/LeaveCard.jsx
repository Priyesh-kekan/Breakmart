import React from "react";

const LeaveCard = () => {
  return (
    <div className="bg-[#E0ECF5] rounded-lg shadow-md p-4 w-[350px]">
      {/* Header with Name and Edit Button */}
      <div className="flex justify-between items-center border-b pb-2">
        <div>
          <h2 className="text-lg font-bold text-gray-800">Subham Sapakale</h2>
          <p className="text-sm text-gray-600">subham.sapakale@gmail.com</p>
        </div>
        <button className="bg-gray-300 px-3 py-1 rounded text-sm">Edit</button>
      </div>

      {/* Created At */}
      <p className="text-xs text-gray-500 mt-2">Created at 21/10/2024 12:55:79</p>

      {/* Leave Dates */}
      <div className="flex justify-between bg-gray-200 p-3 rounded-md mt-3">
        <div className="text-center">
          <p className="text-sm text-gray-700">Dec</p>
          <p className="text-2xl font-bold text-gray-900">09</p>
          <p className="text-xs text-gray-600">2024</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-700">Dec</p>
          <p className="text-2xl font-bold text-gray-900">09</p>
          <p className="text-xs text-gray-600">2024</p>
        </div>
      </div>

      {/* Leave Type */}
      <div className="bg-[#D8BFD8] text-center py-2 mt-2 font-semibold">Casuals Leave</div>

      {/* Leave Category */}
      <p className="text-sm text-gray-700 mt-2">Personal</p>

      {/* Action Buttons */}
      <div className="flex justify-between mt-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded">Approve</button>
        <button className="bg-red-400 text-white px-4 py-2 rounded">Reject</button>
      </div>
    </div>
  );
};

export default LeaveCard;