
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Task {
  id: string;
  title: string;
  subject: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  estimatedTime: number; // em minutos
  createdAt: Date;
}

interface StudySession {
  id: string;
  duration: number; // em minutos
  subject: string;
  completedAt: Date;
  tasksCompleted: number;
}

interface StudyContextType {
  tasks: Task[];
  sessions: StudySession[];
  currentTimer: {
    isRunning: boolean;
    timeLeft: number;
    currentSession: 'work' | 'break';
    workDuration: number;
    breakDuration: number;
  };
  addTask: (task: Omit<Task, 'id' | 'createdAt'>) => void;
  completeTask: (taskId: string) => void;
  deleteTask: (taskId: string) => void;
  startTimer: () => void;
  pauseTimer: () => void;
  skipTimer: () => void;
  setTimerDurations: (work: number, break_: number) => void;
}

const StudyContext = createContext<StudyContextType | undefined>(undefined);

export const useStudy = () => {
  const context = useContext(StudyContext);
  if (!context) {
    throw new Error('useStudy deve ser usado dentro de StudyProvider');
  }
  return context;
};

export const StudyProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Revisar Matemática - Funções Quadráticas',
      subject: 'Matemática',
      completed: false,
      priority: 'high',
      estimatedTime: 45,
      createdAt: new Date()
    },
    {
      id: '2',
      title: 'Ler capítulo 3 de História do Brasil',
      subject: 'História',
      completed: false,
      priority: 'medium',
      estimatedTime: 30,
      createdAt: new Date()
    },
    {
      id: '3',
      title: 'Resolver exercícios de Física - Mecânica',
      subject: 'Física',
      completed: true,
      priority: 'high',
      estimatedTime: 60,
      createdAt: new Date()
    }
  ]);

  const [sessions, setSessions] = useState<StudySession[]>([
    {
      id: '1',
      duration: 25,
      subject: 'Matemática',
      completedAt: new Date(Date.now() - 3600000), // 1 hora atrás
      tasksCompleted: 1
    },
    {
      id: '2',
      duration: 50,
      subject: 'Física',
      completedAt: new Date(Date.now() - 7200000), // 2 horas atrás
      tasksCompleted: 2
    }
  ]);

  const [currentTimer, setCurrentTimer] = useState({
    isRunning: false,
    timeLeft: 25 * 60, // 25 minutos em segundos
    currentSession: 'work' as 'work' | 'break',
    workDuration: 25,
    breakDuration: 5
  });

  const addTask = (task: Omit<Task, 'id' | 'createdAt'>) => {
    const newTask: Task = {
      ...task,
      id: Date.now().toString(),
      createdAt: new Date()
    };
    setTasks(prev => [newTask, ...prev]);
  };

  const completeTask = (taskId: string) => {
    setTasks(prev => 
      prev.map(task => 
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId: string) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
  };

  const startTimer = () => {
    setCurrentTimer(prev => ({ ...prev, isRunning: true }));
  };

  const pauseTimer = () => {
    setCurrentTimer(prev => ({ ...prev, isRunning: false }));
  };

  const skipTimer = () => {
    setCurrentTimer(prev => ({
      ...prev,
      isRunning: false,
      currentSession: prev.currentSession === 'work' ? 'break' : 'work',
      timeLeft: prev.currentSession === 'work' ? prev.breakDuration * 60 : prev.workDuration * 60
    }));
  };

  const setTimerDurations = (work: number, break_: number) => {
    setCurrentTimer(prev => ({
      ...prev,
      workDuration: work,
      breakDuration: break_,
      timeLeft: prev.currentSession === 'work' ? work * 60 : break_ * 60
    }));
  };

  return (
    <StudyContext.Provider value={{
      tasks,
      sessions,
      currentTimer,
      addTask,
      completeTask,
      deleteTask,
      startTimer,
      pauseTimer,
      skipTimer,
      setTimerDurations
    }}>
      {children}
    </StudyContext.Provider>
  );
};
