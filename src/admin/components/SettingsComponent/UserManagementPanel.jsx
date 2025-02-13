import React, { useState } from 'react';
import UserManagementNavbar from "./UserManagementComponent/UserManagementNavbar"
import UserTable from "./UserManagementComponent/UserTable";

const UserManagementPanel = () => {
    const [users] = useState([
      {
        id: 1,
        name: 'Aditya Nagari',
        username: 'aditya.nagari@we360.ai',
        email: 'aditya.nagari@we360.ai',
        role: 'Admin',
        lastActive: '20/12/2022 12:49:44',
        screenshots: 'disabled',
        department: 'MARKETING',
        manager: 'John Doe',
        applicationMode: 'Desktop',
        status: 'Active'
      },
      {
        id: 2,
        name: 'Animesh Pandey',
        username: 'animesh.pandey@we360.ai',
        email: 'animesh.pandey@we360.ai',
        role: 'Manager',
        lastActive: '20/12/2022 10:2:05',
        screenshots: 'enabled',
        department: 'SALES-BD',
        manager: 'Jane Smith',
        applicationMode: 'Mobile',
        status: 'Active'
      },
      {
        id: 3,
        name: 'Sarah Johnson',
        username: 'sarah.j@we360.ai',
        email: 'sarah.j@we360.ai',
        role: 'Employee',
        lastActive: '21/12/2022 15:30:00',
        screenshots: 'enabled',
        department: 'ENGINEERING',
        manager: 'Mike Wilson',
        applicationMode: 'Desktop',
        status: 'Inactive'
      },
      {
        id: 4,
        name: 'Robert Chen',
        username: 'robert.c@we360.ai',
        email: 'robert.c@we360.ai',
        role: 'Manager',
        lastActive: '21/12/2022 09:15:22',
        screenshots: 'enabled',
        department: 'PRODUCT',
        manager: 'Lisa Anderson',
        applicationMode: 'Desktop',
        status: 'Active'
      },
      {
        id: 5,
        name: 'Emily Davis',
        username: 'emily.d@we360.ai',
        email: 'emily.d@we360.ai',
        role: 'Employee',
        lastActive: '20/12/2022 16:45:30',
        screenshots: 'disabled',
        department: 'HR',
        manager: 'John Doe',
        applicationMode: 'Mobile',
        status: 'Active'
      },
      {
        id: 6,
        name: 'Michael Brown',
        username: 'michael.b@we360.ai',
        email: 'michael.b@we360.ai',
        role: 'Employee',
        lastActive: '21/12/2022 11:20:15',
        screenshots: 'enabled',
        department: 'SALES-BD',
        manager: 'Jane Smith',
        applicationMode: 'Desktop',
        status: 'Inactive'
      },
      {
        id: 7,
        name: 'Alex Turner',
        username: 'alex.t@we360.ai',
        email: 'alex.t@we360.ai',
        role: 'Manager',
        lastActive: '21/12/2022 14:10:00',
        screenshots: 'enabled',
        department: 'ENGINEERING',
        manager: 'Mike Wilson',
        applicationMode: 'Mobile',
        status: 'Active'
      },
      {
        id: 8,
        name: 'Laura Martinez',
        username: 'laura.m@we360.ai',
        email: 'laura.m@we360.ai',
        role: 'Employee',
        lastActive: '20/12/2022 17:55:40',
        screenshots: 'disabled',
        department: 'MARKETING',
        manager: 'John Doe',
        applicationMode: 'Desktop',
        status: 'Active'
      }
    ]);

    const handleAddUser = () => {
        // Implement add user functionality
        console.log('Add user clicked');
    };
    
    return (
        <div className="min-h-screen bg-gray-100">
            <UserManagementNavbar totalUsers={users.length} onAddUser={handleAddUser} />
            {/* Added horizontal bar with summary stats */}
            <div className="bg-white border-b shadow-sm">
                <div className="max-w-full mx-auto px-4 py-3">
                    <div className="flex items-center justify-between space-x-8">
                        <div className="flex items-center space-x-4">
                            <div className="text-sm">
                                <div className="text-gray-500">Total Users</div>
                                <div className="font-semibold">{users.length}</div>
                            </div>
                            <div className="text-sm">
                                <div className="text-gray-500">Active Users</div>
                                <div className="font-semibold">
                                    {users.filter(user => user.status === 'Active').length}
                                </div>
                            </div>
                            <div className="text-sm">
                                <div className="text-gray-500">Departments</div>
                                <div className="font-semibold">
                                    {new Set(users.map(user => user.department)).size}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="text-sm">
                                <div className="text-gray-500">Last Updated</div>
                                <div className="font-semibold">
                                    {new Date().toLocaleDateString()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <UserTable users={users} />
            </div>
        </div>
    );
};

export default UserManagementPanel;