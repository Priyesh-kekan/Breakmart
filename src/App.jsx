import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import AdminDashboard from "./admin/AdminDashboard";
import UserPanel from "./user/UserPanel";

// Custom 404 Not Found Component
const NotFound = () => {
  const location = useLocation();
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>No match for <code>{location.pathname}</code></p>
    </div>
  );
};

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ textAlign: "center", padding: "50px" }}>
          <h1>Something went wrong!</h1>
          <p>{this.state.error?.toString()}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

// Admin Panel Button Component
const AdminPanelButton = () => {
  const navigate = useNavigate();
  
  return (
    <div style={{ position: "fixed", top: "10px", right: "10px" }}>
      <button 
        onClick={() => navigate("/admin")} 
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Admin Panel
      </button>
    </div>
  );
};

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <AdminPanelButton /> {/* Admin Panel Button is always visible */}
        <Routes>
          {/* Admin Panel Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          {/* User Panel Routes */}
          <Route path="/" element={<UserPanel />} />
          {/* Default Route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
