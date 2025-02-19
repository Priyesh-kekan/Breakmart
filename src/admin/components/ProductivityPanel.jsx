import React from "react";
import Header from "./Header";
import ProductivityNavbar from "./ProductivityComponents/ProductivityNavbar";
import ProductivityStats from "./ProductivityComponents/ProductivityStats";
import ProductivityTable from "./ProductivityComponents/ProductivityTable";

const ProductivityPanel = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Fixed Header */}
      <Header />
      {/* Fixed Navbar Positioned Below Header */}
      <div className="sticky top-0 z-10">
        <ProductivityNavbar />
      </div>

      {/* Scrollable Content Without Internal Scrollbar */}
      <div className="mt-0 flex flex-col space-y-4 p-4">
        {/* New Productivity Statistics Section */}
        <ProductivityStats />

        {/* Productivity Table Section */}
        <ProductivityTable />
      </div>
    </div>
  );
};

export default ProductivityPanel;