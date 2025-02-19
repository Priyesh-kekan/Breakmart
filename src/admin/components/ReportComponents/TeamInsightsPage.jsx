import React, { useState, useEffect } from "react";
import TeamInsightsNavbar from "./ManagerTeamInsights/TeamInsightsNavbar.jsx";
import TeamMemberCard from "./ManagerTeamInsights/TeamMemberCard.jsx";

const TeamInsightsPage = () => {
  const [teamMembers, setTeamMembers] = useState([
    { name: "Alice Johnson", activityPercentage: 75 },
    { name: "Bob Smith", activityPercentage: 45 },
    { name: "Charlie Davis", activityPercentage: 90 }
  ]);
  
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const refreshData = (date) => {
    console.log(`Refreshing team data for: ${date}`);
    // Simulate data refresh with random percentages
    const refreshedMembers = teamMembers.map(member => ({
      ...member,
      activityPercentage: Math.floor(Math.random() * 100)
    }));
    setTeamMembers(refreshedMembers);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <TeamInsightsNavbar 
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
        onRefresh={() => refreshData(selectedDate)}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 ml-5">
        {teamMembers.map((member) => (
          <TeamMemberCard 
            key={member.name} 
            name={member.name} 
            activityPercentage={member.activityPercentage} 
          />
        ))}
      </div>
    </div>
  );
};

export default TeamInsightsPage;