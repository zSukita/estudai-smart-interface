
import { Bell, Search } from 'lucide-react';

const DashboardHeader = () => {
  const currentHour = new Date().getHours();
  const getGreeting = () => {
    if (currentHour < 12) return 'Bom dia';
    if (currentHour < 18) return 'Boa tarde';
    return 'Boa noite';
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="animate-slide-up">
        <h1 className="text-3xl font-bold text-gray-900">
          {getGreeting()}, João! 👋
        </h1>
        <p className="text-gray-600 mt-1">
          Você tem 3 sessões de estudo planejadas para hoje
        </p>
      </div>
      
      <div className="flex items-center space-x-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar..."
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus-ring w-64"
          />
        </div>
        
        {/* Notifications */}
        <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
