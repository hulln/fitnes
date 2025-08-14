export default function SectionCenik() {
  return (
    <section id="cenik" className="max-w-5xl mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">💶 Cenik</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Paket 1 */}
        <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-6 flex flex-col hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-2">🥇 Osnovni paket</h3>
          <p className="text-gray-300 mb-4">Ni keša, ni problema. Samo švical boš.</p>
          <ul className="text-gray-400 text-sm flex-grow list-disc list-inside space-y-1">
            <li>Dostop do vsega</li>
            <li>Gratis motivacija</li>
            <li>Prinesi svojo brisačo</li>
          </ul>
        </div>

        {/* Paket 2 */}
        <div className="bg-yellow-900/40 border border-yellow-700 rounded-xl p-6 flex flex-col hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-2">💰 Napredni paket <em>Protein majstore</em></h3>
          <p className="text-gray-300 mb-4">1 merica = 1 termin. Mi nismo izbirčni.</p>
          <ul className="text-gray-400 text-sm flex-grow list-disc list-inside space-y-1">
            <li>Whey ali veganski</li>
            <li>Priporočljiva količina: 30g = en obisk</li>
            <li>Šejker neobvezen</li>
          </ul>
        </div>

        {/* Paket 3 */}
        <div className="bg-yellow-950/40 border border-yellow-800 rounded-xl p-6 flex flex-col hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-2">💎 Legendarni paket <em>Domaća braća</em></h3>
          <p className="text-gray-300 mb-4">
            Ekskluzivni paket za prebivalce bližnje bivalne enote.
          </p>
          <ul className="text-gray-400 text-sm flex-grow list-disc list-inside space-y-1">
            <li>Direkt iz postelje do benća</li>
            <li>Možnost 24/7 dostopa</li>
            <li>Idejno in finančno pomagaš pri opremljanju</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center">
        <a
          href="#rezervacija"
          className="bg-green-600 hover:bg-green-700 transition text-white font-bold py-3 px-6 rounded-full text-lg"
        >
          📅 Rezerviraj svoj termin!
        </a>
      </div>
    </section>
  );
}
