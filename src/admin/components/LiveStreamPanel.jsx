import React, { useState } from "react";
import LiveStreamCards from "./LiveStreamComponents/LiveStreamCards";
import LiveStreamNavbar from "./LiveStreamComponents/LiveStreamNavbar";
import Header from "./Header";

const LiveStreamPanel = () => {
  const [view, setView] = useState("grid");

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />
      <LiveStreamNavbar setView={setView} view={view} />
      <LiveStreamCards view={view} />
    </div>
  );
};

export default LiveStreamPanel;
