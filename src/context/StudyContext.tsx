
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Task {
  id: string;
  title: string;
  subject: string;
  priority: 'high' | 'medium' | 'low';
  estimatedTime: number;
  completed: boolean;
}

interface Timer {
  workDuration: number;
  breakDuration: number;
  currentSession: 'work' | 'break';
  isRunning: boolean;
  timeLeft: number;
}

interface StudyContextType {
  tasks: Task[];
  currentTimer: Timer;
  addTask: (task: Omit<Task, 'id'>) => void;
  completeTask: (id: string) => void;
  deleteTask: (id: string) => void;
  startTimer: () => void;
  pauseTimer: () => void;
  skipTimer: () => void;
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
      title: 'Revisar Matemática - Equações',
      subject: 'Matemática',
      priority: 'high',
      estimatedTime: 45,
      completed: false,
    },
    {
      id: '2',
      title: 'Leitura - Capítulo 3',
      subject: 'Literatura',
      priority: 'medium',
      estimatedTime: 30,
      completed: false,
    },
    {
      id: '3',
      title: 'Exercícios de Física',
      subject: 'Física',
      priority: 'high',
      estimatedTime: 60,
      completed: true,
    },
  ]);

  const [currentTimer, setCurrentTimer] = useState<Timer>({
    workDuration: 25,
    breakDuration: 5,
    currentSession: 'work',
    isRunning: false,
    timeLeft: 25 * 60, // 25 minutes in seconds
  });

  const addTask = (task: Omit<Task, 'id'>) => {
    const newTask = {
      ...task,
      id: Date.now().toString(),
    };
    setTasks(prev => [...prev, newTask]);
  };

  const completeTask = (id: string) => {
    setTasks(prev => 
      prev.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
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
      currentSession: prev.currentSession === 'work' ? 'break' : 'work',
      timeLeft: prev.currentSession === 'work' ? prev.breakDuration * 60 : prev.workDuration * 60,
      isRunning: false,
    }));
  };

  const value = {
    tasks,
    currentTimer,
    addTask,
    completeTask,
    deleteTask,
    startTimer,
    pauseTimer,
    skipTimer,
  };

  return (
    <StudyContext.Provider value={value}>
      {children}
    </StudyContext.Provider>
  );
};
