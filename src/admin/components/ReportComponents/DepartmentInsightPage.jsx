import React, { useState } from "react";
import DepartmentInsightsNavbar from "./Department Insights/DepartmentInsightsNavbar.jsx";
import DepartmentInsightsCard from "./Department Insights/DepartmentInsightsCards.jsx";

const DepartmentInsightPage = () => {
  const [departments, setDepartments] = useState([
    { name: "Youthspire", activityPercentage: 70, present: 30, absent: 10 },
    { name: "Breakmart", activityPercentage: 65, present: 25, absent: 8 },
    { name: "Extras", activityPercentage: 80, present: 40, absent: 5 }
  ]);
  
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const refreshData = (date) => {
    console.log(`Refreshing department data for: ${date}`);
    // Simulate data refresh with random percentages
    const refreshedDepartments = departments.map(dept => ({
      ...dept,
      activityPercentage: Math.floor(Math.random() * 40) + 60, // Random between 60-100%
      present: Math.floor(Math.random() * 20) + 20, // Random between 20-40
      absent: Math.floor(Math.random() * 10) + 5 // Random between 5-15
    }));
    setDepartments(refreshedDepartments);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <DepartmentInsightsNavbar 
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
        onRefresh={() => refreshData(selectedDate)}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pl-6">
        {departments.map((dept) => (
          <DepartmentInsightsCard 
            key={dept.name} 
            name={dept.name} 
            activityPercentage={dept.activityPercentage}
            present={dept.present}
            absent={dept.absent}
          />
        ))}
      </div>
    </div>
  );
};

export default DepartmentInsightPage;