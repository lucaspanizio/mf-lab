export function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">🚀</span>
          <h1 className="text-xl font-bold">mf-lab</h1>
        </div>
        <p className="text-sm opacity-90">Navbar (React)</p>
      </div>
    </nav>
  );
}
