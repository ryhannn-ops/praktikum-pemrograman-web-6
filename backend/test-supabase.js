import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL || 'https://yhutcyuqgdvkrxfphlgx.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlodXRjeXVxZ2R2a3J4ZnBobGd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzNTU2ODUsImV4cCI6MjA3NzkzMTY4NX0.TBt5-4hC1uvBUFnIcyJjeHK9tVPu1TaU_VNjltGSGOs';

console.log('Testing Supabase connection...');
console.log('URL:', supabaseUrl);
console.log('Key:', supabaseKey ? 'Present' : 'Missing');

const supabase = createClient(supabaseUrl, supabaseKey);

// Test connection
async function testConnection() {
  try {
    console.log('\nAttempting to fetch from mahasiswa table...');
    const { data, error } = await supabase.from('mahasiswa').select('*');
    
    if (error) {
      console.error('Error:', error);
    } else {
      console.log('Success! Data:', data);
      console.log('Number of records:', data.length);
    }
  } catch (err) {
    console.error('Caught exception:', err);
  }
}

testConnection();
