import React from 'react';
import { FiMoreVertical } from 'react-icons/fi';

const TeamsTable = () => {
  const teams = [
    {
      name: "Development Team",
      owner: "Rajesh Kumar",
      members: ["RK", "VS", "AM", "SK", "+2"],
      workingTime: "156:17:24",
      productiveTime: "94:47:48",
      idleTime: "61:29:36",
      productivity: "60.65%",
      status: "Active"
    },
    {
      name: "Marketing Squad",
      owner: "Priya Sharma",
      members: ["PS", "NK", "RJ", "M", "+3"],
      workingTime: "186:52:23",
      productiveTime: "103:14:13",
      idleTime: "83:38:10",
      productivity: "55.24%",
      status: "Active"
    },
    {
      name: "Customer Support",
      owner: "Aisha Patel",
      members: ["AP", "MK", "SJ", "DK", "+4"],
      workingTime: "167:46:32",
      productiveTime: "78:19:18",
      idleTime: "48:27:14",
      productivity: "61.71%",
      status: "Active"
    },
    {
      name: "Sales Team",
      owner: "Vikram Singh",
      members: ["VS", "RD", "NK", "PK", "+1"],
      workingTime: "166:50:21",
      productiveTime: "107:24:22",
      idleTime: "59:25:59",
      productivity: "64.38%",
      status: "Active"
    },
    {
      name: "Design Studio",
      owner: "Neha Kapoor",
      members: ["NK", "AS", "RR"],
      workingTime: "55:31:46",
      productiveTime: "29:00:16",
      idleTime: "26:31:30",
      productivity: "52.23%",
      status: "Active"
    },
    // ... add more teams as needed
  ];

  const getMemberBadgeColor = (initial) => {
    const colors = {
      RK: 'bg-green-500',
      VS: 'bg-red-500',
      AM: 'bg-yellow-500',
      SK: 'bg-purple-500',
      PS: 'bg-blue-500',
      NK: 'bg-pink-500',
      AR: 'bg-indigo-500',
      '+': 'bg-gray-500'
    };
    return colors[initial] || 'bg-gray-500';
  };

  return (
    <div className="bg-white">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-50 border-y border-gray-200">
            <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Name ↑</th>
            <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Team Owner</th>
            <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Teams</th>
            <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Working Time</th>
            <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Productive Time</th>
            <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Idle Time</th>
            <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Productivity %</th>
            <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Status</th>
            <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {teams.map((team, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-4 text-sm text-gray-900">{team.name}</td>
              <td className="px-4 py-4 text-sm text-gray-500">{team.owner}</td>
              <td className="px-4 py-4">
                <div className="flex space-x-1">
                  {team.members.map((member, i) => (
                    <span
                      key={i}
                      className={`${getMemberBadgeColor(member.startsWith('+') ? '+' : member)} text-white text-xs px-2 py-1 rounded`}
                    >
                      {member}
                    </span>
                  ))}
                </div>
              </td>
              <td className="px-4 py-4 text-sm text-gray-500">{team.workingTime}</td>
              <td className="px-4 py-4 text-sm text-gray-500">{team.productiveTime}</td>
              <td className="px-4 py-4 text-sm text-gray-500">{team.idleTime}</td>
              <td className="px-4 py-4">
                <div className="flex items-center">
                  <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: team.productivity }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500">{team.productivity}</span>
                </div>
              </td>
              <td className="px-4 py-4">
                <span className="px-2 py-1 text-xs rounded-full text-green-600 bg-green-100">
                  {team.status}
                </span>
              </td>
              <td className="px-4 py-4">
                <button className="text-gray-400 hover:text-gray-600">
                  <FiMoreVertical className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamsTable;