
import { CheckCircle, Clock, BookOpen, TrendingUp } from 'lucide-react';

const RecentActivity = () => {
  const activities = [
    {
      type: 'completed',
      icon: CheckCircle,
      title: 'Exercícios de Física concluídos',
      subject: 'Física',
      time: '2 horas atrás',
      color: 'text-green-600 bg-green-100'
    },
    {
      type: 'study',
      icon: BookOpen,
      title: 'Sessão de Matemática iniciada',
      subject: 'Matemática',
      time: '3 horas atrás',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      type: 'timer',
      icon: Clock,
      title: 'Pomodoro de 25min completado',
      subject: 'História',
      time: '4 horas atrás',
      color: 'text-purple-600 bg-purple-100'
    },
    {
      type: 'achievement',
      icon: TrendingUp,
      title: 'Meta diária alcançada!',
      subject: 'Geral',
      time: '5 horas atrás',
      color: 'text-orange-600 bg-orange-100'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-card p-6 card-hover">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Atividade Recente</h3>
      
      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <div 
              key={index}
              className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${activity.color}`}>
                <Icon className="w-5 h-5" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-gray-900 truncate">
                  {activity.title}
                </h4>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-sm text-gray-600">{activity.subject}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button className="w-full mt-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
        Ver todas as atividades →
      </button>
    </div>
  );
};

export default RecentActivity;
