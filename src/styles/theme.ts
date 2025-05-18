
// Общие типы для приложения

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'user';
  avatar: string;
  lastActive: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}

export interface DashboardStatistics {
  totalUsers: number;
  activeUsers: number;
  newUsers: number;
  conversionRate: number;
}

export interface ActivityItem {
  id: number;
  user: string;
  action: string;
  timestamp: string;
}

export interface PerformanceData {
  daily: Array<{
    date: string;
    visitors: number;
    conversions: number;
  }>;
  weeklyGrowth: number;
  monthlyGrowth: number;
}

export interface DashboardData {
  statistics: DashboardStatistics;
  recentActivity: ActivityItem[];
  performanceData: PerformanceData;
}

export interface DashboardState {
  data: DashboardData | null;
  loading: boolean;
  error: string | null;
}

export interface UIState {
  theme: 'light' | 'dark';
  sidebarCollapsed: boolean;
  notifications: Notification[];
}

export interface Notification {
  id: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  timestamp: string;
}