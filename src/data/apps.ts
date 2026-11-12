// Satu-satunya tempat isi ekosistem. Tambah app = tambah satu entri.
export type App = {
  id: string;
  name: string;
  inv: string; // nomor inventaris museum, mis. 'Inv. 2026.1'
  room: string; // nama ruang tempat karya dipajang
  year: string;
  medium: string; // bahan/stack
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
    inv: 'Inv. 2026.1',
    room: 'Ruang Identitas',
    year: '2026',
    medium: 'SVG, Hanken Grotesk, Astro',
    tagline: 'Identitas visual Louvre',
    body: 'Piramida kaca dari sembilan segitiga, lockup, font, mockup, dan paket unduhan. Semua pedoman pemakaian ada di satu situs.',
    url: 'https://logo.louvre.my.id/',
    host: 'logo.louvre.my.id',
    access: 'publik',
    image: '/img/6-business-card.webp',
    alt: 'Kartu nama hitam dan putih dengan lockup Louvre',
  },
  {
    id: 'pulse',
    name: 'Pulse',
    inv: 'Inv. 2026.2',
    room: 'Ruang Mesin',
    year: '2026',
    medium: 'React, Express, MySQL',
    tagline: 'Dasbor server pribadi',
    body: 'Metrik live, log, terminal di browser, dan agen AI untuk satu mesin Linux. Ruang ini dikunci karena memegang kendali mesin.',
    url: 'https://pulse.louvre.my.id/',
    host: 'pulse.louvre.my.id',
    access: 'butuh login',
    image: '/img/pulse-login.webp',
    alt: 'Halaman masuk Pulse',
  },
];
