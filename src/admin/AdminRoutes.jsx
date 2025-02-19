import { AiFillHome, AiOutlineCalendar, AiOutlineHeart, AiOutlineLineChart, AiOutlineCamera, AiOutlineFileText, AiOutlineUnorderedList, AiOutlineSetting, AiOutlineUser, AiOutlineProject, AiOutlineClockCircle, AiOutlineBulb, AiOutlineBook, AiOutlinePlayCircle, AiFillCrown } from 'react-icons/ai';
import Dashboard from "./components/Dashboard.jsx";
import WellnessPanel from "./components/WellnessPanel.jsx";
import ProductivityPanel from "./components/ProductivityPanel.jsx";
import ProjectPanel from "./components/ProjectPanel.jsx";
import ApplicationPanel from "./components/ApplicationPanel.jsx";
import ReportPanel from './components/ReportPanel.jsx';
import LeavesPanel from "./components/LeavesPanel.jsx";
import SnapshotPanel from "./components/SnapshotPanel.jsx";
import TimelinePanel from "./components/TimelinePanel.jsx";
import SettingsPanel from "./components/SettingsPanel.jsx";
import ActivityPanel from './components/ActivityPanel.jsx';
import NotesPanel from './components/NotesPanel.jsx';
import AttendanceDashboard from './components/AttendanceDashboard.jsx';
import LiveStreamPanel from './components/LiveStreamPanel.jsx';
import SuperAdminPanel from './components/SuperAdminPanel';

const AdminRoutes = [
  { path: "/admin/", component: <Dashboard />, label: "Dashboard", icon: <AiFillHome /> },
  { path: "/admin/LiveStreamPanel", component: <LiveStreamPanel />, label: "LiveStream", icon: <AiOutlinePlayCircle /> },
  { path: "/admin/AttendanceDashboard", component: <AttendanceDashboard />, label: "Attendance", icon: <AiOutlineCalendar /> },
  { path: "/admin/WellnessPanel", component: <WellnessPanel />, label: "Wellness", icon: <AiOutlineHeart /> },
  { path: "/admin/TimelinePanel", component: <TimelinePanel />, label: "Timeline", icon: <AiOutlineClockCircle /> },
  { path: "/admin/ProductivityPanel", component: <ProductivityPanel />, label: "Productivity", icon: <AiOutlineLineChart /> },
  { path: "/admin/ActivityPanel", component: <ActivityPanel />, label: "Activity", icon: <AiOutlineBulb /> },
  { path: "/admin/SnapshotPanel", component: <SnapshotPanel />, label: "Snapshot", icon: <AiOutlineCamera /> },
  { path: "/admin/ApplicationPanel", component: <ApplicationPanel />, label: "Application", icon: <AiOutlineUnorderedList /> },
  { path: "/admin/ProjectPanel", component: <ProjectPanel />, label: "Project", icon: <AiOutlineProject /> },
  { path: "/admin/NotesPanel", component: <NotesPanel />, label: "Notes", icon: <AiOutlineBook /> },
  { path: "/admin/ReportPanel", component: <ReportPanel />, label: "Reports", icon: <AiOutlineFileText /> },
  { path: "/admin/LeavesPanel", component: <LeavesPanel />, label: "Leaves", icon: <AiOutlineUser /> },
  { path: "/admin/SettingsPanel", component: <SettingsPanel />, label: "Settings", icon: <AiOutlineSetting /> },
  { path: "/admin/superadmin", component: <SuperAdminPanel />, label: "Super Admin", icon: <AiFillCrown />, role: "superadmin" },
];

export default AdminRoutes;
