import React from 'react';

const UserTable = ({ users }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Avatar</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Name</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Username</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Email</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Role</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Last Active Time</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Screenshots</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Department</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Manager</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Application Mode</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-3">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  {user.avatar || '👤'}
                </div>
              </td>
              <td className="px-4 py-3">{user.name}</td>
              <td className="px-4 py-3 text-gray-600">{user.username}</td>
              <td className="px-4 py-3 text-gray-600">{user.email}</td>
              <td className="px-4 py-3">{user.role}</td>
              <td className="px-4 py-3 text-gray-600">{user.lastActive}</td>
              <td className="px-4 py-3">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  user.screenshots === 'enabled' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                }`}>
                  {user.screenshots}
                </span>
              </td>
              <td className="px-4 py-3">{user.department}</td>
              <td className="px-4 py-3">{user.manager || '-'}</td>
              <td className="px-4 py-3">{user.applicationMode}</td>
              <td className="px-4 py-3">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  user.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                }`}>
                  {user.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;