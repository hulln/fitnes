'use client';

export default function SectionGalerija() {
  const showPhotoMessage = (type: string) => {
    const tips: Record<string, string> = {
      zunanja: '📸 Tu bo slika zunanjega izgleda kontejnerja!\n\n💡 Tip: ujemi širši kader in malo sonca — shine = gains.',
      notranja: '📸 Tu bo slika notranje opreme!\n\n💡 Tip: razporedi uteži po barvah, deluje 20% bolj profi.',
      vadba: '📸 Tu bo akcijska fotka!\n\n💡 Tip: nekdo naj pridrži telefon, ti pa drži dih in core.',
      oprema: '📸 Tu bo close-up opreme!\n\n💡 Tip: pokaži DIY detajle, to dela šarm.'
    };
    alert(tips[type]);
  };

  return (
    <section id="galerija" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">📸 Foto-galerija (placeholderji)</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: '🏠', label: 'Zunanjost', type: 'zunanja' },
          { icon: '🏋️‍♂️', label: 'Notranjost', type: 'notranja' },
          { icon: '💪', label: 'Vadba v akciji', type: 'vadba' },
          { icon: '🔧', label: 'Detajli opreme', type: 'oprema' },
        ].map((item) => (
          <button
            key={item.type}
            onClick={() => showPhotoMessage(item.type)}
            className="relative aspect-square rounded-xl border border-gray-700 bg-gray-800 text-5xl flex items-center justify-center hover:scale-105 transition group"
          >
            {item.icon}
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-sm text-white py-2 px-3 rounded-b-xl text-center">
              {item.label}
            </div>
          </button>
        ))}
      </div>
      <p className="text-center text-gray-500 mt-6">
        Zamenjaj placeholderje s pravimi fotkami svojega mini templja znoja.
      </p>
    </section>
  );
}
