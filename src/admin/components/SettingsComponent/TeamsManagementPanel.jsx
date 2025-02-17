import react from 'react';
import TeamsManagementNavbar from './TeamManagementComponent/TeamsManagementNavbar';
import TeamsTable from './TeamManagementComponent/TeamsTable';
import Header from '../Header';

const TeamsManagementPanel = () => {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header title="Teams Management" />
        <TeamsManagementNavbar />
        <div className="p-4">
          <div className="bg-white rounded-lg shadow">
            <TeamsTable />
          </div>
        </div>
      </div>
    );
  };
  
  export default TeamsManagementPanel;