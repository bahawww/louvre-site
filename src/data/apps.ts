// Satu-satunya tempat isi ekosistem. Tambah app = tambah satu entri (teks dua bahasa).
export type Lang = 'id' | 'en';
type T = Record<Lang, string>;

export type App = {
  id: string;
  name: string;
  stack: string;
  url: string;
  host: string;
  access: 'public' | 'login';
  tagline: T;
  body: T;
  icon: 'pulse' | 'louvre' | 'ispu';
  // Gambar panel per bahasa dan tema. Tanpa `image`, panel memakai tampilan contoh (`mock`).
  image?: { src: Record<Lang, { dark: string; light: string }>; width: number; height: number; alt: T };
  mock?: 'pulse-terminal';
  caps: { title: T; text: T }[];
};

export const apps: App[] = [
  {
    id: 'pulse',
    name: 'Pulse',
    stack: 'React · Express',
    url: 'https://pulse.louvre.my.id/',
    host: 'pulse.louvre.my.id',
    access: 'login',
    icon: 'pulse',
    tagline: { id: 'Dasbor server pribadi', en: 'A personal server dashboard' },
    body: {
      id: 'Metrik live, log, terminal di browser, dan agen AI untuk satu mesin Linux. Dikunci di balik login karena memegang kendali mesin.',
      en: 'Live metrics, logs, a terminal in the browser, and AI agents for one Linux machine. It sits behind a login because it controls the machine.',
    },
    mock: 'pulse-terminal',
    caps: [
      {
        title: { id: 'Metrik live', en: 'Live metrics' },
        text: { id: 'CPU, memori, disk, jaringan, dan layanan, diperbarui terus.', en: 'CPU, memory, disk, network, and services, updated continuously.' },
      },
      {
        title: { id: 'Terminal di browser', en: 'Terminal in the browser' },
        text: { id: 'Shell penuh dengan tampilan terbagi, juga nyaman dipakai dari ponsel.', en: 'A full shell with split view that also works well from a phone.' },
      },
      {
        title: { id: 'Agen AI', en: 'AI agents' },
        text: { id: 'Jalankan dan pantau agen coding langsung dari dasbor.', en: 'Start and watch coding agents straight from the dashboard.' },
      },
    ],
  },
  {
    id: 'logo',
    name: 'Logo',
    stack: 'HTML · CSS',
    url: 'https://logo.louvre.my.id/',
    host: 'logo.louvre.my.id',
    access: 'public',
    icon: 'louvre',
    tagline: { id: 'Identitas visual Louvre', en: 'The Louvre visual identity' },
    body: {
      id: 'Piramida kaca dari sembilan segitiga, lockup, font, mockup, dan paket unduhan. Semua pedoman pemakaian ada di satu situs.',
      en: 'A glass pyramid made of nine triangles, with lockups, the typeface, mockups, and a download pack. Every usage guideline lives on one site.',
    },
    image: {
      src: {
        id: { dark: '/img/shot-logo-ekspor-id.webp', light: '/img/shot-logo-ekspor-id-light.webp' },
        en: { dark: '/img/shot-logo-ekspor-en.webp', light: '/img/shot-logo-ekspor-en-light.webp' },
      },
      width: 1440,
      height: 900,
      alt: {
        id: 'Panel ekspor di logo.louvre.my.id: pilih versi, lebar, latar, dan format, dengan pratinjau simbol',
        en: 'The export panel on logo.louvre.my.id: pick a version, width, background, and format, with a preview of the symbol',
      },
    },
    caps: [
      {
        title: { id: 'Ekspor sesuai kebutuhan', en: 'Export what you need' },
        text: { id: 'PNG, JPG, WebP, atau SVG, dengan lebar dan latar yang dipilih sendiri.', en: 'PNG, JPG, WebP, or SVG, at the width and background you choose.' },
      },
      {
        title: { id: 'Pedoman pemakaian', en: 'Usage guidelines' },
        text: { id: 'Ruang aman, ukuran minimum, dan contoh yang perlu dihindari.', en: 'Clear space, minimum sizes, and examples of what to avoid.' },
      },
      {
        title: { id: 'Delapan mockup', en: 'Eight mockups' },
        text: { id: 'Kaos, mug, tote, kartu nama, sampai dasbor web, siap diunduh.', en: 'T-shirt, mug, tote, business card, and a web dashboard, ready to download.' },
      },
    ],
  },
  {
    id: 'udara',
    name: 'Langit Jakarta',
    stack: 'Next.js · FastAPI',
    url: 'https://udara.louvre.my.id/',
    host: 'udara.louvre.my.id',
    access: 'public',
    icon: 'ispu',
    tagline: { id: 'Kualitas udara Jakarta & model ML', en: 'Jakarta air quality & ML models' },
    body: {
      id: 'Indeks Standar Pencemar Udara (ISPU) harian dari 5 stasiun SPKU, Januari 2024 sampai November 2025, plus tiga model machine learning yang menebak kategorinya. Bermula dari tugas kuliah.',
      en: 'Daily air pollution index (ISPU) from 5 monitoring stations, January 2024 to November 2025, plus three machine learning models that predict its category. It began as a university assignment. The site is in Indonesian.',
    },
    image: {
      src: {
        id: { dark: '/img/shot-udara-v2-dark.webp', light: '/img/shot-udara-v2-light.webp' },
        en: { dark: '/img/shot-udara-v2-dark.webp', light: '/img/shot-udara-v2-light.webp' },
      },
      width: 1440,
      height: 900,
      alt: {
        id: 'Halaman ringkasan udara.louvre.my.id: ilustrasi garis kota Jakarta dan akurasi tiga model',
        en: 'The summary page of udara.louvre.my.id: a line drawing of the Jakarta skyline and the accuracy of three models',
      },
    },
    caps: [
      {
        title: { id: 'Tiga model dibandingkan', en: 'Three models compared' },
        text: { id: 'Random Forest, Decision Tree, dan kNN diuji pada 626 hari-stasiun yang dipisahkan.', en: 'Random Forest, Decision Tree, and kNN tested on 626 held-out station-days.' },
      },
      {
        title: { id: 'Kesalahan dan penjelasan', en: 'Errors and explanations' },
        text: { id: 'Lihat hari mana model meleset dan polutan apa yang paling berpengaruh.', en: 'See which days a model missed and which pollutants mattered most.' },
      },
      {
        title: { id: 'Simulator', en: 'Simulator' },
        text: { id: 'Ubah nilai polutan, lihat kategori ISPU yang ditebak model.', en: 'Change pollutant values and see the ISPU category each model predicts.' },
      },
    ],
  },
];
