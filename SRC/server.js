const express = require("express");
const { main } = require("../SRC/main");
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Endpoint to receive UWP string
app.post("/parse", (req, res) => {
  const { uwp } = req.body;

  if (!uwp || uwp.length !== 8 || !/^[0-9A-Fa-f]+$/.test(uwp)) {
    return res.status(400).send("Invalid UWP string");
  }

  const result = main(uwp); // Assuming `main` is your parsing function
  res.json({ result });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
