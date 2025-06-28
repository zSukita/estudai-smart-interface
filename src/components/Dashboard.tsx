
import DashboardHeader from './dashboard/DashboardHeader';
import StudyProgress from './dashboard/StudyProgress';
import TodaySchedule from './dashboard/TodaySchedule';
import QuickActions from './dashboard/QuickActions';
import RecentActivity from './dashboard/RecentActivity';
import AIInsights from './dashboard/AIInsights';

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <DashboardHeader />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Coluna Principal */}
        <div className="lg:col-span-2 space-y-6">
          <StudyProgress />
          <TodaySchedule />
          <RecentActivity />
        </div>
        
        {/* Sidebar Direita */}
        <div className="space-y-6">
          <QuickActions />
          <AIInsights />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
