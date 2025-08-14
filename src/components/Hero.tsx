'use client';

export default function Hero() {
  return (
  <header className="relative text-text text-center py-24 px-4 overflow-hidden transition-colors duration-300 bg-gradient-to-br from-background via-primary to-accent animate-gradient-move">
  {/* The title now uses the Montserrat font via Tailwind's font-montserrat class, configured in tailwind.config.js */}
      <h1
        className="text-5xl md:text-6xl font-extrabold tracking-tight font-orbitron bg-gradient-to-r from-accent via-primary to-white text-transparent bg-clip-text animate-pulse drop-shadow-[0_0_20px_#39ff14]"
        style={{ fontFamily: 'Orbitron, sans-serif', color: '#f4f4f5' }}
      >
        KONTEJNERSKA TELOVADNICA
      </h1>

  <p className="mt-6 text-xl text-secondary max-w-2xl mx-auto">
        Kjer kontejner sreča mišice. Frfr, samo za kolege. 💪
      </p>

  <p className="mt-2 text-secondary text-lg">
        Najbolj ekskluzivna fitnes izkušnja v rateški republiki.<br />
        Če je dovolj dobro za ladje, je dovolj dobro za bicepse.
      </p>

  <div className="mt-6 flex flex-wrap gap-3 justify-center">
  <span className="px-4 py-2 rounded-full border border-secondary bg-secondary text-sm font-medium">
          🔑 Vstop na zaupanje
        </span>
  <span className="px-4 py-2 rounded-full border border-secondary bg-secondary text-sm font-medium">
          🧴 BYO brisača
        </span>
  <span className="px-4 py-2 rounded-full border border-secondary bg-secondary text-sm font-medium">
          🎶 Bluetooth DJ
        </span>
      </div>
    </header>
  );
}
