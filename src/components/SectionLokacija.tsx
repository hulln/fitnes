export default function SectionLokacija() {
  return (
    <section id="lokacija" className="max-w-3xl mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">📍 Kje nas najdeš</h2>

      <div className="space-y-4 bg-gray-800/40 border border-gray-700 rounded-xl p-6">
        <p><strong>🏠 Lokacija:</strong> Za hišo, na dvorišču (GPS vas bo izdal, sosed ne).</p>
        <p><strong>🚚 ID kontejnerja:</strong> Velika kovinska škatla, ki izgleda sumljivo umirjeno.</p>
        <p><strong>🅿️ Parkiranje:</strong> Kamor lahko vtakneš avto (srečno!).</p>
        <p><strong>🚻 Storitve:</strong> PPBR — <em>Prinesi Prisotno Brisačo Rizično</em>.</p>
      </div>

      <div className="mt-6 bg-red-900/30 border border-red-500 rounded-xl p-4 text-sm text-red-200 font-semibold text-center">
        ⚠️ Če se izgubiš, sledi zvokom stokanja in vonju magnezija. ⚠️
      </div>
    </section>
  );
}
