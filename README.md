# Praktikum Pemrograman Web 6

Proyek ini terdiri dari backend dan frontend untuk sistem CRUD mahasiswa.

## Persyaratan Sistem

- Node.js (versi 18 atau lebih baru)
- npm atau yarn

## Instalasi

1. Clone repositori ini:
   ```bash
   git clone <url-repositori>
   cd praktikum-pemrograman-web-6-main
   ```

2. Instal dependensi untuk backend:
   ```bash
   cd backend
   npm install
   cd ..
   ```

3. Instal dependensi untuk frontend:
   ```bash
   cd frontend
   npm install
   cd ..
   ```

## Menjalankan Aplikasi

### Backend

Untuk menjalankan server backend:

```bash
cd backend
npm run dev
```

Server backend akan berjalan di `http://localhost:7000`.

### Frontend

Untuk menjalankan aplikasi frontend:

```bash
cd frontend
npm run dev
```

Aplikasi frontend akan berjalan di `http://localhost:3000`.

### Menjalankan Backend dan Frontend Secara Bersamaan

Untuk menjalankan backend dan frontend secara bersamaan, buka dua terminal terpisah:

Terminal 1 (Backend):
```bash
cd backend
npm run dev
```

Terminal 2 (Frontend):
```bash
cd frontend
npm run dev
```

Atau, jika Anda menggunakan Windows PowerShell atau Command Prompt, Anda dapat menjalankan keduanya dalam satu perintah menggunakan `;` sebagai pemisah:

```bash
cd backend; npm run dev &
cd frontend; npm run dev
```

## API Endpoints

- `GET /` - Health check
- `GET /mahasiswa` - Mendapatkan semua data mahasiswa
- `POST /mahasiswa` - Menambahkan mahasiswa baru
- `PUT /mahasiswa/:id` - Mengupdate data mahasiswa
- `DELETE /mahasiswa/:id` - Menghapus mahasiswa

## Teknologi yang Digunakan

- Backend: Node.js, Express.js, Supabase
- Frontend: Next.js, React, TypeScript, Tailwind CSS

## Kontribusi

1. Fork repositori ini
2. Buat branch fitur baru (`git checkout -b fitur-baru`)
3. Commit perubahan (`git commit -am 'Menambahkan fitur baru'`)
4. Push ke branch (`git push origin fitur-baru`)
5. Buat Pull Request

## Lisensi

ISC
