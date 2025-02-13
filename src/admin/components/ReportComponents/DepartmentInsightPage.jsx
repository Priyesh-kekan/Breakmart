import React from "react";
import DepartmentInsightsNavbar from "./Department Insights/DepartmentInsightsNavbar.jsx";
import DepartmentInsightsCard from "./Department Insights/DepartmentInsightsCards.jsx";

const DepartmentInsightPage = () => {
  const departments = ["Youthspire", "Breakmart", "Extras"];
  return (
    <div className=" bg-gray-50 min-h-screen">
      <DepartmentInsightsNavbar />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {departments.map((department) => (
          <DepartmentInsightsCard key={department} name={department} />
        ))}
      </div>
    </div>
  );
};

export default DepartmentInsightPage;