import './globals.css';
import { Providers } from './providers';
import { inter } from './fonts'; // <-- to dodaj

export const metadata = {
  title: 'Kontejnerska Telovadnica',
  description: 'Kjer se sanje srečajo z železom',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sl" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#0f0f23] text-white`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
