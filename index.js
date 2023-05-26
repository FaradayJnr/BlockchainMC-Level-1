const axios = require('axios');

// Function to fetch block information
async function fetchBlockInfo(blockNumber) {
  try {
    // Make an HTTP GET request to the blockchain API
    const response = await axios.get(`https://api.etherscan.io/api?module=block&action=getblockreward&blockno=2165403&apikey=546ZWJMGAQNXUWPX7HNANVJ4PJK6R2GEUI`);
    
    // Check if the response was successful
    if (response.status === 200) {
      const block = response.data.result;
      console.log(response);
      // Log block information
    
      
      // You can access more properties of the block object as needed
    } else {
      console.error('Error:', response.data.error.message);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Specify the block number you want to fetch information for
const blockNumber = '17343388';

// Call the fetchBlockInfo function
fetchBlockInfo(blockNumber);
