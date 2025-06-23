import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Фон строительных отходов"
          fill
          className="object-cover opacity-50"
          priority
        />
      </div>
      <div className="relative container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
          Управление строительными отходами
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Эффективное решение для утилизации, вывоза и аренды спецтехники. Присоединяйтесь к нам!
        </p>
        <Link
          href="/cabinet"
          className="inline-block bg-yellow-400 text-blue-800 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors"
        >
          Перейти в личный кабинет
        </Link>
      </div>
    </div>
  );
}