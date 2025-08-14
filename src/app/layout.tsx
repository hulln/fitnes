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
  <body style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
