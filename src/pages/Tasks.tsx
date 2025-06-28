
import { useState } from 'react';
import { Plus, Search, Filter, CheckCircle, Circle, Clock, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Sidebar from '@/components/Sidebar';
import { useStudy } from '@/context/StudyContext';

const Tasks = () => {
  const { tasks, completeTask, deleteTask } = useStudy();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all'); // all, pending, completed

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || 
                         (filterStatus === 'pending' && !task.completed) ||
                         (filterStatus === 'completed' && task.completed);
    return matchesSearch && matchesFilter;
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return <AlertCircle className="w-3 h-3" />;
      case 'medium': return <Clock className="w-3 h-3" />;
      case 'low': return <Circle className="w-3 h-3" />;
      default: return <Circle className="w-3 h-3" />;
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
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Tarefas</h1>
                  <p className="text-gray-600">Organize e acompanhe suas atividades de estudo</p>
                </div>
                <Button className="gradient-primary">
                  <Plus className="w-4 h-4 mr-2" />
                  Nova Tarefa
                </Button>
              </div>
            </div>

            {/* Filters and Search */}
            <div className="mb-6 flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Buscar tarefas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={filterStatus === 'all' ? 'default' : 'outline'}
                  onClick={() => setFilterStatus('all')}
                  size="sm"
                >
                  Todas
                </Button>
                <Button
                  variant={filterStatus === 'pending' ? 'default' : 'outline'}
                  onClick={() => setFilterStatus('pending')}
                  size="sm"
                >
                  Pendentes
                </Button>
                <Button
                  variant={filterStatus === 'completed' ? 'default' : 'outline'}
                  onClick={() => setFilterStatus('completed')}
                  size="sm"
                >
                  Concluídas
                </Button>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Task List */}
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  {filteredTasks.map((task) => (
                    <Card key={task.id} className={`shadow-soft transition-all duration-200 hover:shadow-md ${
                      task.completed ? 'opacity-75' : ''
                    }`}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-4 flex-1">
                            <button
                              onClick={() => completeTask(task.id)}
                              className="mt-1"
                            >
                              {task.completed ? (
                                <CheckCircle className="w-5 h-5 text-green-600" />
                              ) : (
                                <Circle className="w-5 h-5 text-gray-400 hover:text-green-600" />
                              )}
                            </button>
                            
                            <div className="flex-1">
                              <h3 className={`font-medium mb-2 ${
                                task.completed ? 'line-through text-gray-500' : 'text-gray-900'
                              }`}>
                                {task.title}
                              </h3>
                              
                              <div className="flex items-center gap-3 text-sm text-gray-500">
                                <Badge variant="outline" className="text-xs">
                                  {task.subject}
                                </Badge>
                                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${getPriorityColor(task.priority)}`}>
                                  {getPriorityIcon(task.priority)}
                                  {task.priority === 'high' ? 'Alta' : task.priority === 'medium' ? 'Média' : 'Baixa'}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {task.estimatedTime}min
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => deleteTask(task.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            Excluir
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  
                  {filteredTasks.length === 0 && (
                    <Card className="shadow-soft">
                      <CardContent className="p-12 text-center">
                        <div className="text-gray-400 mb-4">
                          <Circle className="w-12 h-12 mx-auto" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                          Nenhuma tarefa encontrada
                        </h3>
                        <p className="text-gray-500">
                          {searchTerm ? 'Tente buscar com outros termos.' : 'Comece criando sua primeira tarefa!'}
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>

              {/* Sidebar Stats */}
              <div className="space-y-6">
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle>Resumo</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total</span>
                      <span className="font-bold text-blue-600">{tasks.length}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Pendentes</span>
                      <span className="font-bold text-orange-600">
                        {tasks.filter(t => !t.completed).length}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Concluídas</span>
                      <span className="font-bold text-green-600">
                        {tasks.filter(t => t.completed).length}
                      </span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle>Por Disciplina</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {Array.from(new Set(tasks.map(t => t.subject))).map(subject => (
                      <div key={subject} className="flex justify-between items-center">
                        <span className="text-gray-600">{subject}</span>
                        <span className="font-medium">
                          {tasks.filter(t => t.subject === subject).length}
                        </span>
                      </div>
                    ))}
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

export default Tasks;
