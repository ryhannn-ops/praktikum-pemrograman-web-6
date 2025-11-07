import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import mahasiswaRoutes from './routes/mahasiswa.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 7000;

// Supabase client
const supabaseUrl = process.env.SUPABASE_URL || 'https://yhutcyuqgdvkrxfphlgx.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlodXRjeXVxZ2R2a3J4ZnBobGd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzNTU2ODUsImV4cCI6MjA3NzkzMTY4NX0.TBt5-4hC1uvBUFnIcyJjeHK9tVPu1TaU_VNjltGSGOs';

const supabase = createClient(supabaseUrl, supabaseKey);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/mahasiswa', mahasiswaRoutes);

// Health check
app.get('/', (req, res) => {
  res.send('Sistem CRUD Backend is running!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export { supabase };
