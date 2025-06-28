
import Dashboard from '@/components/Dashboard';
import Sidebar from '@/components/Sidebar';
import { StudyProvider } from '@/context/StudyContext';

const Index = () => {
  return (
    <StudyProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="flex">
          <Sidebar />
          <main className="flex-1 lg:pl-64">
            <Dashboard />
          </main>
        </div>
      </div>
    </StudyProvider>
  );
};

export default Index;
