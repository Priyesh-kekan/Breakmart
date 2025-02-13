import React from "react";

const applications = [
  { name: "CHROME", duration: "66:13:08", category: "Analytics" },
  { name: "GOOGLE-CHROME", duration: "66:16:09", category: "Analytics" },
  { name: "SOFFICE", duration: "36:17:08", category: "Education" },
  // Add more applications as needed...
];

const ApplicationCards = ({ searchTerm }) => {
  const filteredApps = applications.filter((app) =>
    app.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid grid-cols-3 gap-4">
      {filteredApps.map((app, index) => (
        <div key={index} className="bg-blue-100 text-[#3B3F70] p-4 rounded-lg shadow-md flex justify-between items-center">
          <div>
            <p className="text-lg font-bold text-[#3B3F70]">{app.name}</p>
            <p className="text-sm text-[#3B3F70]">{app.duration}</p>
          </div>
          <span className="bg-green-500 text-white px-2 py-1 rounded-md">{app.category}</span>
        </div>
      ))}
    </div>
  );
};

export default ApplicationCards;