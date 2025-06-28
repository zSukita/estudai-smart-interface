
import { useState } from 'react';
import { Settings as SettingsIcon, User, Bell, Palette, Clock, Shield, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import Sidebar from '@/components/Sidebar';

const Settings = () => {
  const [notifications, setNotifications] = useState({
    pomodoroReminders: true,
    taskDeadlines: true,
    dailyGoals: false,
    weeklyReports: true
  });

  const [pomodoroSettings, setPomodoroSettings] = useState({
    workDuration: 25,
    breakDuration: 5,
    longBreakDuration: 15,
    longBreakInterval: 4
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 lg:pl-64">
          <div className="p-6">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Configurações</h1>
              <p className="text-gray-600">Personalize sua experiência no Estudaí</p>
            </div>

            <div className="max-w-4xl space-y-8">
              {/* Profile Settings */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="w-5 h-5 mr-2 text-primary" />
                    Perfil
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-xl">JS</span>
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Nome Completo</Label>
                          <Input id="name" defaultValue="João Silva" />
                        </div>
                        <div>
                          <Label htmlFor="email">E-mail</Label>
                          <Input id="email" type="email" defaultValue="joao@email.com" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="profile">Perfil de Estudante</Label>
                          <Select defaultValue="vestibulando">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="vestibulando">Vestibulando</SelectItem>
                              <SelectItem value="universitario">Universitário</SelectItem>
                              <SelectItem value="concurseiro">Concurseiro</SelectItem>
                              <SelectItem value="outros">Outros</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="goal">Meta Principal</Label>
                          <Input id="goal" defaultValue="Aprovação no vestibular" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Notification Settings */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="w-5 h-5 mr-2 text-primary" />
                    Notificações
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="pomodoro-reminders">Lembretes do Pomodoro</Label>
                        <p className="text-sm text-gray-500">Receba notificações sobre sessões de estudo</p>
                      </div>
                      <Switch
                        id="pomodoro-reminders"
                        checked={notifications.pomodoroReminders}
                        onCheckedChange={(checked) => 
                          setNotifications(prev => ({ ...prev, pomodoroReminders: checked }))
                        }
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="task-deadlines">Prazos de Tarefas</Label>
                        <p className="text-sm text-gray-500">Alertas sobre tarefas próximas do vencimento</p>
                      </div>
                      <Switch
                        id="task-deadlines"
                        checked={notifications.taskDeadlines}
                        onCheckedChange={(checked) => 
                          setNotifications(prev => ({ ...prev, taskDeadlines: checked }))
                        }
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="daily-goals">Metas Diárias</Label>
                        <p className="text-sm text-gray-500">Lembrete diário sobre suas metas</p>
                      </div>
                      <Switch
                        id="daily-goals"
                        checked={notifications.dailyGoals}
                        onCheckedChange={(checked) => 
                          setNotifications(prev => ({ ...prev, dailyGoals: checked }))
                        }
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="weekly-reports">Relatórios Semanais</Label>
                        <p className="text-sm text-gray-500">Resumo semanal do seu progresso</p>
                      </div>
                      <Switch
                        id="weekly-reports"
                        checked={notifications.weeklyReports}
                        onCheckedChange={(checked) => 
                          setNotifications(prev => ({ ...prev, weeklyReports: checked }))
                        }
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pomodoro Settings */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    Configurações do Pomodoro
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="work-duration">Duração do Trabalho (minutos)</Label>
                      <Input
                        id="work-duration"
                        type="number"
                        value={pomodoroSettings.workDuration}
                        onChange={(e) => setPomodoroSettings(prev => ({ 
                          ...prev, 
                          workDuration: parseInt(e.target.value) 
                        }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="break-duration">Duração do Intervalo (minutos)</Label>
                      <Input
                        id="break-duration"
                        type="number"
                        value={pomodoroSettings.breakDuration}
                        onChange={(e) => setPomodoroSettings(prev => ({ 
                          ...prev, 
                          breakDuration: parseInt(e.target.value) 
                        }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="long-break-duration">Intervalo Longo (minutos)</Label>
                      <Input
                        id="long-break-duration"
                        type="number"
                        value={pomodoroSettings.longBreakDuration}
                        onChange={(e) => setPomodoroSettings(prev => ({ 
                          ...prev, 
                          longBreakDuration: parseInt(e.target.value) 
                        }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="long-break-interval">Intervalo para Pausa Longa</Label>
                      <Input
                        id="long-break-interval"
                        type="number"
                        value={pomodoroSettings.longBreakInterval}
                        onChange={(e) => setPomodoroSettings(prev => ({ 
                          ...prev, 
                          longBreakInterval: parseInt(e.target.value) 
                        }))}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Appearance Settings */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Palette className="w-5 h-5 mr-2 text-primary" />
                    Aparência
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="theme">Tema</Label>
                      <Select defaultValue="light">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Claro</SelectItem>
                          <SelectItem value="dark">Escuro</SelectItem>
                          <SelectItem value="system">Sistema</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="language">Idioma</Label>
                      <Select defaultValue="pt-br">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pt-br">Português (Brasil)</SelectItem>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Español</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Privacy & Security */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-primary" />
                    Privacidade e Segurança
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full md:w-auto">
                      Alterar Senha
                    </Button>
                    <Button variant="outline" className="w-full md:w-auto">
                      Exportar Dados
                    </Button>
                    <Button variant="destructive" className="w-full md:w-auto">
                      Excluir Conta
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Help & Support */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HelpCircle className="w-5 h-5 mr-2 text-primary" />
                    Ajuda e Suporte
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button variant="outline" className="justify-start">
                      Central de Ajuda
                    </Button>
                    <Button variant="outline" className="justify-start">
                      Contatar Suporte
                    </Button>
                    <Button variant="outline" className="justify-start">
                      Reportar Bug
                    </Button>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-500">
                      Estudaí v1.0.0 • © 2024 • Feito com ❤️ para estudantes
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Save Button */}
              <div className="flex justify-end">
                <Button className="gradient-primary px-8">
                  Salvar Alterações
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;
