
import { useState } from 'react';
import { Calendar as CalendarIcon, Plus, Clock, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Sidebar from '@/components/Sidebar';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const events = [
    {
      id: 1,
      title: 'Matemática - Funções',
      time: '08:00 - 09:30',
      subject: 'Matemática',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      title: 'História - Brasil Colonial',
      time: '10:00 - 11:00',
      subject: 'História',
      color: 'bg-green-500'
    },
    {
      id: 3,
      title: 'Física - Mecânica',
      time: '14:00 - 15:30',
      subject: 'Física',
      color: 'bg-purple-500'
    }
  ];

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
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Cronograma</h1>
                  <p className="text-gray-600">Organize e visualize seu tempo de estudo</p>
                </div>
                <Button className="gradient-primary">
                  <Plus className="w-4 h-4 mr-2" />
                  Novo Evento
                </Button>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Calendar */}
              <div className="lg:col-span-2">
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CalendarIcon className="w-5 h-5 mr-2 text-primary" />
                      Calendário
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-7 gap-2 mb-4">
                      {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day) => (
                        <div key={day} className="text-center font-medium text-gray-500 py-2">
                          {day}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                      {Array.from({ length: 35 }, (_, i) => {
                        const date = i + 1;
                        const isToday = date === 15;
                        const hasEvent = [15, 16, 18, 22].includes(date);
                        
                        return (
                          <button
                            key={i}
                            className={`
                              h-12 rounded-lg transition-all duration-200 text-sm font-medium
                              ${isToday 
                                ? 'bg-primary text-white shadow-lg' 
                                : hasEvent
                                ? 'bg-blue-50 text-blue-600 border border-blue-200'
                                : 'hover:bg-gray-100 text-gray-700'
                              }
                            `}
                          >
                            {date <= 30 ? date : ''}
                          </button>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Events Today */}
              <div>
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-primary" />
                      Hoje - 15/06
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {events.map((event) => (
                      <div key={event.id} className="flex items-start space-x-3">
                        <div className={`w-3 h-3 rounded-full ${event.color} mt-2`}></div>
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">{event.title}</h3>
                          <p className="text-sm text-gray-500">{event.time}</p>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-600 mt-1">
                            <BookOpen className="w-3 h-3 mr-1" />
                            {event.subject}
                          </span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card className="shadow-soft mt-6">
                  <CardHeader>
                    <CardTitle>Estatísticas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Horas hoje</span>
                        <span className="font-bold text-primary">4h 30min</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Esta semana</span>
                        <span className="font-bold text-green-600">18h 45min</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Eventos pendentes</span>
                        <span className="font-bold text-orange-600">3</span>
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

export default Calendar;
