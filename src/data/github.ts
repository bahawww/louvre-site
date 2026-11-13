// Data aktivitas asli dari GitHub, diambil sekali saat build (bukan di browser).
// Gagal (offline, rate limit) = null, dan halaman tampil tanpa tanggal. Jangan karang angka di sini.
export const GITHUB_USER = 'bahawww';

export type RepoInfo = { name: string; url: string; pushedAt: string };

const cache = new Map<string, Promise<RepoInfo | null>>();

export function repoInfo(repo: string): Promise<RepoInfo | null> {
  let p = cache.get(repo);
  if (!p) {
    p = fetch(`https://api.github.com/repos/${GITHUB_USER}/${repo}`, {
      headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'louvre-site-build' },
      signal: AbortSignal.timeout(8000),
    })
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => (j && j.pushed_at ? { name: j.name, url: j.html_url, pushedAt: j.pushed_at } : null))
      .catch(() => null);
    cache.set(repo, p);
  }
  return p;
}

export function formatDate(iso: string, lang: 'id' | 'en'): string {
  return new Intl.DateTimeFormat(lang === 'id' ? 'id-ID' : 'en-GB', {
    day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Asia/Jakarta',
  }).format(new Date(iso));
}
