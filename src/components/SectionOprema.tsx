export default function SectionOprema() {
  return (
    <section id="oprema" className="max-w-4xl mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">🛠️ Kaj je notri?</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-2">💡 Luči iz Ikee</h3>
          <p className="text-gray-300">Ker gains-i ne rabijo LED ekranov — samo svetlobe.</p>
        </div>
        <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-2">❄️ Prezračevanje na roko</h3>
          <p className="text-gray-300">Ko se ti zdi vroče, samo odpri vrata. Narava te hladi.</p>
        </div>
        <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-2">🎵 Bluetooth zvočnik</h3>
          <p className="text-gray-300">DJ je prvi, ki prispe. Vsak dan je techno dan.</p>
        </div>
        <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-2">🛠️ DIY squat rack</h3>
          <p className="text-gray-300">Zvarjeno z ljubeznijo (in zaščitnimi rokavicami).</p>
        </div>
      </div>
    </section>
  );
}
