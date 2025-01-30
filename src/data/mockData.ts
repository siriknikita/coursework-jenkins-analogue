import { Service, Log, Project, MockedCPUData, MockedServices } from '../types/monitoring';
import _ from 'lodash';

export const mockProjects: Project[] = [
  {
    id: '1',
    name: 'E-commerce Platform',
    path: '/path/to/ecommerce'
  },
  {
    id: '2',
    name: 'Banking System',
    path: '/path/to/banking'
  },
  {
    id: '3',
    name: 'Healthcare Portal',
    path: '/path/to/healthcare'
  },
  {
    id: '4',
    name: 'Education Platform',
    path: '/path/to/education'
  }
];

export const mockCpuData: MockedCPUData = {
  '1': {
    'User Service': Array.from({ length: 24 }, (_, i) => ({
      time: new Date(Date.now() - (23 - i) * 300000).toLocaleTimeString(),
      load: 25 + Math.random() * 60,
      memory: 40 + Math.random() * 45,
      threads: Math.floor(10 + Math.random() * 20)
    })),
    'Payment Service': Array.from({ length: 24 }, (_, i) => ({
      time: new Date(Date.now() - (23 - i) * 300000).toLocaleTimeString(),
      load: 15 + Math.random() * 40,
      memory: 30 + Math.random() * 35,
      threads: Math.floor(5 + Math.random() * 15)
    })),
    'Inventory Service': Array.from({ length: 24 }, (_, i) => ({
      time: new Date(Date.now() - (23 - i) * 300000).toLocaleTimeString(),
      load: 20 + Math.random() * 50,
      memory: 35 + Math.random() * 40,
      threads: Math.floor(8 + Math.random() * 18)
    }))
  },
  '2': {
    'User Service': Array.from({ length: 24 }, (_, i) => ({
      time: new Date(Date.now() - (23 - i) * 300000).toLocaleTimeString(),
      load: 20 + Math.random() * 55,
      memory: 35 + Math.random() * 50,
      threads: Math.floor(12 + Math.random() * 22)
    })),
    'Payment Service': Array.from({ length: 24 }, (_, i) => ({
      time: new Date(Date.now() - (23 - i) * 300000).toLocaleTimeString(),
      load: 15 + Math.random() * 45,
      memory: 30 + Math.random() * 40,
      threads: Math.floor(8 + Math.random() * 18)
    })),
    'Loan Service': Array.from({ length: 24 }, (_, i) => ({
      time: new Date(Date.now() - (23 - i) * 300000).toLocaleTimeString(),
      load: 10 + Math.random() * 35,
      memory: 25 + Math.random() * 30,
      threads: Math.floor(5 + Math.random() * 15)
    })),
    'Authentication Service': Array.from({ length: 24 }, (_, i) => ({
      time: new Date(Date.now() - (23 - i) * 300000).toLocaleTimeString(),
      load: 20 + Math.random() * 55,
      memory: 35 + Math.random() * 45,
      threads: Math.floor(10 + Math.random() * 20)
    }))
  },
  '3': {
    'User Service': Array.from({ length: 24 }, (_, i) => ({
      time: new Date(Date.now() - (23 - i) * 300000).toLocaleTimeString(),
      load: 25 + Math.random() * 60,
      memory: 40 + Math.random() * 45,
      threads: Math.floor(10 + Math.random() * 20)
    })),
    'Notification Service': Array.from({ length: 24 }, (_, i) => ({
      time: new Date(Date.now() - (23 - i) * 300000).toLocaleTimeString(),
      load: 10 + Math.random() * 30,
      memory: 20 + Math.random() * 25,
      threads: Math.floor(3 + Math.random() * 10)
    })),
    'Authentication Service': Array.from({ length: 24 }, (_, i) => ({
      time: new Date(Date.now() - (23 - i) * 300000).toLocaleTimeString(),
      load: 20 + Math.random() * 50,
      memory: 35 + Math.random() * 40,
      threads: Math.floor(8 + Math.random() * 18)
    })),
    'Health Monitoring Service': Array.from({ length: 24 }, (_, i) => ({
      time: new Date(Date.now() - (23 - i) * 300000).toLocaleTimeString(),
      load: 18 + Math.random() * 45,
      memory: 25 + Math.random() * 30,
      threads: Math.floor(6 + Math.random() * 12)
    }))
  },
  '4': {
    'User Service': Array.from({ length: 24 }, (_, i) => ({
      time: new Date(Date.now() - (23 - i) * 300000).toLocaleTimeString(),
      load: 20 + Math.random() * 55,
      memory: 35 + Math.random() * 50,
      threads: Math.floor(12 + Math.random() * 22)
    })),
    'Payment Service': Array.from({ length: 24 }, (_, i) => ({
      time: new Date(Date.now() - (23 - i) * 300000).toLocaleTimeString(),
      load: 15 + Math.random() * 45,
      memory: 30 + Math.random() * 40,
      threads: Math.floor(8 + Math.random() * 18)
    })),
    'Notification Service': Array.from({ length: 24 }, (_, i) => ({
      time: new Date(Date.now() - (23 - i) * 300000).toLocaleTimeString(),
      load: 10 + Math.random() * 35,
      memory: 25 + Math.random() * 30,
      threads: Math.floor(5 + Math.random() * 15)
    })),
    'Course Management Service': Array.from({ length: 24 }, (_, i) => ({
      time: new Date(Date.now() - (23 - i) * 300000).toLocaleTimeString(),
      load: 18 + Math.random() * 50,
      memory: 30 + Math.random() * 35,
      threads: Math.floor(8 + Math.random() * 18)
    }))
  }
};

const servicesDefinitions: Service[] = [
  {
    name: 'User Service',
    port: 3001,
    status: 'Running',
    health: 'Healthy',
    uptime: '5d 12h 30m',
    version: '1.2.0',
    lastDeployment: '2024-02-25 14:30'
  },
  {
    name: "Notification Service",
    port: 3009,
    status: 'Running',
    health: 'Healthy',
    uptime: '1d 10h 45m',
    version: '1.0.2',
    lastDeployment: '2024-02-27 09:00'
  },
  {
    name: 'Payment Service',
    port: 3002,
    status: 'Running',
    health: 'Warning',
    uptime: '3d 8h 15m',
    version: '1.1.5',
    lastDeployment: '2024-02-26 09:45'
  },
  {
    name: 'Inventory Service',
    port: 3003,
    status: 'Stopped',
    health: 'Critical',
    uptime: '0d 0h 0m',
    version: '1.0.0',
    lastDeployment: '2024-02-28 08:00'
  },
  {
    name: 'Loan Service',
    port: 3004,
    status: 'Running',
    health: 'Healthy',
    uptime: '4d 6h 20m',
    version: '1.3.0',
    lastDeployment: '2024-02-24 11:00'
  },
  {
    name: 'Authentication Service',
    port: 3005,
    status: 'Running',
    health: 'Healthy',
    uptime: '7d 3h 45m',
    version: '2.0.1',
    lastDeployment: '2024-02-22 16:20'
  },
  {
    name: 'Education Service',
    port: 3006,
    status: 'Running',
    health: 'Healthy',
    uptime: '2d 6h 10m',
    version: '1.0.0',
    lastDeployment: '2024-02-27 11:00'
  },
  {
    name: 'Health Monitoring Service',
    port: 3007,
    status: 'Running',
    health: 'Healthy',
    uptime: '3d 7h 50m',
    version: '1.1.0',
    lastDeployment: '2024-02-26 12:45'
  },
  {
    name: 'Course Management Service',
    port: 3008,
    status: 'Running',
    health: 'Healthy',
    uptime: '5d 4h 30m',
    version: '1.2.1',
    lastDeployment: '2024-02-25 10:20'
  }
];

const services = _.keyBy(servicesDefinitions, 'name');

export const mockServices: MockedServices = {
  '1': [
    services['User Service'],
    services['Payment Service'],
    services['Inventory Service'],
  ],
  '2': [
    services['User Service'],
    services['Payment Service'],
    services['Loan Service'],
    services['Authentication Service'],
  ],
  '3': [
    services['User Service'],
    services['Notification Service'],
    services['Authentication Service'],
    services['Health Monitoring Service'],
  ],
  '4': [
    services['User Service'],
    services['Payment Service'],
    services['Notification Service'],
    services['Course Management Service'],
  ],
};

export const mockLogs: Log[] = [
  {
    id: '1',
    service: 'User Service',
    severity: 'INFO',
    message: 'User authentication successful',
    timestamp: '2024-02-28 12:00:00',
    details: { userId: '123', method: 'OAuth' }
  },
  {
    id: '2',
    service: 'Payment Service',
    severity: 'ERROR',
    message: 'Payment processing failed: Invalid card number',
    timestamp: '2024-02-28 12:01:00',
    details: { transactionId: 'tx_789', errorCode: 'INVALID_CARD' }
  },
  {
    id: '3',
    service: 'Notification Service',
    severity: 'WARN',
    message: 'Email delivery delayed: Rate limit exceeded',
    timestamp: '2024-02-28 12:02:00',
    details: { emailId: 'em_456', retryCount: 2 }
  },
  {
    id: '4',
    service: 'Authentication Service',
    severity: 'DEBUG',
    message: 'Token refresh completed',
    timestamp: '2024-02-28 12:03:00',
    details: { userId: '124', tokenType: 'refresh' }
  },
  {
    id: '5',
    service: 'Education Service',
    severity: 'INFO',
    message: 'New course added successfully',
    timestamp: '2024-02-28 12:04:00',
    details: { courseId: 'course_101', instructor: 'John Doe' }
  },
  {
    id: '6',
    service: 'User Service',
    severity: 'ERROR',
    message: 'User authentication failed: Invalid credentials',
    timestamp: '2024-02-28 12:05:00',
    details: { userId: '125', method: 'OAuth' }
  },
  {
    id: '7',
    service: 'Payment Service',
    severity: 'INFO',
    message: 'Payment processed successfully',
    timestamp: '2024-02-28 12:06:00',
    details: { transactionId: 'tx_790', amount: 100 }
  },
  {
    id: '8',
    service: 'Notification Service',
    severity: 'INFO',
    message: 'Notification sent successfully',
    timestamp: '2024-02-28 12:07:00',
    details: { notificationId: 'notif_123', recipient: 'user@example.com' }
  },
  {
    id: '9',
    service: 'Authentication Service',
    severity: 'ERROR',
    message: 'Token refresh failed: Expired token',
    timestamp: '2024-02-28 12:08:00',
    details: { userId: '126', tokenType: 'refresh' }
  },
  {
    id: '10',
    service: 'Education Service',
    severity: 'WARN',
    message: 'Course enrollment limit reached',
    timestamp: '2024-02-28 12:09:00',
    details: { courseId: 'course_102', limit: 50 }
  }
];