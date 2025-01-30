import { CPUChart } from './CPUChart';
import { ServiceStatus } from './ServiceStatus';
import { LogViewer } from './LogViewer';
import { useMonitoringData } from '../../hooks/useMonitoringData';
import { Project } from '../../types/monitoring';

interface MonitoringDashboardProps {
  selectedProjectId: Project['id'];
}

export const MonitoringDashboard = ({ selectedProjectId }: MonitoringDashboardProps) => {
  const {
    cpuData,
    services,
    logs,
    selectedLogService,
    setSelectedLogService,
    selectedMetricService,
    setSelectedMetricService,
    selectedSeverity,
    setSelectedSeverity,
  } = useMonitoringData();

  return (
    <div className="space-y-6">
      <CPUChart
        data={selectedMetricService ? cpuData[selectedProjectId][selectedMetricService] : null}
        selectedService={selectedMetricService}
        services={services[selectedProjectId]}
        onServiceSelect={setSelectedMetricService}
      />
      <ServiceStatus
        services={services[selectedProjectId]}
      />
      <LogViewer
        logs={logs}
        selectedService={selectedLogService}
        selectedSeverity={selectedSeverity}
        onServiceChange={setSelectedLogService}
        onSeverityChange={setSelectedSeverity}
        services={services[selectedProjectId]}
      />
    </div>
  );
};