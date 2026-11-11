# UNCVRD

Situs web studio produksi film **UNCVRD** — _Uncovering visuals from your vision._

Dibangun dengan arah desain sinematik: tipografi besar, komposisi editorial asimetris, permukaan gelap, dan aksen merah dari logo.

**Live:** https://uncvrd.vercel.app/

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router)
- React 19
- JavaScript (tanpa TypeScript)
- Tailwind CSS 4
- Framer Motion 12
- Swiper 11 (terpasang, belum dipakai)

## Menjalankan proyek

Butuh Node.js 18.18 atau lebih baru.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build produksi
npm run start    # jalankan hasil build
npm run lint
```

## Halaman

| Route                   | Isi                                                                          |
| ----------------------- | ---------------------------------------------------------------------------- |
| `/`                     | Hero, Our Story, Featured Works, What We Do, Behind The Scenes, Values, CTA  |
| `/works`                | Featured project, filter kategori, galeri asimetris, Load More               |
| `/works/[slug]`         | Detail proyek: overview, film, proses, BTS, kredit, proyek sebelum/berikut   |
| `/about`                | Cerita, filosofi, pendekatan, tim, nilai                                     |
| `/services`             | Katalog layanan dan alur kerja                                               |
| `/services/[slug]`      | Detail layanan: overview, kapabilitas, proses, karya terkait                 |
| `/contact`              | Informasi kontak, form inquiry, studio                                       |
| `/journal`              | Artikel dengan filter kategori dan pencarian, newsletter                     |
| `/journal/[slug]`       | Template artikel (heading, paragraf, gambar, kutipan, daftar, video)         |
| `/collaborations`       | Klien, kolaborasi unggulan, kolaborator, alasan bermitra                     |
| `/faq`                  | FAQ dengan kategori dan akordeon (menu **Info**)                             |

Slug layanan: `film-production`, `commercial-advertising`, `creative-development`, `photography`, `post-production`, `other-services`.

## Struktur proyek

```
src/
  app/                 Route (App Router), layout, template, not-found
  components/
    layout/            Navbar, DesktopNav, MobileNav, Footer, Providers, PageTransition, ...
    ui/                Komponen bersama: ImagePlaceholder, VideoPlaceholder, PageHero,
                       CTASection, ProjectCard, ProcessRow, Reveal (animasi), Icon, ...
    works/ journal/ contact/ collaborations/ faq/    Komponen per fitur
    Hero.js, OurStory.js, ...                        Seksi halaman Home
  data/                Semua konten (lihat di bawah)
  lib/forms.js         Validasi dan titik integrasi form
  context/             ScrollProvider
  styles/              globals.css (token desain), font.css
public/assets/
  images/<halaman>/    Gambar per halaman
  videos/<halaman>/    Video per halaman
  fonts/               Agrandir, Extenda
```

## Konten dan data

Konten dipisahkan dari komponen. Ubah teks, tautan, dan path aset di sini:

| File                          | Isi                                                     |
| ----------------------------- | ------------------------------------------------------- |
| `src/data/site.js`            | Navigasi, kontak, sosial media, media showreel          |
| `src/data/projects.js`        | Proyek (Works, Project Detail, Related Works)           |
| `src/data/services.js`        | Layanan dan alur kerja                                  |
| `src/data/about.js`           | Pendekatan, tim, nilai                                  |
| `src/data/articles.js`        | Artikel Journal                                         |
| `src/data/collaborations.js`  | Klien, kolaborator, kolaborasi unggulan                 |
| `src/data/faqs.js`            | Pertanyaan FAQ                                          |

> **Semua konten saat ini adalah placeholder.** Nama proyek, tim, klien, kolaborator, artikel, jawaban FAQ, serta email, telepon, dan alamat belum asli. Ganti sebelum peluncuran. Menambah proyek, layanan, atau artikel cukup dengan menambah satu entri di file datanya; halaman dan route akan mengikuti.

## Mengganti aset placeholder

Semua gambar sudah memakai nama file final dan berada di `public/assets/images/<halaman>/`, misalnya:

```
public/assets/images/home/home-hero-poster.jpg
public/assets/images/works/works-project-01.jpg
public/assets/images/collaborations/clients/client-01.svg
public/assets/videos/home/home-showreel.mp4
```

Untuk memasang aset asli, **timpa file dengan nama yang sama**; tidak perlu mengubah kode. Gambar placeholder memuat label nama file di pojok kanan bawah supaya mudah dikenali. Logo klien dan kolaborator boleh SVG atau PNG transparan dengan proporsi apa pun.

Video yang belum ada tidak merusak halaman: dialog video akan menampilkan lokasi file yang harus diisi. Untuk video loop di hero Home, isi `media.homeHeroLoop` di `src/data/site.js`.

## Form

Form kontak dan newsletter sudah memiliki validasi, state error, dan tampilan sukses, tetapi **belum mengirim data ke mana pun**. Tampilan suksesnya tidak mengklaim pesan terkirim.

Untuk menghubungkan layanan sungguhan, ubah dua fungsi di `src/lib/forms.js`:

- `submitInquiry(values)` untuk form kontak
- `subscribeToNewsletter(email)` untuk newsletter

Ganti blok `INTEGRATION POINT` dengan `fetch()` ke API route atau penyedia email Anda, lalu kembalikan `{ ok: true, delivered: true }` saat berhasil.

## Desain

- **Warna** (di `src/styles/globals.css`, diambil dari logo): `ink #0b0908`, `coal #141110`, `bone #fff2db`, `ember #e0290c`, `flare #f2622e`.
- **Tipografi:** Extenda untuk judul (kelas `.display`), Agrandir untuk teks.
- **Animasi:** Framer Motion; seluruh animasi mengikuti `prefers-reduced-motion`.
- **Responsif:** desktop editorial, tablet, dan mobile bertumpuk tanpa overflow horizontal.
- **Aksesibilitas:** skip link, status navigasi aktif, label form, akordeon yang bisa dioperasikan keyboard.

## Lisensi font

Font yang disertakan bukan bebas pakai untuk semua kebutuhan:

- **Agrandir** — versi _Free For Personal Use_ (lihat `public/assets/fonts/Agrandir/Personal-license-agreement`).
- **Extenda** — versi _trial_ dan CC BY-NC.

Untuk situs komersial, beli lisensi yang sesuai sebelum peluncuran.

## Deploy

Dideploy di Vercel. Konfigurasi bawaan Next.js sudah cukup. Pengaturan export statis untuk GitHub Pages masih ada (dikomentari) di `next.config.mjs` jika dibutuhkan.
