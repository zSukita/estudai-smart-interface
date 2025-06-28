
import { TrendingUp, Clock, Target, CheckCircle } from 'lucide-react';

const StudyProgress = () => {
  const weeklyProgress = [
    { day: 'Seg', hours: 3.5, target: 4 },
    { day: 'Ter', hours: 4.2, target: 4 },
    { day: 'Qua', hours: 2.8, target: 4 },
    { day: 'Qui', hours: 4.5, target: 4 },
    { day: 'Sex', hours: 3.1, target: 4 },
    { day: 'Sáb', hours: 2.5, target: 3 },
    { day: 'Dom', hours: 1.8, target: 2 },
  ];

  const totalHours = weeklyProgress.reduce((acc, day) => acc + day.hours, 0);
  const targetHours = weeklyProgress.reduce((acc, day) => acc + day.target, 0);
  const progressPercentage = (totalHours / targetHours) * 100;

  return (
    <div className="bg-white rounded-xl shadow-card p-6 card-hover">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Progresso Semanal</h2>
        <div className="flex items-center space-x-2 text-green-600">
          <TrendingUp className="w-5 h-5" />
          <span className="font-medium">+12% vs semana passada</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Horas Estudadas</p>
              <p className="text-2xl font-bold text-blue-600">{totalHours.toFixed(1)}h</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Target className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Meta Semanal</p>
              <p className="text-2xl font-bold text-green-600">{targetHours}h</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <CheckCircle className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Progresso</p>
              <p className="text-2xl font-bold text-purple-600">{progressPercentage.toFixed(0)}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Chart */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">Progresso Diário</span>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-gray-600">Estudado</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
              <span className="text-gray-600">Meta</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {weeklyProgress.map((day, index) => (
            <div key={day.day} className="text-center">
              <div className="mb-2">
                <div 
                  className="w-full bg-gray-200 rounded-full h-24 relative overflow-hidden"
                  style={{ maxHeight: '96px' }}
                >
                  <div
                    className="bg-primary rounded-full transition-all duration-500 animate-scale-in"
                    style={{
                      height: `${(day.hours / Math.max(...weeklyProgress.map(d => d.target))) * 100}%`,
                      width: '100%',
                      position: 'absolute',
                      bottom: 0,
                      animationDelay: `${index * 100}ms`
                    }}
                  ></div>
                  <div className="absolute top-2 left-1 right-1 text-xs font-medium text-gray-700">
                    {day.hours}h
                  </div>
                </div>
              </div>
              <span className="text-sm font-medium text-gray-600">{day.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyProgress;
