'use client';

import { useState } from "react";

const quotes = [
  "»Danes 1 serija več kot včeraj.«",
  "»Če ne peče, ni še konec.«",
  "»Malo prostora, veliki cilji.«",
  "»Odloži telefon, dvigni železo.«",
  "»Prideš zaradi bicepsa, ostaneš zaradi družbe.«",
  "»Ne rabiš coacha, rabiš karakter.«",
  "»Kontejner je majhen, ampak gains so ogromni.«",
  "»Če te ne boli... a si sploh treniral?«",
  "»Pump je realnost, ostalo so izgovori.«",
  "»Sanjal sem mišice, zbudil sem se v kontejnerju.«",
  "»Zadnjič, ko sem spustil trening, je stric iz Bosne to začutil.«",
  "»Švica je dokaz, da si še vedno živ, brate.«",
  "»Balkanski gen + protein = legendaren combo.«",
  "»Če ne moreš več... naredi še dve.«",
  "»Ne dvigaš uteži, dvigaš narod ponosa.«",
  "»A ti bo life boljši brez mišic? Neeeće moći.«",
  "»Kdor ne zna čučat, naj kar sede nazaj v pisarno.«",
  "»Mišice ne rastejo od scrollanja, kralju.«",
  "»Kdo rabi spa, če imaš magnezij in motivacijo?«",
  "»Gainsi ne pridejo sami. Naročiš jih v kontejner.«",
  "»Ajde još jedno, ne budi slab!«",
  "»Če si že tukaj, naredi še tiste glupe trebušnjake.«",
  "»Biceps se ne naredi iz izgovorov.«",
  "»Brate, mišica čaka. Ti pa?«",
  "»Ne jokaj, treniraj.«",
  "»Discipline > motivacija. Samo pridi.«",
  "»Na Balkanu se ne gre na fitnes. Fitnes pride k tebi.«",
  "»Ne jokat, dvigat.«",
  "»Če dvigneš še to serijo, si car. Če ne, si še vedno car – ampak en serijo manj.«",
  "»Ni slab dan, je pa leg day.«",
  "»Če kontejner ni zate – kje si pa ti dvigal mišice, u pisarni?«"
];

export default function SectionMotivacija() {
  const [quote, setQuote] = useState<string | null>(null);

  const handleClick = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  };

  return (
    <section id="motivacija" className="max-w-3xl mx-auto px-4 py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">🎤 Rabiš še malo motivacije?</h2>

      <button
        onClick={handleClick}
        className="bg-pink-600 hover:bg-pink-700 transition text-white font-bold py-3 px-6 rounded-full"
      >
        🎤 Vrzi motivacijski citat
      </button>

      {quote && (
        <p className="mt-8 text-pink-300 italic text-xl">💬 {quote}</p>
      )}
    </section>
  );
}
