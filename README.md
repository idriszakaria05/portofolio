# Website Portofolio – Idris Zakaria

## Struktur folder
```
portfolio/
├── index.html, style.css, script.js   (tidak perlu diubah)
├── data.js                            ✏️ semua teks, peran, kontak, proyek
└── assets/
    ├── CV_Idris_Zakaria.pdf
    ├── images/
    │   ├── profile.jpg                📷 foto profil
    │   └── projects/
    │       ├── sauna/            1.jpg 2.jpg 3.jpg   (1.jpg = cover kartu)
    │       ├── scada-vibrasi/    1.jpg 2.jpg 3.jpg
    │       ├── flowmeter/  efill/  neurostim/  autocup/  autogate/  derailleur/  (sama)
    └── videos/                        🎬 video .mp4
```

## Pop-up detail proyek
Klik kartu proyek untuk membuka pop-up berisi peran, penjelasan, 2-3 foto, dan video.
Isi `role`, `detail`, `images`, dan `video` di `data.js`. Foto yang tidak ada otomatis disembunyikan, jadi 2 foto juga boleh.
Video: `video: "assets/videos/sauna.mp4"` (MP4, idealnya <25 MB; lebih besar → YouTube, taruh di `link`).

## Cara edit kontak
Buka `data.js`, bagian `KONTAK`. Isi `github` dan `instagram` agar tombolnya muncul. Kosongkan `""` untuk menyembunyikan.

## Cara menambah proyek
Salin satu blok `{ title: ..., }` di `projects`, tempel di bawahnya, ubah isinya.

## Publikasi gratis (GitHub Pages)
1. Buat repository baru di GitHub, mis. `portfolio` (Public).
2. Upload SEMUA isi folder ini (index.html di root repo, bukan di dalam subfolder).
3. Settings → Pages → Source: `Deploy from a branch`, Branch: `main`, folder `/ (root)` → Save.
4. Tunggu 1–2 menit. Alamat: `https://USERNAME.github.io/portfolio/`.
   Agar alamatnya `https://USERNAME.github.io/`, beri nama repo persis `USERNAME.github.io`.

## Coba di komputer
Klik dua kali `index.html`, atau jalankan `python -m http.server` lalu buka http://localhost:8000.

## Dua bahasa (ID / EN)
Tombol ID | EN ada di pojok kanan atas. Pilihan bahasa diingat browser.
Di `data.js`, teks dua bahasa ditulis `{ id: "teks Indonesia", en: "English text" }`.
Ganti bahasa awal lewat `defaultLang`. Judul menu dan tombol ada di blok `UI` paling bawah `data.js`.
Foto mengikuti struktur folder per proyek di atas.
