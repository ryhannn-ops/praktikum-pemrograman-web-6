"use client";

import { useState, useEffect, FormEvent } from "react";
import axios from "axios";

interface Mahasiswa {
  id: string;
  nama: string;
  nim: string;
  jurusan: string;
}

const API_URL = "/api/mahasiswa";

export default function Home() {
  const [mahasiswa, setMahasiswa] = useState<Mahasiswa[]>([]);
  const [form, setForm] = useState<Omit<Mahasiswa, "id">>({
    nama: "",
    nim: "",
    jurusan: "",
  });
  const [editId, setEditId] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<Mahasiswa[]>(API_URL);
        setMahasiswa(res.data);
      } catch (err) {
        console.error("Gagal mengambil data mahasiswa:", err);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`${API_URL}/${editId}`, form);
      } else {
        await axios.post(API_URL, form);
      }
      setForm({ nama: "", nim: "", jurusan: "" });
      setEditId(null);
      const res = await axios.get<Mahasiswa[]>(API_URL);
      setMahasiswa(res.data);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Yakin hapus?")) {
      await axios.delete(`${API_URL}/${id}`);
      setMahasiswa((prev) => prev.filter((m) => m.id !== id));
    }
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-800 mb-8">Data Mahasiswa</h1>

        {/* Form Input */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-6">
          <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-4">
            <input
              className="text-black px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nama"
              name="nama"
              value={form.nama}
              onChange={(e) => setForm({ ...form, nama: e.target.value })}
              required
            />
            <input
              className="text-black px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="NIM"
              name="nim"
              value={form.nim}
              onChange={(e) => setForm({ ...form, nim: e.target.value })}
              required
            />
            <input
              className="text-black px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Jurusan"
              name="jurusan"
              value={form.jurusan}
              onChange={(e) => setForm({ ...form, jurusan: e.target.value })}
              required
            />
            <button className="md:col-span-3 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
              {editId ? "Update" : "Tambah"}
            </button>
          </form>
        </div>

        {/* Tabel Data */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                  Nama
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                  NIM
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                  Jurusan
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mahasiswa.map((m) => (
                <tr key={m.id} className="hover:bg-slate-50 transition">
                  <td className="px-6 py-4 text-slate-800">{m.nama}</td>
                  <td className="px-6 py-4 text-slate-600">{m.nim}</td>
                  <td className="px-6 py-4 text-slate-600">{m.jurusan}</td>
                  <td className="px-6 py-4 flex justify-center gap-2">
                    <button
                      onClick={() => {
                        setForm({
                          nama: m.nama,
                          nim: m.nim,
                          jurusan: m.jurusan,
                        });
                        setEditId(m.id);
                      }}
                      className="px-4 py-1.5 text-sm text-blue-600 hover:bg-blue-50 rounded-lg"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(m.id)}
                      className="px-4 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded-lg"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
