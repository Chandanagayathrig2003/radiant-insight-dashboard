
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import Sidebar from './Sidebar';
import Header from './Header';
import { useAppSelector } from '../../hooks/useAppSelector';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayoutContent: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { darkMode, sidebarOpen } = useAppSelector((state) => state.ui);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-background text-foreground transition-colors duration-300">
        <Header />
        <div className="flex">
          <Sidebar isOpen={sidebarOpen} />
          <main className={`flex-1 p-6 transition-all duration-300 ${
            sidebarOpen ? 'ml-64' : 'ml-16'
          }`}>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <DashboardLayoutContent>{children}</DashboardLayoutContent>
    </Provider>
  );
};

export default DashboardLayout;
