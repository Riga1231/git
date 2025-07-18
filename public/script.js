const express = require("express");
const app = express();
const PORT = 3000;

// Sample data
const items = ["Apple", "Banana", "Orange", "Mango"];

// Serve static frontend files
app.use(express.static("public"));

// API route to get items
app.get("/api/items", (req, res) => {
  res.json(items);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
