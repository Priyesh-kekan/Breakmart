import React, { useState } from "react";
import { FaClock, FaBroadcastTower, FaTimes } from "react-icons/fa";

const LiveStreamCard = ({ name, role, image, title, message, time, view, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative bg-[#D9D9D9] p-4 rounded-2xl shadow-md ${view === "grid" ? "w-64" : "w-full flex items-center justify-between mb-2"} cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Hover Overlay */}
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center rounded-2xl">
          <FaBroadcastTower className="text-white text-3xl" />
          <p className="text-white text-sm mt-2">Live Screenshots</p>
        </div>
      )}

      <div className="flex items-center gap-3">
        <img src={image} alt={name} className="w-10 h-10 rounded-full" />
        <div>
          <h2 className="text-lg font-bold text-[#3B3F70]">{name}</h2>
          <p className="text-sm text-[#3B3F70]">{role}</p>
        </div>
      </div>

      <div className="mt-3">
        <p className="text-[#3B3F70] font-semibold flex items-center gap-2">
          <span className="grid grid-cols-2 w-5 h-5">
            <span className="bg-blue-800 w-2 h-2 rounded-sm"></span>
            <span className="bg-blue-800 w-2 h-2 rounded-sm"></span>
            <span className="bg-blue-800 w-2 h-2 rounded-sm"></span>
            <span className="bg-blue-800 w-2 h-2 rounded-sm"></span>
          </span>
          {title}
        </p>
        <p className="text-[#3B3F70] text-sm">{message}</p>
      </div>

      <p className="text-[#3B3F70] text-xs mt-2 flex items-center gap-1">
        <FaClock className="w-4 h-4" /> {time}
      </p>
    </div>
  );
};

const LiveStreamCards = ({ view }) => {
  const [selectedStream, setSelectedStream] = useState(null);

  const streams = [
    {
      name: "Animesh Panday",
      role: "Sales/HR",
      image: "/images/team/animesh.jpg",
      title: "My Zen",
      message: "Hy Zen",
      time: "A few minutes ago",
    },
    {
      name: "John Doe",
      role: "Marketing",
      image: "/images/team/john.jpg",
      title: "Product Update",
      message: "New features released",
      time: "5 minutes ago",
    },
  ];

  return (
    <div className={`p-4 ${view === "grid" ? "flex flex-wrap gap-4" : "block"}`}>
      {streams.map((stream, index) => (
        <LiveStreamCard
          key={`stream-${stream.name}-${index}`}
          {...stream}
          view={view}
          onClick={() => setSelectedStream(stream)}
        />
      ))}
      
      {selectedStream && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={() => setSelectedStream(null)}
            >
              <FaTimes className="text-xl" />
            </button>
            <h2 className="text-lg font-bold text-[#3B3F70] mb-4">{selectedStream.name}</h2>
            <img 
              src={selectedStream.image || "/images/default-placeholder.png"} 
              alt={selectedStream.name} 
              className="w-[150px] h-[90px] rounded-md mx-auto" 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveStreamCards;
