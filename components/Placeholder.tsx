export default function Placeholder({ title }: { title: string }) {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">{title}</h1>
      <p className="text-lg text-gray-600">Страница находится в разработке</p>
      <div className="mt-8">
        <img
          src="/hero-bg.jpg"
          alt="Placeholder"
          className="mx-auto rounded-lg shadow-md max-w-md"
        />
      </div>
    </div>
  );
}