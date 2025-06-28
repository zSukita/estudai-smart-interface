
import { Play, Plus, Timer, BookOpen } from 'lucide-react';
import { useStudy } from '@/context/StudyContext';

const QuickActions = () => {
  const { startTimer, currentTimer } = useStudy();

  const actions = [
    {
      icon: Play,
      label: 'Iniciar Pomodoro',
      description: '25 min de foco',
      color: 'bg-green-500 hover:bg-green-600',
      onClick: startTimer
    },
    {
      icon: Plus,
      label: 'Nova Tarefa',
      description: 'Adicionar ao plano',
      color: 'bg-blue-500 hover:bg-blue-600',
      onClick: () => console.log('Nova tarefa')
    },
    {
      icon: Timer,
      label: 'Sessão Rápida',
      description: '15 min de revisão',
      color: 'bg-purple-500 hover:bg-purple-600',
      onClick: () => console.log('Sessão rápida')
    },
    {
      icon: BookOpen,
      label: 'Resumos',
      description: 'Ver anotações',
      color: 'bg-orange-500 hover:bg-orange-600',
      onClick: () => console.log('Resumos')
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-card p-6 card-hover">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Ações Rápidas</h3>
      
      <div className="space-y-3">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <button
              key={index}
              onClick={action.onClick}
              className={`w-full flex items-center space-x-4 p-4 rounded-lg text-white transition-all duration-200 hover:shadow-soft transform hover:-translate-y-0.5 animate-scale-in ${action.color}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0">
                <Icon className="w-6 h-6" />
              </div>
              <div className="flex-1 text-left">
                <h4 className="font-medium">{action.label}</h4>
                <p className="text-sm opacity-90">{action.description}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Timer Status */}
      {currentTimer.isRunning && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-pulse-soft">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <div>
              <p className="font-medium text-green-900">Timer Ativo</p>
              <p className="text-sm text-green-700">
                {Math.floor(currentTimer.timeLeft / 60)}:{(currentTimer.timeLeft % 60).toString().padStart(2, '0')} restantes
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickActions;
