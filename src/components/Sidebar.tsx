
import { Brain, Calendar, Clock, BarChart3, Settings, BookOpen, Target } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Brain },
    { id: 'calendar', label: 'Cronograma', icon: Calendar },
    { id: 'timer', label: 'Pomodoro', icon: Clock },
    { id: 'tasks', label: 'Tarefas', icon: BookOpen },
    { id: 'goals', label: 'Metas', icon: Target },
    { id: 'analytics', label: 'Relatórios', icon: BarChart3 },
    { id: 'settings', label: 'Configurações', icon: Settings },
  ];

  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen bg-white border-r border-gray-200 shadow-soft animate-fade-in">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Estudaí</h1>
              <p className="text-sm text-gray-500">Estude com IA</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={cn(
                  "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 hover:bg-gray-50",
                  activeItem === item.id
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">JS</span>
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">João Silva</p>
              <p className="text-sm text-gray-500">Vestibulando</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
