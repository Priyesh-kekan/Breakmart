import React from "react";
import { FaCamera } from "react-icons/fa";

const Snapshots = () => {
  const defaultSnapshots = [
    {
      id: 1,
      title: "Dashboard Development",
      time: "10:30 AM",
      image: "https://via.placeholder.com/150?text=Dashboard"
    },
    {
      id: 2,
      title: "UI Design",
      time: "11:45 AM",
      image: "https://via.placeholder.com/150?text=UI+Design"
    },
    {
      id: 3,
      title: "Code Review",
      time: "2:15 PM",
      image: "https://via.placeholder.com/150?text=Code+Review"
    },
    {
      id: 4,
      title: "Team Meeting",
      time: "3:30 PM",
      image: "https://via.placeholder.com/150?text=Meeting"
    }
  ];

  return (
    <div className="p-6 rounded-lg shadow-lg bg-white w-full">
      <h3 className="text-xl font-bold mb-6 text-center md:text-left">Latest Snapshots</h3>
      <div className="grid grid-cols-2 gap-4">
        {defaultSnapshots.map((snapshot) => (
          <div key={snapshot.id} className="bg-gray-50 rounded-lg p-3 hover:shadow-md transition-shadow">
            <div className="relative h-32 bg-gray-200 rounded-lg overflow-hidden mb-2">
              <img 
                src={snapshot.image} 
                alt={snapshot.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <FaCamera className="text-gray-600" />
              </div>
            </div>
            <h4 className="text-sm font-medium text-gray-800">{snapshot.title}</h4>
            <p className="text-xs text-gray-500">{snapshot.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Snapshots;