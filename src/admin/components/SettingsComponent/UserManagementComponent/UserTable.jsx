import React from 'react';

const UserTable = ({ users }) => {
  if (!users?.length) {
    return (
      <div className="text-gray-500 text-center py-8">
        No users found
      </div>
    );
  }

  return (
    <div className="w-full h-[600px] overflow-hidden">
      <div className="w-full h-full overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300 table-auto">
          <thead className="sticky top-0 bg-gray-50 z-10">
            <tr>
              {[
                { key: 'avatar', label: 'Avatar', className: 'sm:w-[60px]' },
                { key: 'name', label: 'Name', className: 'sm:w-[150px]' },
                { key: 'username', label: 'Username', className: 'hidden md:table-cell md:w-[200px]' },
                { key: 'email', label: 'Email', className: 'hidden lg:table-cell lg:w-[200px]' },
                { key: 'role', label: 'Role', className: 'hidden sm:table-cell sm:w-[120px]' },
                { key: 'lastActive', label: 'Last Active', className: 'hidden xl:table-cell xl:w-[150px]' },
                { key: 'screenshots', label: 'Screenshots', className: 'hidden lg:table-cell lg:w-[120px]' },
                { key: 'department', label: 'Department', className: 'hidden xl:table-cell xl:w-[150px]' },
                { key: 'manager', label: 'Manager', className: 'hidden xl:table-cell xl:w-[150px]' },
                { key: 'applicationMode', label: 'Application Mode', className: 'hidden xl:table-cell xl:w-[150px]' },
                { key: 'status', label: 'Status', className: 'sm:w-[100px]' }
              ].map(({ key, label, className }) => (
                <th
                  key={key}
                  className={`py-3.5 px-3 text-left text-sm font-semibold text-gray-900 ${className}`}
                >
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white overflow-y-auto">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                <td className="whitespace-nowrap py-4 pl-4 pr-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        alt={`${user.name}'s avatar`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span role="img" aria-label="Default avatar">👤</span>
                    )}
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                  {user.name || 'N/A'}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900 hidden md:table-cell">
                  {user.username || 'N/A'}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900 hidden lg:table-cell">
                  {user.email || 'N/A'}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900 hidden sm:table-cell">
                  {user.role || 'N/A'}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900 hidden xl:table-cell">
                  {user.lastActive || 'N/A'}
                </td>
                <td className="whitespace-nowrap px-3 py-4 hidden lg:table-cell">
                  <span 
                    className={`inline-flex px-2 py-1 rounded-full text-xs font-medium
                      ${user.screenshots === 'enabled' 
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                      }`}
                  >
                    {user.screenshots || 'N/A'}
                  </span>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900 hidden xl:table-cell">
                  {user.department || 'N/A'}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900 hidden xl:table-cell">
                  {user.manager || 'N/A'}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900 hidden xl:table-cell">
                  {user.applicationMode || 'N/A'}
                </td>
                <td className="whitespace-nowrap px-3 py-4">
                  <span 
                    className={`inline-flex px-2 py-1 rounded-full text-xs font-medium
                      ${user.status === 'Active'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                      }`}
                  >
                    {user.status || 'N/A'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
