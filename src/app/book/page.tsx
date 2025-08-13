'use client';

import { useState } from 'react';

export default function BookingPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    workout: '',
    payment: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // basic validation
    if (
      !form.name ||
      !form.email ||
      !isValidEmail(form.email) ||
      !form.date ||
      !form.time ||
      !form.workout ||
      !form.payment
    ) {
      setError('Prosimo, izpolni vsa obvezna polja z veljavnimi podatki.');
      return;
    }

    setError(null);
    console.log('Form data:', form);
    setSubmitted(true);

    // TODO: send email + save to Supabase
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">📅 Rezervacija termina</h1>

        {submitted ? (
          <div className="bg-green-700/30 border border-green-500 rounded-lg p-4">
            🎉 Rezervacija za <strong>{form.name}</strong> je zabeležena!  
            <br />📬 Potrditveno sporočilo bo poslano na: <strong>{form.email}</strong>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-6">
            {error && (
              <div className="bg-red-700/30 border border-red-500 rounded-lg p-3 text-red-200">
                ⚠️ {error}
              </div>
            )}
            <div>
              <label className="block font-medium mb-1">Tvoje ime</label>
              <input name="name" type="text" value={form.name} onChange={handleChange}
                placeholder="npr. Mišični Manijak"
                className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700" />
            </div>
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange}
                placeholder="tvoje@ime.com"
                className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700" />
            </div>
            <div>
              <label className="block font-medium mb-1">Datum</label>
              <input name="date" type="date" value={form.date} onChange={handleChange}
                className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700" />
            </div>
            <div>
              <label className="block font-medium mb-1">Termin</label>
              <select name="time" value={form.time} onChange={handleChange}
                className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700">
                <option value="">Izberi</option>
                <option value="6:00–8:00">Zgodnje jutro</option>
                <option value="8:00–10:00">Jutro</option>
                <option value="14:00–16:00">Popoldne</option>
                <option value="18:00–20:00">Večer</option>
                <option value="20:00–22:00">Noč</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1">Tip vadbe</label>
              <select name="workout" value={form.workout} onChange={handleChange}
                className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700">
                <option value="">Izberi</option>
                <option value="močna">Moč</option>
                <option value="kardio">Kardio</option>
                <option value="joga">Joga</option>
                <option value="crossfit">CrossFit</option>
                <option value="začetnik">Začetnik</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1">Način plačila</label>
              <select name="payment" value={form.payment} onChange={handleChange}
                className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700">
                <option value="">Izberi</option>
                <option value="coffee">☕ Kava</option>
                <option value="beer">🍺 Pivo</option>
                <option value="story">📖 Zgodba</option>
                <option value="snacks">🍪 Prigrizki</option>
                <option value="compliments">😊 Komplimenti</option>
                <option value="labor">💪 Fizična pomoč</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1">Sporočilo (neobvezno)</label>
              <textarea name="message" rows={4} value={form.message} onChange={handleChange}
                className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700"
                placeholder="npr. posebne želje, omejitve…" />
            </div>
            <button type="submit" className="bg-pink-600 hover:bg-pink-700 transition text-white font-bold py-3 rounded-full">
              Rezerviraj 🚀
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
