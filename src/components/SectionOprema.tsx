'use client';

import { useState } from 'react';

export default function SectionOprema() {
  const [filter, setFilter] = useState<'osnovna' | 'dodatna'>('osnovna');

  const osnovnaOprema = [
    {
      title: '🪑 Benć',
      description: 'Klop, po domače benć, nastavljiva višina z negativnim naklonom.',
    },
    {
      title: '🏋️‍♀️ Uteži',
      description: '2x 3kg, 2x 5kg, 2x 10kg, 2x 15kg, 1x 20kg — da gori ali ne gori.',
    },
    {
      title: '🧘 Joga podloge',
      description: 'Za raztezanje, balans ali malo meditacije po seriji.',
    },
    {
      title: '🧵 Trakovi za vadbo',
      description: 'Za aktivacijo, razteg in zadnji požirek motivacije.',
    },
  ];

  const dodatnaOprema = [
    {
      title: '💡 Luči',
      description: 'Ker gains-i ne rabijo LED ekranov.',
    },
    {
      title: '❄️ Prezračevanje',
      description: 'Ko se ti zdi vroče, samo odpri vrata. Narava te hladi.',
    },
    {
      title: '🎵 Bluetooth zvočnik',
      description: 'DJ je prvi, ki prispe. Vsak dan je techno dan.',
    },
    {
      title: '🛠️ DIY squat rack',
      description: 'Zvarjeno z ljubeznijo (in zaščitnimi rokavicami).',
    },
    {
      title: '🦟 Komarniki',
      description: 'Za late night sešne, da nadloge ostanejo zunaj.',
    },
    {
      title: '📦 Regal za uteži',
      description: 'Da je vse pospravljeno. Minimalizem, brate.',
    },
    {
      title: '🔌 Vtičnica + kabli',
      description: 'Ko zmanjka energije. Tudi naprave morajo ojačati.',
    },
    {
      title: '🧼 Razkužilo',
      description: 'Gainse šeraj, bacilov ne.',
    },
  ];

  const currentItems = filter === 'osnovna' ? osnovnaOprema : dodatnaOprema;

  return (
    <section id="oprema" className="max-w-4xl mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">🛠️ Kaj je notri?</h2>

      <div className="flex justify-center mb-10 gap-4">
        <button
          onClick={() => setFilter('osnovna')}
          className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
            filter === 'osnovna'
              ? 'bg-pink-600 text-white border-pink-600'
              : 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700'
          }`}
        >
          🏋️ Osnovna oprema
        </button>
        <button
          onClick={() => setFilter('dodatna')}
          className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
            filter === 'dodatna'
              ? 'bg-pink-600 text-white border-pink-600'
              : 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700'
          }`}
        >
          🧰 Dodatna oprema
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {currentItems.map((item) => (
          <div
            key={item.title}
            className="bg-gray-800/40 border border-gray-700 rounded-xl p-6 hover:scale-[1.03] hover:border-pink-600 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
