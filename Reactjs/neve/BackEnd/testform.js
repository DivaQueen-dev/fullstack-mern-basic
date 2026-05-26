// test-form.js
const axios = require('axios');

async function testWorkWithUsForm() {
  try {
    console.log('Testing Work With Us form submission...');
    const response = await axios.post('http://localhost:5000/api/forms/work-with-us', {
      name: 'Test User',
      email: 'test@example.com',
      skills: 'JavaScript, Node.js',
      portfolio: 'https://example.com',
      bio: 'This is a test submission.'
    });
    
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

async function testGetWorkDoneForm() {
  try {
    console.log('Testing Get Work Done form submission...');
    const response = await axios.post('http://localhost:5000/api/forms/get-work-done', {
      name: 'Test Client',
      email: 'client@example.com',
      company: 'Test Company',
      projectType: 'Website Development',
      budget: '$5000',
      message: 'This is a test project request.'
    });
    
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

// Run tests
async function runTests() {
  await testWorkWithUsForm();
  console.log('-----------------------');
  await testGetWorkDoneForm();
}

runTests();