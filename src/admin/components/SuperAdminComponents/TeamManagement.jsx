import React from 'react';
import AttendanceChart from '../DashboardComponents/AttendanceChart';
import ActivityTrendChart from '../DashboardComponents/ActivityTrendChart';
import HealthTrends from '../wellnesscomponents/HealthTrends';
import HealthOverview from '../wellnesscomponents/HealthOverview';
import ApplicationStatistics from '../ApplicationComponents/ApplicationStatistics';

const TeamManagement = () => {
  return (
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-6">Team Management Dashboard</h2>
        
        {/* Top Row - Larger Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <AttendanceChart />
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <ActivityTrendChart />
          </div>
        </div>

        {/* Middle Row - Health Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <HealthTrends />
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <HealthOverview />
          </div>
        </div>

        {/* Bottom Row - Statistics */}
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-3">Application Statistics</h3>
            <ApplicationStatistics />
          </div>
        </div>
      </div>
  );
};

export default TeamManagement;
