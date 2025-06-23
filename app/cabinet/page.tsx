'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function Cabinet() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold text-red-600">Пожалуйста, войдите в систему</h2>
        <Link href="/login" className="text-blue-500 hover:underline">Войти</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Личный кабинет</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          href="/cabinet/profile"
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-blue-600">Профиль</h2>
          <p className="text-gray-600">Изменить данные профиля</p>
        </Link>
        <Link
          href="/cabinet/contracts"
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-blue-600">Договоры</h2>
          <p className="text-gray-600">Создать и просмотреть договоры</p>
        </Link>
        <Link
          href="/cabinet/documents"
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-blue-600">Документы</h2>
          <p className="text-gray-600">Просмотр документов</p>
        </Link>
        <Link
          href="/cabinet/balance"
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-blue-600">Баланс</h2>
          <p className="text-gray-600">Пополнить баланс и оплатить счета</p>
        </Link>
        {(user.role === 'driver' || user.role === 'admin') && (
          <Link
            href="/cabinet/vehicles"
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-blue-600">Транспорт</h2>
            <p className="text-gray-600">Управление транспортными средствами</p>
          </Link>
        )}
        {user.role === 'driver' && (
          <Link
            href="/cabinet/tickets"
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-blue-600">Талоны</h2>
            <p className="text-gray-600">Создать талоны на утилизацию</p>
          </Link>
        )}
        {(user.role === 'customer' || user.role === 'admin') && (
          <Link
            href="/cabinet/export-requests"
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-blue-600">Заявки на вывоз</h2>
            <p className="text-gray-600">Создать заявку на вывоз отходов</p>
          </Link>
        )}
        <Link
          href="/cabinet/rent-requests"
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-blue-600">Аренда спецтехники</h2>
          <p className="text-gray-600">Заявки на аренду спецтехники</p>
        </Link>
      </div>
    </div>
  );
}