import axios from 'axios';

async function testPost() {
  try {
    console.log('Testing POST request...');
    const response = await axios.post('http://localhost:7000/mahasiswa', {
      nama: 'Test Student',
      nim: '123456',
      jurusan: 'Test Major'
    });
    console.log('Success:', response.data);
  } catch (error) {
    console.error('Error status:', error.response?.status);
    console.error('Error data:', error.response?.data);
    console.error('Full error:', error.message);
  }
}

testPost();
