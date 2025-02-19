import React from 'react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const monthlyData = [
  { month: 'Jan', revenue: 3000 },
  { month: 'Feb', revenue: 3500 },
  { month: 'Mar', revenue: 4200 },
  // ...Add more months as needed
];

const weeklyData = [
  { day: 'Mon', sales: 1200 },
  { day: 'Tue', sales: 1400 },
  { day: 'Wed', sales: 1600 },
  { day: 'Thu', sales: 1800 },
  { day: 'Fri', sales: 2200 },
  { day: 'Sat', sales: 2400 },
  { day: 'Sun', sales: 2100 },
];

const salesPerformanceData = [
  { name: 'Service Level', value: 75 },
  { name: 'Quality Score', value: 35 },
  { name: 'Sales Conversion', value: 20 },
  { name: 'Customer Satisfaction', value: 85 },
  { name: 'Revenue Target', value: 65 }
];

const COLORS = ['#0088FE', '#FF8042', '#FFBB28', '#FF0000' , '#00C49F'];

const SalesTracking = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Sales Analytics Dashboard</h2>
        <p className="text-gray-600">Monitor and analyze your sales performance metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 - Customer & Revenue Metrics */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-300">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Customer & Revenue</h3>
          <div className="space-y-4">
            <div>
              <span className="text-blue-300">New Customers YTD</span>
              <p className="text-2xl font-bold">45,000</p>
            </div>
            <div>
              <span className="text-blue-300">Total Sales Revenue YTD</span>
              <p className="text-2xl font-bold">₹3,44,57,000</p>
            </div>
            <div>
              <span className="text-blue-300">Total Profit YTD</span>
              <p className="text-2xl font-bold">₹35,67,23,40,00</p>
            </div>
          </div>
        </div>

        {/* Card 2 - Above Sales Target */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-300">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Sales Target Progress</h3>
          <span className="text-purple-600">Above Sales Target YTD</span>
          <p className="text-2xl font-bold mb-4">₹3,445,700</p>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={[{ value: 75 }, { value: 25 }]}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                <Cell fill="#8884d8" />
                <Cell fill="#eee" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Card 3 - Yearly Revenue Trend */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-300">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Revenue Trends</h3>
          <span>Average Yearly Revenue</span>
          <p className="text-2xl font-bold mb-4">₹3,445,700</p>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#000" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Card 4 - Revenue & Cost Analytics */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-300">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Revenue & Cost Analysis</h3>
          <div className="mb-4">
            <div className="text-blue-500">ARPU: $145</div>
            <div className="text-orange-500">CLV: $366</div>
            <div className="text-purple-500">CAC: $150</div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#0088FE" />
              <Line type="monotone" dataKey="cost" stroke="#FF8042" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Card 5 - Monthly Sales Performance */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-300">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Monthly Performance</h3>
          <span>Monthly Sales Performance</span>
          <p className="text-xl font-bold mb-4">Target: 25%</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#0088FE" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Card 6 - Sales Country Performance */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-300">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Sales Country Performance</h3>
          <span>Performance Metrics</span>
          <p className="text-xl font-bold mb-4">Total Earnings: $4000</p>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={salesPerformanceData}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {salesPerformanceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Optional: Add summary section at bottom */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Download Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalesTracking;
