// src/layout/MainLayout.tsx
import { Outlet } from 'react-router-dom'; // renders the child routes
import Navbar from '../components/Navbar';  // sidebar component

// Define props type so we can pass handleLogout to Navbar
type MainLayoutProps = {
  handleLogout: () => void;
};

export default function MainLayout({ handleLogout }: MainLayoutProps) {
  return (
    <div className="d-flex">
      {/* Sidebar / Navbar */}
      <Navbar handleLogout={handleLogout} />

      {/* Main content area */}
      <div className="flex-grow-1 p-4">
        {/* The Outlet will render the page component for the current route */}
        <Outlet />
      </div>
    </div>
  );
}
