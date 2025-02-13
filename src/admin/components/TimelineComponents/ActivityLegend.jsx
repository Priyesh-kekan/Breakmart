import React from "react";

const ActivityLegend = () => {
  return (
    <div className="flex justify-center gap-6 p-3">
      {[
        { label: "0-25%", color: "bg-gray-200" },
        { label: "26-50%", color: "bg-blue-200" },
        { label: "51-75%", color: "bg-green-200" },
        { label: "76-100%", color: "bg-red-200" }
      ].map((item, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <div className={`w-4 h-4 rounded ${item.color}`} />
          <span className="text-sm text-gray-600">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default ActivityLegend;