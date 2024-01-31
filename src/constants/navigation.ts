'use client';

import { NavigationItem } from '@/types';
import { ArrowLeftRight, Kanban, LayoutDashboard, User2 } from 'lucide-react';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
    label: 'Dashboard',
  },
  {
    title: 'Transaction',
    href: '/dashboard/transction',
    icon: ArrowLeftRight,
    label: 'transaction',
  },
  {
    title: 'Profile',
    href: '/dashboard/profile',
    icon: User2,
    label: 'profile',
  },
  {
    title: 'Kanban',
    href: '/dashboard/kanban',
    icon: Kanban,
    label: 'kanban',
  },
];
