'use client';

import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';





export default function BookingPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    payment: '',
    message: '',
  });

  // reservedTimes: { [date: string]: string[] }
  const [reservedTimes, setReservedTimes] = useState<Record<string, string[]>>({});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch bookings from Supabase on mount
  useEffect(() => {
    async function fetchBookings() {
      setLoading(true);
      const { data, error } = await supabase
        .from('bookings')
        .select('date, time');
      if (error) {
        setError('Napaka pri pridobivanju rezervacij.');
        setLoading(false);
        return;
      }
      // Group by date
      const grouped: Record<string, string[]> = {};
      data?.forEach((row: { date: string; time: string }) => {
        if (!grouped[row.date]) grouped[row.date] = [];
        grouped[row.date].push(row.time);
      });
      setReservedTimes(grouped);
      setLoading(false);
    }
    fetchBookings();
  }, []);


  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  // When a free slot is clicked in the calendar, fill the form
  function handleSlotSelect(date: string, time: string) {
    setForm((prev) => ({ ...prev, date, time }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // basic validation
    if (
      !form.name ||
      !form.email ||
      !isValidEmail(form.email) ||
      !form.date ||
      !form.time ||
      !form.payment
    ) {
      setError('Prosimo, izpolni vsa obvezna polja z veljavnimi podatki.');
      return;
    }

    setError(null);
    // Add booking to Supabase
    const { error: insertError } = await supabase.from('bookings').insert([
      {
        name: form.name,
        email: form.email,
        date: form.date,
        time: form.time,
        payment: form.payment,
        message: form.message,
      },
    ]);
    if (insertError) {
      setError('Napaka pri shranjevanju rezervacije.');
      return;
    }

    // Send confirmation email
    try {
      await fetch('/api/send-confirmation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: form.email,
          name: form.name,
          date: form.date,
          time: form.time,
        }),
      });
    } catch (err) {
      // Optionally handle email error, but don't block booking
      console.error('Email send error:', err);
    }

    // Refresh bookings
    const { data, error: fetchError } = await supabase
      .from('bookings')
      .select('date, time');
    if (fetchError) {
      setError('Napaka pri osveževanju rezervacij.');
      return;
    }
    const grouped: Record<string, string[]> = {};
    data?.forEach((row: { date: string; time: string }) => {
      if (!grouped[row.date]) grouped[row.date] = [];
      grouped[row.date].push(row.time);
    });
    setReservedTimes(grouped);
    setSubmitted(true);
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
              <input
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700"
                placeholder="dd. mm. yyyy"
              />
              {form.date && (
                <div className="mt-1 text-xs text-gray-400">
                  Izbrani datum: {(() => {
                    const [y, m, d] = form.date.split('-');
                    return `${d}. ${m}. ${y}`;
                  })()}
                </div>
              )}
            </div>
            <div>
              <label className="block font-medium mb-1">Termin</label>
              <select name="time" value={form.time} onChange={handleChange}
                className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700">
                <option value="">Izberi</option>
                <option value="6:00–8:00">🌅 Zgodnje jutro (6:00–8:00)</option>
                <option value="8:00–10:00">🌞 Jutro (8:00–10:00)</option>
                <option value="14:00–16:00">🌤️ Popoldne (14:00–16:00)</option>
                <option value="18:00–20:00">🌇 Večer (18:00–20:00)</option>
                <option value="20:00–22:00">🌙 Noč (20:00–22:00)</option>
              </select>
              {/* Show reserved times for selected date */}
              {form.date && reservedTimes[form.date] && (
                <div className="mt-2 text-sm text-red-400">
                  Zasedeni termini: {reservedTimes[form.date].join(', ')}
                </div>
              )}
            </div>
            <div>
              <label className="block font-medium mb-1">Način plačila</label>
              <select name="payment" value={form.payment} onChange={handleChange}
                className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700">
                <option value="">Izberi</option>
                <option value="proteini">🥤 Proteini</option>
                <option value="coffee">☕ Kava</option>
                <option value="drink">🥤 Pijača</option>
                <option value="story">📖 Zgodba</option>
                <option value="snacks">🍪 Prigrizki</option>
                <option value="money">💸 Finančna injekcija</option>
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
      {/* Week-view calendar */}
      <div className="max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-bold mb-4">🗓️ Prosti in zasedeni termini (7 dni)</h2>
        {loading ? (
          <div className="text-center text-gray-400 py-8">Nalaganje rezervacij ...</div>
        ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="bg-gray-900 text-left p-2 sticky left-0 z-10">Termin</th>
                {Array.from({ length: 7 }).map((_, i) => {
                  const dateObj = new Date();
                  dateObj.setDate(dateObj.getDate() + i);
                  const dayName = dateObj.toLocaleDateString('sl-SI', { weekday: 'short' });
                  const dayNum = dateObj.getDate();
                  const monthNum = dateObj.getMonth() + 1;
                  const yearNum = dateObj.getFullYear();
                  return (
                    <th key={i} className="bg-gray-900 p-2 text-center font-semibold">
                      {dayName}<br />{dayNum}. {monthNum}. {yearNum}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {[
                { label: '🌅 Zgodnje jutro', value: '6:00–8:00' },
                { label: '🌞 Jutro', value: '8:00–10:00' },
                { label: '🌤️ Popoldne', value: '14:00–16:00' },
                { label: '🌇 Večer', value: '18:00–20:00' },
                { label: '🌙 Noč', value: '20:00–22:00' },
              ].map(slot => (
                <tr key={slot.value}>
                  <td className="bg-gray-900 p-2 font-medium sticky left-0 z-10">{slot.label}<br /><span className="opacity-70 text-xs">{slot.value}</span></td>
                  {Array.from({ length: 7 }).map((_, i) => {
                    const dateObj = new Date();
                    dateObj.setDate(dateObj.getDate() + i);
                    const dateStr = dateObj.toISOString().slice(0, 10);
                    const isReserved = reservedTimes[dateStr]?.includes(slot.value);
                    return (
                      <td key={dateStr} className="p-2 text-center">
                        {isReserved ? (
                          <span className="block px-2 py-1 rounded-full text-xs font-medium bg-red-600/60 border border-red-400 text-red-100 line-through cursor-not-allowed">
                            Zasedeno
                          </span>
                        ) : (
                          <button
                            type="button"
                            className="block w-full px-2 py-1 rounded-full text-xs font-medium bg-green-700/40 border border-green-400 text-green-100 hover:bg-green-600/70 transition cursor-pointer"
                            onClick={() => handleSlotSelect(dateStr, slot.value)}
                          >
                            Prosto
                          </button>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
  </div>
  )}
      </div>
    </main>
  );
}
