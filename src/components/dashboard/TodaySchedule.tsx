
import { Clock, BookOpen, Brain } from 'lucide-react';
import { useStudy } from '@/context/StudyContext';

const TodaySchedule = () => {
  const { tasks } = useStudy();
  
  const todayTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  const schedule = [
    {
      time: '09:00',
      subject: 'Matemática',
      task: 'Funções Quadráticas',
      duration: '45 min',
      type: 'study',
      completed: false
    },
    {
      time: '10:00',
      subject: 'Pausa',
      task: 'Descanso recomendado pela IA',
      duration: '15 min',
      type: 'break',
      completed: false
    },
    {
      time: '10:15',
      subject: 'História',
      task: 'Capítulo 3 - Brasil Colonial',
      duration: '30 min',
      type: 'study',
      completed: false
    },
    {
      time: '11:00',
      subject: 'Física',
      task: 'Exercícios de Mecânica',
      duration: '60 min',
      type: 'study',
      completed: true
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-card p-6 card-hover">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Cronograma de Hoje</h2>
        <div className="flex items-center space-x-2 text-sm">
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">
            {completedTasks.length} concluídas
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
            {todayTasks.length} pendentes
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {schedule.map((item, index) => (
          <div 
            key={index}
            className={`flex items-center space-x-4 p-4 rounded-lg border transition-all duration-200 animate-slide-up ${
              item.completed 
                ? 'bg-green-50 border-green-200' 
                : item.type === 'break'
                ? 'bg-orange-50 border-orange-200'
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex-shrink-0">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                item.completed
                  ? 'bg-green-100'
                  : item.type === 'break'
                  ? 'bg-orange-100'
                  : 'bg-blue-100'
              }`}>
                {item.type === 'break' ? (
                  <Brain className={`w-6 h-6 ${item.completed ? 'text-green-600' : 'text-orange-600'}`} />
                ) : (
                  <BookOpen className={`w-6 h-6 ${item.completed ? 'text-green-600' : 'text-blue-600'}`} />
                )}
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-semibold text-gray-900">{item.subject}</span>
                {item.completed && (
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                    Concluído
                  </span>
                )}
              </div>
              <p className="text-gray-600 text-sm">{item.task}</p>
            </div>
            
            <div className="flex-shrink-0 text-right">
              <div className="flex items-center space-x-2 text-gray-500">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{item.time}</span>
              </div>
              <span className="text-xs text-gray-400">{item.duration}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <div className="flex items-start space-x-3">
          <Brain className="w-5 h-5 text-blue-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-blue-900 mb-1">Sugestão da IA</h4>
            <p className="text-sm text-blue-700">
              Baseado no seu histórico, você tem melhor performance em Matemática pela manhã. 
              Considere fazer uma pausa de 10 minutos após cada sessão de 45 minutos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodaySchedule;
