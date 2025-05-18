import { DashboardData } from '@/shared/types';

export const dashboardData: DashboardData = {
  statistics: {
    totalUsers: 5423,
    activeUsers: 3721,
    newUsers: 142,
    conversionRate: 3.8
  },
  recentActivity: [
    {
      id: 1,
      user: 'Иван Петров',
      action: 'Вход в систему',
      timestamp: '2025-05-16T08:30:00Z'
    },
    {
      id: 2,
      user: 'Елена Сидорова',
      action: 'Изменение профиля',
      timestamp: '2025-05-16T07:45:00Z'
    },
    {
      id: 3,
      user: 'Алексей Иванов',
      action: 'Загрузка документа',
      timestamp: '2025-05-15T16:20:00Z'
    },
    {
      id: 4,
      user: 'Дмитрий Козлов',
      action: 'Создание нового проекта',
      timestamp: '2025-05-15T14:15:00Z'
    },
    {
      id: 5,
      user: 'Ольга Смирнова',
      action: 'Комментарий к задаче #1234',
      timestamp: '2025-05-15T10:30:00Z'
    }
  ],
  performanceData: {
    daily: [
      { date: '2025-05-10', visitors: 1245, conversions: 34 },
      { date: '2025-05-11', visitors: 1343, conversions: 42 },
      { date: '2025-05-12', visitors: 1289, conversions: 38 },
      { date: '2025-05-13', visitors: 1456, conversions: 51 },
      { date: '2025-05-14', visitors: 1378, conversions: 46 },
      { date: '2025-05-15', visitors: 1523, conversions: 57 },
      { date: '2025-05-16', visitors: 1245, conversions: 49 }
    ],
    weeklyGrowth: 8.5,
    monthlyGrowth: 23.7
  }
};