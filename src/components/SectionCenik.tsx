export default function SectionCenik() {
  return (
    <section id="cenik" className="max-w-5xl mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">💶 Cenik (za foro)</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Paket 1 */}
        <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-6 flex flex-col">
          <h3 className="text-xl font-semibold mb-2">🥇 Brezplačno</h3>
          <p className="text-gray-300 mb-4">Ni keša, ni problema. Samo švical boš.</p>
          <ul className="text-gray-400 text-sm flex-grow list-disc list-inside space-y-1">
            <li>Dostop do vsega</li>
            <li>Gratis motivacija</li>
            <li>Prinesi svojo brisačo</li>
          </ul>
        </div>

        {/* Paket 2 */}
        <div className="bg-yellow-900/40 border border-yellow-700 rounded-xl p-6 flex flex-col">
          <h3 className="text-xl font-semibold mb-2">💰 Doniraj Proteine</h3>
          <p className="text-gray-300 mb-4">1 merica = 1 termin. Mi nismo izbirčni.</p>
          <ul className="text-gray-400 text-sm flex-grow list-disc list-inside space-y-1">
            <li>Whey ali veganski</li>
            <li>Šteta: 30g = en obisk</li>
            <li>Šejker neobvezen</li>
          </ul>
        </div>

        {/* Paket 3 */}
        <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-6 flex flex-col">
          <h3 className="text-xl font-semibold mb-2">📄 Prenesi DIY PDF</h3>
          <p className="text-gray-300 mb-4">Zgradi svoj kontejner! Sam ne klič nas, če crkneš.</p>
          <ul className="text-gray-400 text-sm flex-grow list-disc list-inside space-y-1">
            <li>Navodila v 5 korakih</li>
            <li>Potrebna varilna oprema</li>
            <li>Odgovornost izključena™</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center">
        <a
          href="#rezervacija"
          className="bg-green-600 hover:bg-green-700 transition text-white font-bold py-3 px-6 rounded-full text-lg"
        >
          📅 Rezerviraj Termin
        </a>
      </div>
    </section>
  );
}
