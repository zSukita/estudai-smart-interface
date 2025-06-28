
import { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Settings, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Sidebar from '@/components/Sidebar';
import { useStudy } from '@/context/StudyContext';

const Pomodoro = () => {
  const { currentTimer, startTimer, pauseTimer, skipTimer } = useStudy();
  const [timeLeft, setTimeLeft] = useState(currentTimer.timeLeft);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (currentTimer.isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [currentTimer.isRunning, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = ((currentTimer.workDuration * 60 - timeLeft) / (currentTimer.workDuration * 60)) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 lg:pl-64">
          <div className="p-6">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Timer Pomodoro</h1>
              <p className="text-gray-600">Mantenha o foco com a técnica Pomodoro</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Timer Principal */}
                <Card className="shadow-soft">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="mb-6">
                        <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                          currentTimer.currentSession === 'work' 
                            ? 'bg-red-100 text-red-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          <Clock className="w-4 h-4 mr-2" />
                          {currentTimer.currentSession === 'work' ? 'Sessão de Estudo' : 'Intervalo'}
                        </span>
                      </div>

                      {/* Timer Display */}
                      <div className="mb-8">
                        <div className="text-6xl font-bold text-gray-900 mb-4">
                          {formatTime(timeLeft)}
                        </div>
                        <Progress value={progress} className="h-2" />
                      </div>

                      {/* Controls */}
                      <div className="flex justify-center space-x-4">
                        <Button
                          onClick={currentTimer.isRunning ? pauseTimer : startTimer}
                          size="lg"
                          className="gradient-primary"
                        >
                          {currentTimer.isRunning ? (
                            <Pause className="w-5 h-5 mr-2" />
                          ) : (
                            <Play className="w-5 h-5 mr-2" />
                          )}
                          {currentTimer.isRunning ? 'Pausar' : 'Iniciar'}
                        </Button>
                        
                        <Button
                          onClick={skipTimer}
                          variant="outline"
                          size="lg"
                        >
                          <RotateCcw className="w-5 h-5 mr-2" />
                          Pular
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Configurações e Stats */}
                <div className="space-y-6">
                  <Card className="shadow-soft">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Settings className="w-5 h-5 mr-2 text-primary" />
                        Configurações
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Tempo de estudo</span>
                        <span className="font-medium">{currentTimer.workDuration} min</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Tempo de pausa</span>
                        <span className="font-medium">{currentTimer.breakDuration} min</span>
                      </div>
                      <Button variant="outline" className="w-full">
                        Personalizar
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="shadow-soft">
                    <CardHeader>
                      <CardTitle>Estatísticas de Hoje</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Pomodoros completos</span>
                        <span className="font-bold text-primary">4</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Tempo focado</span>
                        <span className="font-bold text-green-600">1h 40min</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Pausas tomadas</span>
                        <span className="font-bold text-blue-600">3</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-soft">
                    <CardHeader>
                      <CardTitle>Dicas de Produtividade</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm text-blue-800">
                          💡 Durante os intervalos, levante-se e faça alongamentos. 
                          Isso ajuda a manter a concentração para a próxima sessão!
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Pomodoro;
