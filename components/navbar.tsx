'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useState } from 'react';

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          СтройОтходы
        </Link>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <ul className={`md:flex md:space-x-6 ${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:static bg-blue-800 md:bg-transparent w-full md:w-auto left-0 top-16 md:top-0 p-4 md:p-0 transition-all duration-300`}>
          <li>
            <Link href="/" className="block py-2 hover:text-yellow-300 transition-colors">Главная</Link>
          </li>
          <li>
            <Link href="/licenses" className="block py-2 hover:text-yellow-300 transition-colors">Лицензии</Link>
          </li>
          <li>
            <Link href="/price-list" className="block py-2 hover:text-yellow-300 transition-colors">Прайс-лист</Link>
          </li>
          <li>
            <Link href="/contacts" className="block py-2 hover:text-yellow-300 transition-colors">Контакты</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link href="/cabinet" className="block py-2 hover:text-yellow-300 transition-colors">Личный кабинет</Link>
              </li>
              {user.role === 'admin' && (
                <li>
                  <Link href="/admin/users" className="block py-2 hover:text-yellow-300 transition-colors">Пользователи</Link>
                </li>
              )}
              <li>
                <button onClick={logout} className="block py-2 hover:text-yellow-300 transition-colors">Выйти</button>
              </li>
            </>
          ) : (
            <li>
              <Link href="/login" className="block py-2 hover:text-yellow-300 transition-colors">Войти</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}