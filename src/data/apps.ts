// Satu-satunya tempat isi ekosistem. Tambah app = tambah satu entri.
export type App = {
  id: string;
  name: string;
  tagline: string;
  body: string;
  url: string;
  host: string;
  access: 'publik' | 'butuh login';
  image: string;
  alt: string;
};

export const apps: App[] = [
  {
    id: 'logo',
    name: 'Logo',
    tagline: 'Identitas visual Louvre',
    body: 'Piramida kaca, lockup, font, mockup, dan paket unduhan. Semua pedoman pemakaian ada di satu situs.',
    url: 'https://logo.louvre.my.id/',
    host: 'logo.louvre.my.id',
    access: 'publik',
    image: '/img/6-business-card.webp',
    alt: 'Kartu nama dengan lockup Louvre',
  },
  {
    id: 'pulse',
    name: 'Pulse',
    tagline: 'Dasbor server pribadi',
    body: 'Metrik live, log, terminal browser, dan agen AI untuk satu mesin Linux. Dikunci di balik login karena memegang kendali mesin.',
    url: 'https://pulse.louvre.my.id/',
    host: 'pulse.louvre.my.id',
    access: 'butuh login',
    image: '/img/pulse-login.webp',
    alt: 'Halaman masuk Pulse',
  },
];
