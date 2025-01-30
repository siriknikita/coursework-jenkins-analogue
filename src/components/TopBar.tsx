import React from 'react';
import { LogOut } from 'lucide-react';
import { ProjectSelector } from './ProjectSelector';
import { ThemeToggle } from './ThemeToggle';
import { Project } from '../types/monitoring';
import { mockProjects } from '../data/mockData';

interface TopBarProps {
  user: any;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  selectedProject: Project | null;
  onSelectProject: (project: Project) => void;
  onLogout: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  user,
  darkMode,
  setDarkMode,
  selectedProject,
  onSelectProject,
  onLogout
}) => {
  return (
    <nav className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {user.businessName}
            </h1>
            <div className="w-64">
              <ProjectSelector
                projects={mockProjects}
                selectedProject={selectedProject}
                onSelectProject={onSelectProject}
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle
              darkMode={darkMode}
              onToggle={() => setDarkMode(!darkMode)}
            />
            <button
              onClick={onLogout}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};