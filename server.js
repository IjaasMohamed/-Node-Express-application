const express = require('express');

const dotenv = require('dotenv');

const app = express();

dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 8080; // store in env file // if the value is not available, then use the default port

app.get('/', (req, res) => {
  res.send('Node Express Application');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
