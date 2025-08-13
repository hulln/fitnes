export default function SectionKaj() {
  return (
    <section id="kaj" className="max-w-4xl mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        🤔 Kaj sploh je to?
      </h2>

      <p className="text-lg leading-relaxed text-gray-300">
        To je micro-gym, zgrajen iz predelanega transportnega kontejnerja. Hladno železo + topli gains = perfektna nevihta.
        Noter je toplo, zunaj je mraz, v obeh primerih se poti predvsem ti.
      </p>

      <div className="bg-red-900/30 border border-red-500 rounded-xl p-4 mt-6 text-sm text-red-200 font-semibold">
        ⚠️ Opozorilo: lahko povzroči čezmerno samozavest, nekontrolirano mencanje pred ogledalom in idejo, da bi tudi ti kupil kontejner.
      </div>

      <div className="mt-6 flex flex-wrap gap-3 justify-center text-sm text-white">
        <span className="px-4 py-2 rounded-full border border-gray-700 bg-gray-800">
          🏆 Moto: "Če gre v kontejner, gre v rutino"
        </span>
        <span className="px-4 py-2 rounded-full border border-gray-700 bg-gray-800">
          📏 Velikost: ravno prav, dokler dihaš plitvo
        </span>
      </div>
    </section>
  );
}
