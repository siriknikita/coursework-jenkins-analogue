import React, { useState, useEffect, useRef } from 'react';
import { 
  LayoutDashboard, 
  Activity, 
  GitBranch, 
  TestTube2, 
  ChevronLeft, 
  ChevronRight,
  Settings,
  User,
  HelpCircle
} from 'lucide-react';
import { Tab } from '../types/monitoring';
import { MonitoringDashboard } from './monitoring/MonitoringDashboard';

const tabs: Tab[] = [
  {
    id: 'dashboard',
    name: 'Dashboard',
    icon: LayoutDashboard,
    component: MonitoringDashboard
  },
  {
    id: 'monitoring',
    name: 'Microservices',
    icon: Activity,
    component: MonitoringDashboard
  },
  {
    id: 'cicd',
    name: 'CI/CD Pipeline',
    icon: GitBranch,
    component: () => <div>CI/CD Pipeline Content</div>
  },
  {
    id: 'testing',
    name: 'Automated Testing',
    icon: TestTube2,
    component: () => <div>Automated Testing Content</div>
  }
];

interface SidebarProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  user: any;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange, user }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    };

    const handleScroll = () => {
      setShowUserMenu(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('scroll', handleScroll, true);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('scroll', handleScroll, true);
    };
  }, []);

  return (
    <div className={`sticky top-0 h-screen flex flex-col bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 ${isExpanded ? 'w-64' : 'w-20'}`}>
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
        >
          {isExpanded ? <ChevronLeft className="h-6 w-6" /> : <ChevronRight className="h-6 w-6" />}
        </button>
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300'
                }`}
              >
                <Icon className="h-6 w-6 flex-shrink-0" />
                {isExpanded && <span className="font-medium">{tab.name}</span>}
              </button>
            );
          })}
        </div>
      </div>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700" ref={menuRef}>
        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
          >
            <User className="h-6 w-6 flex-shrink-0" />
            {isExpanded && (
              <div className="flex-1 text-left">
                <p className="font-medium truncate">{user.businessName}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{user.username}</p>
              </div>
            )}
          </button>

          {showUserMenu && isExpanded && (
            <div className="absolute bottom-full left-0 w-full mb-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <button className="w-full flex items-center space-x-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300">
                <HelpCircle className="h-5 w-5" />
                <span>Help</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};