'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

type Contract = {
  id: string;
  title: string;
  status: 'pending' | 'active' | 'completed';
  date: string;
};

export default function ContractList() {
  const [contracts, setContracts] = useState<Contract[]>([]);

  useEffect(() => {
    // Имитация API запроса
    setContracts([
      { id: '1', title: 'Договор #001', status: 'pending', date: '2025-06-20' },
      { id: '2', title: 'Договор #002', status: 'active', date: '2025-06-15' },
    ]);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Договоры</h1>
      <Link
        href="/cabinet/contracts/new"
        className="inline-block bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 mb-4"
      >
        Создать договор
      </Link>
      <div className="bg-white rounded-lg shadow-md overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-blue-100">
            <tr>
              <th className="px-6 py-3 text-left text-blue-800 font-semibold">Название</th>
              <th className="px-6 py-3 text-left text-blue-800 font-semibold">Статус</th>
              <th className="px-6 py-3 text-left text-blue-800 font-semibold">Дата</th>
            </tr>
          </thead>
          <tbody>
            {contracts.map((contract) => (
              <tr key={contract.id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4">{contract.title}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      contract.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : contract.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {contract.status === 'pending' ? 'Ожидает' : contract.status === 'active' ? 'Активен' : 'Завершен'}
                  </span>
                </td>
                <td className="px-6 py-4">{contract.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}