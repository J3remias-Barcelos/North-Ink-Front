const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'site', 'dist')));

// Handle every other route with index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'site', 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
