import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useCommandStore } from '@/lib/command-store';
import { cn } from '@/lib/utils';
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];
export function Header() {
  const { open } = useCommandStore();
  const location = useLocation();
  return (
    <header className="fixed top-0 left-0 z-50 p-4 sm:p-6 lg:p-8">
      <nav>
        <ul className="space-y-2">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    'font-mono text-lg font-bold uppercase tracking-wider transition-colors',
                    isActive ? 'text-brutal-purple' : 'text-black hover:text-brutal-purple'
                  )
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li>
            <button
              onClick={open}
              className="font-mono text-lg font-bold uppercase tracking-wider text-black hover:text-brutal-purple transition-colors"
            >
              ⌘K
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}