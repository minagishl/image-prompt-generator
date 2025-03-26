interface BackgroundProps {
  children: React.ReactNode;
}

export function Background({ children }: BackgroundProps) {
  return (
    <div className="min-h-screen bg-gradient-to-t from-orange-100 to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
