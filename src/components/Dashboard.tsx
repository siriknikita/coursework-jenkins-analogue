import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { useTheme } from '../hooks/useTheme';
import { Project } from '../types/monitoring';
import { MonitoringDashboard } from './monitoring/MonitoringDashboard';

export function Dashboard() {
  const navigate = useNavigate();
  const { darkMode, setDarkMode } = useTheme();
  const userString = localStorage.getItem('currentUser');
  const user = userString ? JSON.parse(userString) : null;
  const [activeTab, setActiveTab] = React.useState('dashboard');
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex">
      <Sidebar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        user={user}
      />

      <div className="flex-1 flex flex-col">
        <TopBar
          user={user}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          selectedProject={selectedProject}
          onSelectProject={setSelectedProject}
          onLogout={() => {
            localStorage.removeItem('currentUser');
            navigate('/login');
          }}
        />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            {selectedProject ? (
              <div>
                {activeTab === 'dashboard' && <MonitoringDashboard selectedProjectId={selectedProject.id} />}
                {activeTab === 'monitoring' && <MonitoringDashboard selectedProjectId={selectedProject.id} />}
                {activeTab === 'cicd' && <div>CI/CD Pipeline Content</div>}
                {activeTab === 'testing' && <div>Automated Testing Content</div>}
              </div>
            ) : (
              <div className="flex items-center justify-center h-[calc(100vh-8rem)]">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Welcome to your dashboard
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Please select a project to get started
                  </p>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}