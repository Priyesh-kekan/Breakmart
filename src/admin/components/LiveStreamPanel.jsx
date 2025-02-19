import React, { useState } from "react";
import LiveStreamCards from "./LiveStreamComponents/LiveStreamCards";
import LiveStreamNavbar from "./LiveStreamComponents/LiveStreamNavbar";
import Header from "./Header";

const LiveStreamPanel = () => {
  const [view, setView] = useState("grid");
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    // Increment the refresh key to trigger re-render
    setRefreshKey(prevKey => prevKey + 1);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />
      <LiveStreamNavbar setView={setView} view={view} onRefresh={handleRefresh} />
      <LiveStreamCards view={view} key={refreshKey} />
    </div>
  );
};

export default LiveStreamPanel;