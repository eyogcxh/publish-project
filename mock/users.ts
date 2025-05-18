import { User } from '@/shared/types';

export const users: User[] = [
  {
    id: 1,
    name: 'Иван Петров',
    email: 'ivan@example.com',
    role: 'admin',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    lastActive: '2025-05-15T10:30:00Z'
  },
  {
    id: 2,
    name: 'Елена Сидорова',
    email: 'elena@example.com',
    role: 'manager',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    lastActive: '2025-05-14T16:45:00Z'
  },
  {
    id: 3,
    name: 'Алексей Иванов',
    email: 'alexey@example.com',
    role: 'user',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    lastActive: '2025-05-16T09:15:00Z'
  },
  {
    id: 4,
    name: 'Ольга Смирнова',
    email: 'olga@example.com',
    role: 'user',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    lastActive: '2025-05-13T11:20:00Z'
  },
  {
    id: 5,
    name: 'Дмитрий Козлов',
    email: 'dmitry@example.com',
    role: 'manager',
    avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    lastActive: '2025-05-15T14:00:00Z'
  }
];