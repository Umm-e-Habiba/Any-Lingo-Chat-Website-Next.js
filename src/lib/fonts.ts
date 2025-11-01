import { ADLaM_Display, Lato } from 'next/font/google';

// ADLaM Display for headings
export const adlamDisplay = ADLaM_Display({
  weight: ['400'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-adlam-display',
  display: 'swap',
  preload: true,
});

// Lato for body text
export const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-lato',
  display: 'swap',
  preload: true,
});
