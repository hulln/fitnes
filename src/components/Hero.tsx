'use client';

export default function Hero() {
  return (
    <header className="bg-white text-black dark:bg-gray-950 dark:text-white text-center py-24 px-4 relative overflow-hidden transition-colors duration-300">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 via-pink-300 to-blue-400 text-transparent bg-clip-text animate-pulse">
        KONTEJNERSKA TELOVADNICA
      </h1>

      <p className="mt-6 text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
        Kjer kontejner sreča mišice. Frfr, samo za kolege. 💪
      </p>

      <p className="mt-2 text-gray-600 dark:text-gray-400 text-lg">
        Najbolj ekskluzivna fitnes izkušnja v 20-stopni jekleni škatli.<br />
        Če je dovolj dobro za ladje, je dovolj dobro za bicepse.
      </p>

      <div className="mt-6 flex flex-wrap gap-3 justify-center">
        <span className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-sm font-medium">
          🔑 Vstop na zaupanje
        </span>
        <span className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-sm font-medium">
          🧴 BYO brisača
        </span>
        <span className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-sm font-medium">
          🎶 Bluetooth DJ vs. trener
        </span>
      </div>
    </header>
  );
}
