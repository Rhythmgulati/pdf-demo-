// server.js

const express = require("express")
const pdfRoutes = require('./pdfRoutes');

const app = express();
const PORT = 7200;

// Use the PDF routes
app.use('/api', pdfRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
