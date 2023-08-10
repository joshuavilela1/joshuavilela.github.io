import '../styles/globals.css';
import { Montserrat, Manrope } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-man',
  display: 'swap',
});

export const metadata = {
  title: 'Joshua Vilela',
  description: 'Portfolio Page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
