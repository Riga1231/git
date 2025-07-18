const express = require("express");
const app = express();
const PORT = 3000;

// Serve static files from the 'public' folder
app.use(express.static("public"));

// Sample API route
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
