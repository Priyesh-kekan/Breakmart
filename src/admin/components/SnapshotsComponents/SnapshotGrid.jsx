import React from "react";
import { FaCircle } from "react-icons/fa";

const snapshotData = {
  "06:00 pm": [
    "06:45 pm", "06:40 pm", "06:35 pm",
    "06:30 pm", "06:25 pm", "06:20 pm", "06:15 pm",
    "06:10 pm", "06:05 pm", "06:00 pm"
  ],
  "05:00 pm": ["05:55 pm", "05:50 pm", "05:45 pm"]
};

const SnapshotGrid = () => {
  return (
    <div className="p-6 space-y-8">
      {Object.entries(snapshotData).map(([timeSlot, snapshots], index) => (
        <div key={index} className="space-y-4">
          {/* Time Indicator */}
          <div className="flex items-center gap-2">
            <FaCircle className="text-red-500 text-[8px]" />
            <span className="bg-red-500 text-white px-2 py-0.5 text-sm rounded">
              {timeSlot}
            </span>
          </div>

          {/* Snapshots Grid */}
          <div className="grid grid-cols-4 gap-4 pl-6">
            {snapshots.map((time, idx) => (
              <div key={idx} className="relative bg-white border border-gray-200 rounded-md overflow-hidden">
                {/* Time Label */}
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/50 to-transparent p-2">
                  <p className="text-white text-sm">{time}</p>
                </div>

                {/* Screenshot Placeholder */}
                <img 
                  src="/api/placeholder/240/160" 
                  alt="Screenshot"
                  className="w-full h-40 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SnapshotGrid;
