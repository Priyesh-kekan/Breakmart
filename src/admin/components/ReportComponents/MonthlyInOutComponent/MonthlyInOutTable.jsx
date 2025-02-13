import React from "react";

const employees = [
  "John Doe",
  "Emma Watson",
  "Michael Scott",
  "Steve Rogers",
  "Natasha Romanoff",
  "Bruce Banner",
  "Clark Kent",
  "Tony Stark",
  "Diana Prince",
  "Barry Allen"
];

const dates = ["01", "02", "03", "04", "05"];

const getRandomTime = () => {
  const hours = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");
  const minutes = String(Math.floor(Math.random() * 60)).padStart(2, "0");
  const amPm = Math.random() > 0.5 ? "AM" : "PM";
  return `${hours}:${minutes} ${amPm}`;
};

const MonthlyInOutTable = () => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md mt-4">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="p-2 border">Employee</th>
            {dates.map((date) => (
              <th key={date} colSpan="2" className="p-2 border text-center">
                {date}
              </th>
            ))}
          </tr>
          <tr className="bg-gray-200 text-gray-700">
            <th className="p-2 border"></th>
            {dates.map(() => (
              <>
                <th className="p-2 border">In</th>
                <th className="p-2 border">Out</th>
              </>
            ))}
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index} className="text-center">
              <td className="p-2 border text-left font-semibold">{employee}</td>
              {dates.map(() => {
                const isAbsent = Math.random() > 0.7; // 30% chance of being absent
                return isAbsent ? (
                  <>
                    <td className="p-2 border text-red-500 font-bold">❌</td>
                    <td className="p-2 border text-red-500 font-bold">❌</td>
                  </>
                ) : (
                  <>
                    <td className="p-2 border text-green-600">{getRandomTime()}</td>
                    <td className="p-2 border text-green-600">{getRandomTime()}</td>
                  </>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MonthlyInOutTable;
