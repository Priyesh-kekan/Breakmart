import React from 'react';
import Header from './Header';
import TimelineNavbar from './TimelineComponents/TimelineNavbar';
import TimelineFilters from './TimelineComponents/TimelineFilters';
import UserActivityGrid from './TimelineComponents/UserActivityGrid';
import ActivityLegend from './TimelineComponents/ActivityLegend';

const TimelinePanel = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Fixed Header */}
      <Header />
      {/* Navbar with right-aligned filters */}
      <div className=" shadow-sm sticky top-0 z-10 bg-[#C1C1C1] p-2">
        <div className="flex justify-between items-center">
          <TimelineNavbar />
          <TimelineFilters />
        </div>
      </div>

      {/* Main scrollable content */}
      <div className="flex-1 overflow-auto">
        <UserActivityGrid />
      </div>

      {/* Fixed legend at bottom */}
      <div className="bg-white border-t">
        <ActivityLegend />
      </div>
    </div>
  );
};

export default TimelinePanel;