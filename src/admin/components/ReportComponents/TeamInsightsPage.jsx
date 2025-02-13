import React from "react";
import TeamInsightsNavbar from "./ManagerTeamInsights/TeamInsightsNavbar.jsx";
import TeamMemberCard from "./ManagerTeamInsights/TeamMemberCard.jsx";

const TeamInsightsPage = () => {
  const teamMembers = ["Alice Johnson", "Bob Smith", "Charlie Davis"];
  return (
    <div className=" bg-gray-50 min-h-screen">
      <TeamInsightsNavbar />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 ml-5">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member} name={member} />
        ))}
      </div>
    </div>
  );
};

export default TeamInsightsPage;
