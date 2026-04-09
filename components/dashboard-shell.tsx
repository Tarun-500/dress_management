'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';

const navItems = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/users/U001', label: 'Users' },
  { href: '/dresses/D001', label: 'Dresses' },
];

export function DashboardShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <div className="layout">
      <aside className="sidebar">
        <div>
          <h2>DressFlow</h2>
          <p>Rental command center</p>
        </div>
        <nav>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      <section className="content">
        <header className="topbar">
          <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
          <ThemeToggle />
        </header>
        {children}
      </section>
    </div>
  );
}
