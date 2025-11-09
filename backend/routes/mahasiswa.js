import express from "express";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv"; 

dotenv.config(); 
const router = express.Router();
const supabaseUrl = process.env.SUPABASE_URL || 'https://yhutcyuqgdvkrxfphlgx.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlodXRjeXVxZ2R2a3J4ZnBobGd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzNTU2ODUsImV4cCI6MjA3NzkzMTY4NX0.TBt5-4hC1uvBUFnIcyJjeHK9tVPu1TaU_VNjltGSGOs';

const supabase = createClient(supabaseUrl, supabaseKey);

// CREATE
router.post("/", async (req, res) => {
  const { nama, nim, jurusan } = req.body;
  const { data, error } = await supabase.from("mahasiswa").insert([{ nama, nim, jurusan }]);
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// READ
router.get("/", async (req, res) => {
  const { data, error } = await supabase.from("mahasiswa").select("*").order("created_at", { ascending: false });
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { nama, nim, jurusan } = req.body;
  const { data, error } = await supabase.from("mahasiswa").update({ nama, nim, jurusan }).eq("id", id);
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// DELETE
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase.from("mahasiswa").delete().eq("id", id);
  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: "Deleted successfully" });
});

export default router;
