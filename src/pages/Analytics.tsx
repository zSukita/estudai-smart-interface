
import { BarChart3, TrendingUp, Clock, Target, BookOpen, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import Sidebar from '@/components/Sidebar';

const Analytics = () => {
  const weeklyData = [
    { day: 'Seg', horas: 4, meta: 5 },
    { day: 'Ter', horas: 6, meta: 5 },
    { day: 'Qua', horas: 3, meta: 5 },
    { day: 'Qui', horas: 7, meta: 5 },
    { day: 'Sex', horas: 5, meta: 5 },
    { day: 'Sáb', horas: 8, meta: 5 },
    { day: 'Dom', horas: 2, meta: 5 }
  ];

  const subjectData = [
    { name: 'Matemática', value: 35, color: '#3B82F6' },
    { name: 'Física', value: 25, color: '#10B981' },
    { name: 'História', value: 20, color: '#8B5CF6' },
    { name: 'Português', value: 20, color: '#F59E0B' }
  ];

  const productivityData = [
    { hora: '08:00', produtividade: 85 },
    { hora: '10:00', produtividade: 92 },
    { hora: '14:00', produtividade: 78 },
    { hora: '16:00', produtividade: 88 },
    { hora: '19:00', produtividade: 65 },
    { hora: '21:00', produtividade: 72 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 lg:pl-64">
          <div className="p-6">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Relatórios</h1>
              <p className="text-gray-600">Analise seu desempenho e evolução nos estudos</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Horas Esta Semana</p>
                      <p className="text-2xl font-bold text-gray-900">35h</p>
                      <p className="text-xs text-green-600">+12% da semana passada</p>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Tarefas Concluídas</p>
                      <p className="text-2xl font-bold text-gray-900">28</p>
                      <p className="text-xs text-green-600">+8% da semana passada</p>
                    </div>
                    <div className="bg-green-100 p-3 rounded-full">
                      <Target className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Sessões Pomodoro</p>
                      <p className="text-2xl font-bold text-gray-900">42</p>
                      <p className="text-xs text-blue-600">Meta: 50 sessões</p>
                    </div>
                    <div className="bg-purple-100 p-3 rounded-full">
                      <BookOpen className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Metas Atingidas</p>
                      <p className="text-2xl font-bold text-gray-900">3/4</p>
                      <p className="text-xs text-orange-600">75% de sucesso</p>
                    </div>
                    <div className="bg-orange-100 p-3 rounded-full">
                      <Award className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              {/* Weekly Progress */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-primary" />
                    Progresso Semanal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={weeklyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="horas" fill="#3B82F6" name="Horas Estudadas" />
                      <Bar dataKey="meta" fill="#E5E7EB" name="Meta Diária" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Subject Distribution */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Distribuição por Matéria</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={subjectData}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      >
                        {subjectData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Productivity by Hour */}
              <div className="lg:col-span-2">
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                      Produtividade por Horário
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={productivityData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="hora" />
                        <YAxis />
                        <Tooltip />
                        <Line 
                          type="monotone" 
                          dataKey="produtividade" 
                          stroke="#10B981" 
                          strokeWidth={3}
                          dot={{ fill: '#10B981', strokeWidth: 2, r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Performance Summary */}
              <div className="space-y-6">
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle>Performance Mensal</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Consistência</span>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Qualidade</span>
                        <span className="text-sm font-medium">92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Pontualidade</span>
                        <span className="text-sm font-medium">78%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle>Insights da IA</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm text-blue-800">
                          📊 Sua produtividade é maior entre 10h-12h. 
                          Considere agendar tarefas mais difíceis neste horário.
                        </p>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-sm text-green-800">
                          🎯 Parabéns! Você manteve consistência de 85% este mês. 
                          Continue assim!
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Analytics;
