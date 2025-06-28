
import { Brain, TrendingUp, AlertCircle, Lightbulb } from 'lucide-react';

const AIInsights = () => {
  const insights = [
    {
      type: 'performance',
      icon: TrendingUp,
      title: 'Performance em Alta',
      message: 'Sua concentração em Matemática aumentou 15% esta semana!',
      color: 'border-green-200 bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      type: 'recommendation',
      icon: Lightbulb,
      title: 'Dica Personalizada',
      message: 'Tente estudar História após o almoço - você tem 23% mais retenção nesse horário.',
      color: 'border-yellow-200 bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      type: 'alert',
      icon: AlertCircle,
      title: 'Atenção Necessária',
      message: 'Você não revisou Química há 3 dias. Que tal uma sessão rápida hoje?',
      color: 'border-red-200 bg-red-50',
      iconColor: 'text-red-600'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-card p-6 card-hover">
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 bg-purple-100 rounded-lg">
          <Brain className="w-5 h-5 text-purple-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">Insights da IA</h3>
      </div>
      
      <div className="space-y-4">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <div 
              key={index}
              className={`p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-sm animate-scale-in ${insight.color}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start space-x-3">
                <Icon className={`w-5 h-5 mt-0.5 ${insight.iconColor}`} />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 mb-1">
                    {insight.title}
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {insight.message}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg">
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <Brain className="w-4 h-4 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-gray-900 mb-1">IA aprendendo</h4>
            <p className="text-sm text-gray-600">
              Analisando seus padrões para sugestões ainda melhores...
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInsights;
