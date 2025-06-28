
import { useState } from 'react';
import { Target, Plus, TrendingUp, Calendar, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Sidebar from '@/components/Sidebar';

const Goals = () => {
  const [goals] = useState([
    {
      id: 1,
      title: 'Estudar 25 horas por semana',
      description: 'Manter consistência nos estudos',
      progress: 68,
      target: 25,
      current: 17,
      unit: 'horas',
      deadline: '2024-12-31',
      category: 'Tempo',
      status: 'active'
    },
    {
      id: 2,
      title: 'Completar 100 exercícios de Matemática',
      description: 'Praticar resolução de problemas',
      progress: 45,
      target: 100,
      current: 45,
      unit: 'exercícios',
      deadline: '2024-11-30',
      category: 'Prática',
      status: 'active'
    },
    {
      id: 3,
      title: 'Ler 12 livros de História este ano',
      description: 'Ampliar conhecimento histórico',
      progress: 83,
      target: 12,
      current: 10,
      unit: 'livros',
      deadline: '2024-12-31',
      category: 'Leitura',
      status: 'active'
    },
    {
      id: 4,
      title: 'Fazer 50 redações',
      description: 'Melhorar escrita e argumentação',
      progress: 100,
      target: 50,
      current: 50,
      unit: 'redações',
      deadline: '2024-10-31',
      category: 'Escrita',
      status: 'completed'
    }
  ]);

  const activeGoals = goals.filter(g => g.status === 'active');
  const completedGoals = goals.filter(g => g.status === 'completed');

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Tempo': return 'bg-blue-100 text-blue-800';
      case 'Prática': return 'bg-green-100 text-green-800';
      case 'Leitura': return 'bg-purple-100 text-purple-800';
      case 'Escrita': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 lg:pl-64">
          <div className="p-6">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Metas</h1>
                  <p className="text-gray-600">Defina e acompanhe seus objetivos de estudo</p>
                </div>
                <Button className="gradient-primary">
                  <Plus className="w-4 h-4 mr-2" />
                  Nova Meta
                </Button>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Goals List */}
              <div className="lg:col-span-2 space-y-6">
                {/* Active Goals */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Metas Ativas</h2>
                  <div className="space-y-4">
                    {activeGoals.map((goal) => (
                      <Card key={goal.id} className="shadow-soft">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <h3 className="text-lg font-medium text-gray-900 mb-2">
                                {goal.title}
                              </h3>
                              <p className="text-gray-600 text-sm mb-3">
                                {goal.description}
                              </p>
                              <div className="flex items-center gap-3">
                                <Badge className={getCategoryColor(goal.category)}>
                                  {goal.category}
                                </Badge>
                                <span className="text-sm text-gray-500 flex items-center">
                                  <Calendar className="w-3 h-3 mr-1" />
                                  Até {new Date(goal.deadline).toLocaleDateString('pt-BR')}
                                </span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-primary">
                                {goal.progress}%
                              </div>
                              <div className="text-sm text-gray-500">
                                {goal.current}/{goal.target} {goal.unit}
                              </div>
                            </div>
                          </div>
                          
                          <div className="mb-4">
                            <Progress value={goal.progress} className="h-2" />
                          </div>
                          
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">
                              Faltam {goal.target - goal.current} {goal.unit}
                            </span>
                            <Button variant="outline" size="sm">
                              Atualizar Progresso
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Completed Goals */}
                {completedGoals.length > 0 && (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-green-600" />
                      Metas Concluídas
                    </h2>
                    <div className="space-y-4">
                      {completedGoals.map((goal) => (
                        <Card key={goal.id} className="shadow-soft border-green-200">
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <h3 className="text-lg font-medium text-gray-900 mb-2">
                                  {goal.title}
                                </h3>
                                <div className="flex items-center gap-3">
                                  <Badge className="bg-green-100 text-green-800">
                                    Concluída
                                  </Badge>
                                  <span className="text-sm text-gray-500">
                                    {goal.current}/{goal.target} {goal.unit}
                                  </span>
                                </div>
                              </div>
                              <div className="text-green-600">
                                <Award className="w-8 h-8" />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar Stats */}
              <div className="space-y-6">
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                      Resumo Geral
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Metas Ativas</span>
                      <span className="font-bold text-blue-600">{activeGoals.length}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Concluídas</span>
                      <span className="font-bold text-green-600">{completedGoals.length}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Taxa de Sucesso</span>
                      <span className="font-bold text-primary">
                        {Math.round((completedGoals.length / goals.length) * 100)}%
                      </span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle>Progresso Médio</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-primary">
                        {Math.round(activeGoals.reduce((acc, goal) => acc + goal.progress, 0) / activeGoals.length || 0)}%
                      </div>
                      <p className="text-sm text-gray-600">das metas ativas</p>
                    </div>
                    <Progress 
                      value={activeGoals.reduce((acc, goal) => acc + goal.progress, 0) / activeGoals.length || 0} 
                      className="h-2" 
                    />
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle>Dica de Motivação</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-800">
                        🎯 Defina metas específicas e mensuráveis. 
                        Pequenos progressos diários levam a grandes conquistas!
                      </p>
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

export default Goals;
