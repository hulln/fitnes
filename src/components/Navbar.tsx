'use client';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-gray-950/80 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Leva stran: logotip */}
        <div className="text-xl font-bold flex gap-2 items-center">
          <span>🏋️‍♂️</span>
          <span>Kontejnerska Telovadnica</span>
        </div>

        {/* Desna stran: navigacija + tema */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-4 text-sm font-medium">
            <a href="#kaj" className="hover:text-pink-400 transition">Kaj je to?</a>
            <a href="#galerija" className="hover:text-pink-400 transition">Galerija</a>
            <a href="#oprema" className="hover:text-pink-400 transition">Oprema</a>
            <a href="#cenik" className="hover:text-pink-400 transition">Cenik</a>
            <a href="/book" className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-1 rounded-full">
              Rezervacije 🚀
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
