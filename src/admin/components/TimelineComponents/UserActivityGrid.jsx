import React from "react";

const users = [
  { name: "John Doe", activity: [10, 20, 50, 80, 40, 60] },
  { name: "Jane Smith", activity: [20, 30, 70, 90, 50, 80] },
  { name: "Robert Johnson", activity: [30, 40, 60, 80, 70, 100] },
  { name: "Emily Davis", activity: [15, 25, 35, 55, 75, 95] },
  { name: "Michael Brown", activity: [5, 50, 65, 85, 90, 100] },
];

const getColor = (value) => {
  if (value <= 25) return "bg-gray-200 hover:bg-gray-300";
  if (value <= 50) return "bg-blue-200 hover:bg-blue-300";
  if (value <= 75) return "bg-green-200 hover:bg-green-300";
  return "bg-red-200 hover:bg-red-300";
};

const UserActivityGrid = () => {
  return (
    <div className="m-4 bg-white rounded-lg border flex-1">
      <div className="p-4">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="p-2 text-left font-medium">Users</th>
                {[...Array(6)].map((_, idx) => (
                  <th key={idx} className="p-2 text-center font-medium">
                    {`${8 + idx * 2}:00`}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={idx} className="border-b">
                  <td className="p-2 font-medium">{user.name}</td>
                  {user.activity.map((value, i) => (
                    <td key={i} className="p-2">
                      <div
                        className={`w-full h-8 rounded ${getColor(value)} transition-colors duration-200 cursor-pointer`}
                        title={`${value}% activity`}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserActivityGrid;