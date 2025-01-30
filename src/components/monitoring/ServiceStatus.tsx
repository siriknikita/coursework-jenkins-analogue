import React from 'react';
import { Server } from 'lucide-react';
import { Service } from '../../types/monitoring';

interface ServiceStatusProps {
  services: Service[];
}

export const ServiceStatus: React.FC<ServiceStatusProps> = ({ services }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-900 dark:text-gray-100">
        <Server className="h-5 w-5 mr-2 text-indigo-600 dark:text-indigo-400" />
        Services Status
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <div key={index} className="border dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">{service.name}</h4>
            <div className="space-y-2 mt-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">Port: {service.port}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Version: {service.version}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Uptime: {service.uptime}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Status: <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  service.status === 'Running' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                  service.status === 'Error' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300' :
                  'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                }`}>{service.status}</span>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Health: <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  service.health === 'Healthy' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                  service.health === 'Critical' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300' :
                  'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                }`}>{service.health}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};