interface HeaderProps {
  title: string;
  description: string;
}

export function Header({ title, description }: HeaderProps) {
  return (
    <div className="mb-10 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        {title}
      </h1>
      <p className="mt-3 text-lg text-gray-600">{description}</p>
    </div>
  );
}
