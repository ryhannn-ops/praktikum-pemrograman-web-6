import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

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
