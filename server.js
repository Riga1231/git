const express = require("express");
const app = express();
const PORT = 3000;

// Serve static files from the public folder
app.use(express.static("public"));

// Sample data
const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

// API endpoint
app.get("/api/items", (req, res) => {
  res.json(items);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
